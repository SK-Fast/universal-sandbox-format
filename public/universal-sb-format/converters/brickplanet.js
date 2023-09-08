const uF = require('../utils/universal-format.js')

const metadata = {
    platformName: "Brickplanet",
    supportedVersion: ``,
    fileExtension: `.bppf`,
    fileType: "buffer",
}

// Alyx: this is a custom string reader since C# uses 7-bit encoded strings
const decoder = new TextDecoder();

DataView.prototype.getString = function(offset, littleEndian = false) {
    let length = 0;
    let shift = 0;
    let byte;

    do {
        byte = this.getUint8(offset++, littleEndian);
        length |= (byte & 0x7f) << shift;
        shift += 7;
    } while (byte >= 0x80);

    const end = offset + length;
    return {offset: end, value: decoder.decode(this.buffer.slice(offset, end))};
};

// Alyx: this is a recursive function to read the bytes
function deserializeBinary(view, offset = 0) {
    const type = view.getUint8(offset, true);
    offset += 1;

    switch (type) {
        case 1: { // array
            const length = view.getInt32(offset, true);
            offset += 4;

            const array = [];

            for (let i = 0; i < length; i++) {
                const value = deserializeBinary(view, offset);
                offset = value.offset;

                array.push(value.value);
            }

            return {offset, value: array};
        }
        case 2: { // object
            const length = view.getInt32(offset, true);
            offset += 4;

            const object = {};

            for (let i = 0; i < length; i++) {
                const key = view.getString(offset, true);
                offset = key.offset;

                const value = deserializeBinary(view, offset);
                offset = value.offset;

                object[key.value] = value.value;
            }

            return {offset, value: object};
        }
        case 3: { // string
            return view.getString(offset, true);
        }
        case 4: { // number
            const number = view.getFloat64(offset, true);
            offset += 8;

            return {offset, value: number};
        }
        case 5: { // null
            return {offset, value: null};
        }
        case 6: { // boolean
            const boolean = view.getUint8(offset, true);
            offset += 1;

            return {offset, value: boolean === 1};
        }
    }
}

function bpV3ToData(raw) {
    const splitted = raw.split(" ")
    return new uF.Vector3(splitted[0], splitted[1], splitted[2])
}

function bpColorToData(raw) {
    return new uF.Color3(raw[0] / 255, raw[1] / 255, raw[2] / 255)
}

async function toUniversal(dataRaw) {
    const result = uF.createUniversal("brickplanet")

    const buffer = dataRaw
    const decompress = bz2.decompress(new Uint8Array(buffer));
    const view = new DataView(decompress.buffer);

    const data = deserializeBinary(view).value;
    console.log(data)

    function partRecursive(d) {
        for (const item of d.i) {
            if (item.a1 == 0) {
                console.log(item.a)
                const flags = []

                if (item.Anchored) {
                    flags.push("anchored")
                }

                if (!item.CanCollide) {
                    flags.push("no_collision")
                }

                result.addPart(
                    item.a ?? "Part",
                    bpV3ToData(item.g),
                    bpV3ToData(item.e),
                    bpV3ToData(item.f),
                    bpColorToData(item.d),
                    (item.d[3] / 255),
                    "brick",
                    flags
                )
            }
            if (item.i) {
                partRecursive(item)
            }
        }
    }

    partRecursive(data.Objects[0])
    console.log(result)
    return result
}

module.exports = { metadata, toUniversal }