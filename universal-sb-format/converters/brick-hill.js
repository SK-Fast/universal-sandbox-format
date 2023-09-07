const uF = require('../utils/universal-format.js')

const metadata = {
    platformName: "Brick Hill",
    supportedVersion: `^0.2.0.0`,
    fileExtension: `.brk`,
    fileType: "text"
}

function txt2RGB(txt) {
    return new uF.Color3(txt.split(' ')[0], txt.split(' ')[1], txt.split(' ')[2].replace('\r', ''))
}

// +COLOR 0.87 0 0.05 
function readAddition(txt) {
    let txtp = txt.replace('\t', '').replace('\r', '')
    let argKey = txtp.split(' ')[0]
    let argVal = txtp.replace(`${argKey} `, '')

    return [argKey, argVal]
}

function fromUniversal(u) {
    let result = ""
    result += "B R I C K  W O R K S H O P  V0.2.0.0\n\n"
    result += "0 0 0\n"
    result += "0.137255 0.509804 0.2 1\n"
    result += "0.4862745 0.6980392 0.8980392\n"
    result += "0\n"
    result += "300\n\n"

    for (const part of u.parts) {
        // PosX PosY PosZ SizeX SizeY SizeZ ColorR ColorG ColorB ColorA
        result += `${part.pos.x} ${part.pos.z} ${part.pos.y} ${part.size.x} ${part.size.z} ${part.size.y} ${part.color.r} ${part.color.g} ${part.color.b} ${part.opacity}\n`
        result += `\t+NAME ${part.name}\n`
    }

    result += "\n"
    return result
}

function toUniversal(dataRaw) {
    const data = dataRaw.split('\n')
    const result = uF.createUniversal()

    let i = 1

    let baseplateColor = ""
    let inParts = false
    let inPart = false

    let posX;
    let posY;
    let posZ;
    let sizeX;
    let sizeY;
    let sizeZ;
    let colorR;
    let colorG;
    let colorB;
    let colorA;
    let objFlags = {}
    let teamName = ""

    for (const content of data) {
        if (i == 4) {
            baseplateColor = content
        }
        if (i == 6) {
            result.addPart(
                "Baseplate",
                new uF.Vector3(0, -3, 0),
                new uF.Vector3(content, 1, content),
                new uF.Vector3(0, 0, 0),
                txt2RGB(baseplateColor),
                1,
                "brick"
            )
            
        }

        let contentSpace = content.split(' ')

        if (inParts && content.startsWith('\t') == false && contentSpace[9] !== undefined) {
            if (inPart) {
                const flags = []

                if (objFlags["+SHAPE"] == "spawnpoint") {
                    flags.push("spawn")
                }

                result.addPart(
                    objFlags["+NAME"] ?? "Part",
                    new uF.Vector3(parseFloat(posX), parseFloat(posZ), parseFloat(posY)),
                    new uF.Vector3(sizeX, sizeZ, sizeY),
                    new uF.Vector3(objFlags["+ROT"] ?? 0, 0, 0),
                    new uF.Color3(colorR, colorG, colorB),
                    parseFloat(colorA),
                    "brick",
                    flags
                )
            }

            inPart = true

            posX = contentSpace[0]
            posY = contentSpace[1]
            posZ = contentSpace[2]
            sizeX = contentSpace[3]
            sizeY = contentSpace[4]
            sizeZ = contentSpace[5]
            colorR = contentSpace[6]
            colorG = contentSpace[7]
            colorB = contentSpace[8]
            colorA = contentSpace[9].replace('\r', '')
            objFlags = {}
        }

        if (inPart && content.startsWith('\t') == true) {
            const addition = readAddition(content)

            objFlags[addition[0]] = addition[1]
        }

        if (i == 8) {
            inParts = true
        }
        i++
    }

    console.log(result)

    return result
}

module.exports = { toUniversal, fromUniversal, metadata }