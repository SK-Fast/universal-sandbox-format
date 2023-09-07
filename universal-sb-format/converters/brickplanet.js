const pako = require('pako')
const uF = require('../utils/universal-format.js')

const metadata = {
    platformName: "World To Build",
    supportedVersion: `^15`,
    fileExtension: `.wtbmap`,
    fileType: "text",
    note: "- If you're converting World To Build to something else, locate the .wtbmap file in maps folder<br>- Converting from World To Build will not export the Designs<br>- Spawnpoints is not supported yet"
}

function fromUniversal(u) {
    const baseJSON = {
        "version": 15,
        "name": "Map",
        "mapId": -1,
        "wObjects": [
            {
                "v": 1,
                "components": [
                    {
                        "$type": "WComponent_Object, Assembly-CSharp",
                        "properties": [
                            {
                                "$type": "WProperty_ObjectId, Assembly-CSharp",
                                "data": "0"
                            },
                            {
                                "$type": "WProperty_ObjectStatic, Assembly-CSharp",
                                "data": "false"
                            },
                            {
                                "$type": "WProperty_ObjectName, Assembly-CSharp",
                                "data": "\"The Sun\""
                            },
                            {
                                "$type": "WProperty_ObjectOutlinerIndex, Assembly-CSharp",
                                "data": "0"
                            },
                            {
                                "$type": "WProperty_ObjectReplicated, Assembly-CSharp",
                                "data": "true"
                            }
                        ]
                    },
                    {
                        "$type": "WComponent_Transform, Assembly-CSharp",
                        "properties": [
                            {
                                "$type": "WProperty_TransformSize, Assembly-CSharp",
                                "data": "{\"x\":1.0,\"y\":1.0,\"z\":1.0}"
                            },
                            {
                                "$type": "WProperty_TransformPosition, Assembly-CSharp",
                                "data": "{\"x\":0.0,\"y\":30.0,\"z\":0.0}"
                            },
                            {
                                "$type": "WProperty_TransformRotation, Assembly-CSharp",
                                "data": "{\"x\":35.0,\"y\":-29.0,\"z\":1.0}"
                            },
                            {
                                "$type": "WProperty_TransformParent, Assembly-CSharp",
                                "data": "-1"
                            }
                        ]
                    },
                    {
                        "$type": "WComponent_Light, Assembly-CSharp",
                        "properties": [
                            {
                                "$type": "WProperty_LightType, Assembly-CSharp",
                                "data": "1"
                            },
                            {
                                "$type": "WProperty_LightColor, Assembly-CSharp",
                                "data": "\"CCBFB1FF\""
                            },
                            {
                                "$type": "WProperty_LightRange, Assembly-CSharp",
                                "data": "100.0"
                            },
                            {
                                "$type": "WProperty_LightSpotlightAngle, Assembly-CSharp",
                                "data": "30.0"
                            },
                            {
                                "$type": "WProperty_LightBrightness, Assembly-CSharp",
                                "data": "1.2"
                            },
                            {
                                "$type": "WProperty_LightShadows, Assembly-CSharp",
                                "data": "true"
                            },
                            {
                                "$type": "WProperty_LightEnabled, Assembly-CSharp",
                                "data": "true"
                            }
                        ]
                    }
                ],
                "primedNetId": 0,
                "cachedDataInitialized": true
            }
        ]
    }

    for (const part of u.parts) {
        baseJSON.wObjects.push({
            "v": 1,
            "components": [
                {
                    "$type": "WComponent_Object, Assembly-CSharp",
                    "properties": [
                        {
                            "$type": "WProperty_ObjectId, Assembly-CSharp",
                            "data": "1"
                        },
                        {
                            "$type": "WProperty_ObjectStatic, Assembly-CSharp",
                            "data": "false"
                        },
                        {
                            "$type": "WProperty_ObjectName, Assembly-CSharp",
                            "data": `"${part.name}"`
                        },
                        {
                            "$type": "WProperty_ObjectOutlinerIndex, Assembly-CSharp",
                            "data": "1"
                        },
                        {
                            "$type": "WProperty_ObjectReplicated, Assembly-CSharp",
                            "data": "true"
                        }
                    ]
                },
                {
                    "$type": "WComponent_Transform, Assembly-CSharp",
                    "properties": [
                        {
                            "$type": "WProperty_TransformSize, Assembly-CSharp",
                            "data": `{"x":${part.size.x ?? 0},"y":${part.size.y ?? 0},"z":${part.size.z ?? 0}}`
                        },
                        {
                            "$type": "WProperty_TransformPosition, Assembly-CSharp",
                            "data": `{"x":${part.pos.x ?? 0},"y":${part.pos.y ?? 0},"z":${part.pos.z ?? 0}}`
                        },
                        {
                            "$type": "WProperty_TransformRotation, Assembly-CSharp",
                            "data": `{"x":${part.rot.x ?? 0},"y":${part.rot.y ?? 0},"z":${part.rot.z ?? 0}}`
                        },
                        {
                            "$type": "WProperty_TransformParent, Assembly-CSharp",
                            "data": "-1"
                        }
                    ]
                },
                {
                    "$type": "WComponent_BlockRenderer, Assembly-CSharp",
                    "properties": [
                        {
                            "$type": "WProperty_BlockRendererColor, Assembly-CSharp",
                            "data": `"${part.color.hex.replace("#", "")}FF"`
                        },
                        {
                            "$type": "WProperty_BlockRendererVisible, Assembly-CSharp",
                            "data": "true"
                        },
                        {
                            "$type": "WProperty_BlockRendererShadows, Assembly-CSharp",
                            "data": "true"
                        },
                        {
                            "$type": "WProperty_BlockRendererTransparency, Assembly-CSharp",
                            "data": "0.0"
                        }
                    ]
                },
                {
                    "$type": "WComponent_Collider, Assembly-CSharp",
                    "properties": [
                        {
                            "$type": "WProperty_ColliderEnabled, Assembly-CSharp",
                            "data": "true"
                        },
                        {
                            "$type": "WProperty_ColliderShape, Assembly-CSharp",
                            "data": "0"
                        },
                        {
                            "$type": "WProperty_ColliderIsTrigger, Assembly-CSharp",
                            "data": "false"
                        },
                        {
                            "$type": "WProperty_ColliderBounciness, Assembly-CSharp",
                            "data": "0.0"
                        },
                        {
                            "$type": "WProperty_ColliderSlipperiness, Assembly-CSharp",
                            "data": "0.0"
                        }
                    ]
                }
            ],
            "primedNetId": 0,
            "cachedDataInitialized": true
        })
    }

    console.log(baseJSON)
    console.log(JSON.stringify(baseJSON))

    const compressedArray = pako.gzip(JSON.stringify(baseJSON));
    const compressed = btoa(String.fromCharCode.apply(null, compressedArray));

    console.log(compressed)

    return compressed
}

