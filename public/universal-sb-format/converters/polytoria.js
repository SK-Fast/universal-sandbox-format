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
          <boolean name="IsSpawn">${part.flags.includes("spawn") ? true : false}</boolean>
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
      </Item>`
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
      properties.querySelector('*[name="Name"]').innerHTML?.replace('"', '').replace('"', '') ?? "Part",
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