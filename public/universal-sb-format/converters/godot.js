const uF = require('../utils/universal-format.js')
const uuid = require('uuid')

const shapesEnum = {
  brick: 0,
  wedge: 3
}

const metadata = {
  platformName: "Godot",
  supportedVersion: `^4.1`,
  fileExtension: `.tscn`,
  fileType: "text"
}

/*
[gd_scene load_steps=5 format=3 uid="uid://cjpaetjp346uw"]

[sub_resource type="StandardMaterial3D" id="StandardMaterial3D_tdqvg"]
transparency = 1
albedo_color = Color(0.545098, 0.545098, 0.545098, 1)

[sub_resource type="BoxMesh" id="BoxMesh_dyddd"]
material = SubResource("StandardMaterial3D_tdqvg")
size = Vector3(1.2, 1.2, 0.8)

[sub_resource type="StandardMaterial3D" id="StandardMaterial3D_d8hmw"]

[sub_resource type="BoxMesh" id="BoxMesh_v2l4l"]
material = SubResource("StandardMaterial3D_d8hmw")

[node name="Main" type="Node3D"]

[node name="MeshInstance3D" type="MeshInstance3D" parent="."]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1)
mesh = SubResource("BoxMesh_dyddd")

[node name="MeshInstance3D2" type="MeshInstance3D" parent="."]
transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, -2.95932, 0, 1)
mesh = SubResource("BoxMesh_v2l4l")
*/

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}


function fromUniversal(u) {
  let result;
  let resourceSection = ""
  let nodeSection = `[node name="Main" type="Node3D"]\n`

  for (const part of u.parts) {
    let materialUID = makeid(5)
    let meshUID = makeid(5)
    resourceSection += `[sub_resource type="StandardMaterial3D" id="StandardMaterial3D_${materialUID}"]\n`
    resourceSection += `albedo_color = Color(${part.color.r}, ${part.color.g}, ${part.color.b}, 1)\n`
    resourceSection += `\n`
    resourceSection += `[sub_resource type="BoxMesh" id="BoxMesh_${meshUID}"]\n`
    resourceSection += `material = SubResource("StandardMaterial3D_${materialUID}")\n`
    resourceSection += `size = Vector3(${part.size.x}, ${part.size.y}, ${part.size.z})\n`
    resourceSection += `\n`

    nodeSection += `[node name="${meshUID}" type="MeshInstance3D" parent="."]\n`
    nodeSection += `transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, ${part.pos.x}, ${part.pos.y}, ${part.pos.z}))\n`
    nodeSection += `mesh = SubResource("BoxMesh_${meshUID}")\n`
  }

  result = `[gd_scene load_steps=3 format=3]\n${resourceSection}\n${nodeSection}`

  console.log(result)

  return result
}

module.exports = { fromUniversal, metadata }