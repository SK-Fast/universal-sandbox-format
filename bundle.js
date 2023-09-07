(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"../utils/universal-format.js":5}],2:[function(require,module,exports){
const uF = require('../utils/universal-format.js')

const shapesEnum = {
  brick: 0,
  wedge: 3
}

const metadata = {
  platformName: "Polytoria",
  supportedVersion: `^1.3`,
  fileExtension: `.poly`,
  fileType: "text"
}

function fromUniversal(u) {
  // Start of file
  let data = `<?xml version="1.0" encoding="UTF-8"?>
    <game version="1.3.40">
      <Item class="Environment">
        <Properties>
          <int name="Skybox">0</int>
          <vector3 name="Gravity">
            <X>0.0000</X>
            <Y>-85.0000</Y>
            <Z>0.0000</Z>
          </vector3>
          <boolean name="FogEnabled">false</boolean>
          <float name="FogStartDistance">0.0000</float>
          <float name="FogEndDistance">250.0000</float>
          <color name="FogColor">
            <R>1.0000</R>
            <G>1.0000</G>
            <B>1.0000</B>
            <A>1.0000</A>
          </color>
          <string name="Name">Environment</string>
        </Properties>`

  for (const part of u.parts) {
    let additionalItem = ""

    data += `<Item class="Part">
        <Properties>
          <color name="Color">
            <R>${part.color.r ?? 1}</R>
            <G>${part.color.g ?? 1}</G>
            <B>${part.color.b ?? 1}</B>
            <A>${part.opacity ?? 1}</A>
          </color>
          <boolean name="Anchored">${part.anchored ?? true}</boolean>
          <boolean name="CanCollide">${part.canCollide ?? true}</boolean>
          <boolean name="IsSpawn">${part.spawn ?? false}</boolean>
          <boolean name="HideStuds">true</boolean>
          <int name="Shape">${shapesEnum[part.shape] ?? 0}</int>
          <int name="Material">14</int>
          <vector3 name="Velocity">
            <X>0.0000</X>
            <Y>0.0000</Y>
            <Z>0.0000</Z>
          </vector3>
          <float name="Drag">0.0000</float>
          <float name="AngularDrag">0.0500</float>
          <float name="Mass">1.0000</float>
          <boolean name="UseGravity">true</boolean>
          <vector3 name="Position">
            <X>${part.pos.x ?? 0}</X>
            <Y>${part.pos.y ?? 0}</Y>
            <Z>${part.pos.z ?? 0}</Z>
          </vector3>
          <vector3 name="Rotation">
            <X>${part.rot.x ?? 0}</X>
            <Y>${part.rot.y ?? 0}</Y>
            <Z>${part.rot.z ?? 0}</Z>
          </vector3>
          <vector3 name="LocalPosition">
            <X>${part.pos.x ?? 0}</X>
            <Y>${part.pos.y ?? 0}</Y>
            <Z>${part.pos.z ?? 0}</Z>
          </vector3>
          <vector3 name="LocalRotation">
            <X>${part.rot.x ?? 0}</X>
            <Y>${part.rot.y ?? 0}</Y>
            <Z>${part.rot.z ?? 0}</Z>
          </vector3>
          <vector3 name="Size">
            <X>${part.size.x ?? 1}</X>
            <Y>${part.size.y ?? 1}</Y>
            <Z>${part.size.z ?? 1}</Z>
          </vector3>
          <vector3 name="LocalSize">
            <X>${part.size.x ?? 1}</X>
            <Y>${part.size.y ?? 1}</Y>
            <Z>${part.size.z ?? 1}</Z>
          </vector3>
          <string name="Name">${part.name ?? "Brick"}</string>
        </Properties>
      </Item>${additionalItem}`
  }

  // End of file
  data += `</Item>
    <Item class="Lighting">
      <Properties>
        <float name="SunBrightness">1</float>
        <color name="SunColor">
          <R>1.0000</R>
          <G>1.0000</G>
          <B>1.0000</B>
          <A>1.0000</A>
        </color>
        <color name="AmbientColor">
          <R>1</R>
          <G>1</G>
          <B>1</B>
          <A>1</A>
        </color>
        <int name="AmbientSource">1</int>
        <boolean name="Shadows">true</boolean>
        <string name="Name">Lighting</string>
      </Properties>
    </Item>
    <Item class="Players">
      <Properties>
        <boolean name="PlayerCollisionEnabled">false</boolean>
        <string name="Name">Players</string>
      </Properties>
    </Item>
    <Item class="ScriptService">
      <Properties>
        <string name="Name">ScriptService</string>
      </Properties>
    </Item>
    <Item class="Hidden">
      <Properties>
        <string name="Name">Hidden</string>
      </Properties>
    </Item>
    <Item class="PlayerDefaults">
      <Properties>
        <float name="MaxHealth">100.0000</float>
        <float name="WalkSpeed">16.0000</float>
        <float name="SprintSpeed">25.0000</float>
        <boolean name="StaminaEnabled">true</boolean>
        <float name="Stamina">0.0000</float>
        <float name="MaxStamina">3.0000</float>
        <float name="StaminaRegen">1.2000</float>
        <float name="JumpPower">36.0000</float>
        <float name="RespawnTime">5.0000</float>
        <color name="ChatColor">
          <R>1.0000</R>
          <G>1.0000</G>
          <B>1.0000</B>
          <A>1.0000</A>
        </color>
        <string name="Name">PlayerDefaults</string>
      </Properties>
      <Item class="Backpack">
        <Properties>
          <string name="Name">Backpack</string>
        </Properties>
      </Item>
    </Item>
    <Item class="PlayerGUI">
      <Properties>
        <boolean name="Interactable">true</boolean>
        <float name="Opacity">1.0000</float>
        <string name="Name">PlayerGUI</string>
      </Properties>
    </Item>
  </game>`
  return data
}

function vector3ToData(raw) {
  return new uF.Vector3(
    parseFloat(raw.querySelector("X").innerHTML),
    parseFloat(raw.querySelector("Y").innerHTML),
    parseFloat(raw.querySelector("Z").innerHTML)
  )
}

function color3ToData(raw) {
  return new uF.Color3(
    parseFloat(raw.querySelector("R").innerHTML),
    parseFloat(raw.querySelector("G").innerHTML),
    parseFloat(raw.querySelector("B").innerHTML)
  )
}

function getAlphaFromColor(raw) {
  return parseFloat(raw.querySelector("A").innerHTML)
}

function toUniversal(dataRaw) {
  const result = uF.createUniversal()

  let parser = new DOMParser();
  let xmlDoc = parser.parseFromString(dataRaw, "text/xml");

  let parts = xmlDoc.querySelectorAll('Item[class="Environment"] Item[class="Part"]');

  for (const part of parts) {
    const properties = part.querySelector("Properties")
    const color = color3ToData(properties.querySelector('*[name="Color"]'))
    console.log(color)

    const flags = []

    if (properties.querySelector('*[name="IsSpawn"]') == "true") {
      flags.push("spawn")
    }

    result.addPart(
      properties.querySelector('*[name="Name"]').innerHTML ?? "Part",
      vector3ToData(properties.querySelector('*[name="Position"]')),
      vector3ToData(properties.querySelector('*[name="Size"]')),
      vector3ToData(properties.querySelector('*[name="Rotation"]')),
      color,
      getAlphaFromColor(properties.querySelector('*[name="Color"]')),
      "brick",
      flags
    )
  }

  return result
}

module.exports = { fromUniversal, toUniversal, metadata }
},{"../utils/universal-format.js":5}],3:[function(require,module,exports){
const uF = require('../utils/universal-format.js')

const metadata = {
    platformName: "World To Build",
    supportedVersion: `^1`,
    fileExtension: `.zip`,
    fileType: "buffer",
    note: "If you're converting World To Build to something else, pack the folder as .zip first."
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
},{"../utils/universal-format.js":5}],4:[function(require,module,exports){
const convertBtn = document.querySelector("#convert-btn")
const fromFormatOption = document.querySelector("#from-format")
const toFormatOption = document.querySelector("#to-format")
const fileUploadField = document.querySelector("#place-choose")
let sourceBuffer = {}

const formats = {
    pt: require('./converters/polytoria.js'),
    bh: require('./converters/brick-hill.js'),
    worldtobuild: require('./converters/worldtobuild.js'),
}

for (const [k, v] of Object.entries(formats)) {
    const option = `<option value=${k}>${v.metadata.platformName} ${v.metadata.supportedVersion} (${v.metadata.fileExtension})</option>`
    fromFormatOption.innerHTML += option
    toFormatOption.innerHTML += option
}

const convertFile = async () => {
    const fromModule = formats[fromFormatOption.value]
    const toModule = formats[toFormatOption.value]
    let dataFeed = sourceBuffer

    if (fromModule.metadata.fileType == "text") {
        const textDec = new TextDecoder("utf-8")
        dataFeed = textDec.decode(sourceBuffer)
    }

    const uni = fromModule.toUniversal(dataFeed)
    const converted = toModule.fromUniversal(uni)

    // prompt save
    const link = document.createElement("a")
    const file = new Blob([converted], { type: 'text/plain' })
    link.href = URL.createObjectURL(file)
    link.download = `converted${toModule.metadata.fileExtension}`
    link.click()
    URL.revokeObjectURL(link.href)


        /*
    var oMyBlob = new Blob(converted, { type: 'text/plain' }); // the blob
    window.open(URL.createObjectURL(oMyBlob));

    const a = document.getElementById("a");
    const file = new Blob([converted], {type: "text/plain"});
    a.href = URL.createObjectURL(file);
    a.download = `converted${toModule.metadata.fileExtension}`;
    */
}

const handleFileSelect = (event) => {
    let files = event.target.files;

    let f = files[0];

    let reader = new FileReader();
    reader.onload = (function (theFile) {
        return function (e) {
            sourceBuffer = e.target.result
        };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsArrayBuffer(f);
}

convertBtn.addEventListener("click", () => { convertFile() })
fileUploadField.addEventListener("change", handleFileSelect)
},{"./converters/brick-hill.js":1,"./converters/polytoria.js":2,"./converters/worldtobuild.js":3}],5:[function(require,module,exports){
function createUniversal() {
    return new UniversalSBFormat()
}

class UniversalSBFormat {
    parts = []
    constructor() {
        
    }

    addPart(name, pos, size, rot, color, opacity, shape, flags) {
        this.parts.push({
            name,
            pos,
            size,
            rot,
            color,
            opacity,
            shape,
            flags: flags || []
        })
    }
}

class Vector3 {
    constructor(x, y, z) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.z = parseFloat(z);
    }
}

class Color3 {
    constructor(r, g, b) {
        this.r = parseFloat(r);
        this.g = parseFloat(g);
        this.b = parseFloat(b);
    }
}

module.exports = {
    createUniversal,
    Vector3,
    Color3
}
},{}]},{},[4]);