function wtbV3ToData(raw) {
    const d = JSON.parse(raw)
    return new uF.Vector3(
        parseFloat(d.x),
        parseFloat(d.y),
        parseFloat(d.z)
    )
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255
    } : null;
}

function wtbColorToData(raw) {
    const d = hexToRgb(raw.replace('"', '').slice(0, -3))
    return new uF.Color3(
        d.r,
        d.g,
        d.b
    )
}

function toUniversal(dataRaw) {
    // Decompress data
    const gezipedData = atob(dataRaw)
    const gzipedDataArray = Uint8Array.from(gezipedData, c => c.charCodeAt(0))
    const strData = new TextDecoder().decode(pako.ungzip(gzipedDataArray));
    const data = JSON.parse(strData);

    const result = uF.createUniversal()

    for (const object of data.wObjects) {
        const components = object.components

        const objectMetadata = components.find((e) => e.$type == "WComponent_Object, Assembly-CSharp")
        const blockRenderer = components.find((e) => e.$type == "WComponent_BlockRenderer, Assembly-CSharp")

        if (blockRenderer) {
            const transformComponent = components.find((e) => e.$type == "WComponent_Transform, Assembly-CSharp")

            let objName = objectMetadata.properties.find((e) => e.$type == "WProperty_ObjectName, Assembly-CSharp").data

            result.addPart(
                objName,
                wtbV3ToData(transformComponent.properties.find((e) => e.$type == "WProperty_TransformPosition, Assembly-CSharp").data),
                wtbV3ToData(transformComponent.properties.find((e) => e.$type == "WProperty_TransformSize, Assembly-CSharp").data),
                wtbV3ToData(transformComponent.properties.find((e) => e.$type == "WProperty_TransformRotation, Assembly-CSharp").data),
                wtbColorToData(blockRenderer.properties.find((e) => e.$type == "WProperty_BlockRendererColor, Assembly-CSharp").data),
                1 - transformComponent.properties.find((e) => e.$type == "WProperty_BlockRendererTransparency, Assembly-CSharp").data,
                "brick"
            )
        }
    }

    return result
}

module.exports = { toUniversal, fromUniversal, metadata }