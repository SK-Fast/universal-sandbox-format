const uF = require('../utils/universal-format.js')

const metadata = {
  platformName: "GLTF Model",
  supportedVersion: `2.0`,
  fileExtension: `.glb`,
  fileType: "json"
}

function rad2Deg(angle) {
  return 2 * Math.PI * (angle / 360)
}

function fromUniversal(u) {
  return new Promise((resolve) => {
    const scene = new THREE.Scene();
    const envRoot = new THREE.Object3D()

    envRoot.name = "USBF_Export"
    scene.add(envRoot)

    for (const part of u.parts) {
      const geometry = new THREE.BoxGeometry(part.size.x, part.size.y, part.size.z);
      const material = new THREE.MeshStandardMaterial({
        color: part.color.hex
      });
      const cube = new THREE.Mesh(geometry);
      cube.material = material
      cube.name = part.name
      cube.position.x = part.pos.x
      cube.position.y = part.pos.y
      cube.position.z = part.pos.z

      cube.rotation.x = rad2Deg(part.rot.x)
      cube.rotation.y = rad2Deg(part.rot.y)
      cube.rotation.z = rad2Deg(part.rot.z)

      envRoot.add(cube);
    }

    envRoot.scale.setX(-1)
    envRoot.scale.setY(1)
    envRoot.scale.setZ(1)

    const exporter = new THREE.GLTFExporter();

    exporter.parse(
      scene,
      function (gltf) {
        resolve(JSON.stringify(gltf))
      },
      function (error) {
        console.log('An error happened');
      },
      {}
    );
  })
}

module.exports = { fromUniversal, metadata }