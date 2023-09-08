const uF = require('../utils/universal-format.js')

const metadata = {
  platformName: "GLTF Model [EXPERIMENTAL]",
  supportedVersion: `2.0`,
  fileExtension: `.glb`,
  fileType: "json"
}

function fromUniversal(u) {
  return new Promise((resolve) => {
    const scene = new THREE.Scene();

    for (const part of u.parts) {
      const geometry = new THREE.BoxGeometry(part.size.x, part.size.y, part.size.z);
      const material = new THREE.MeshBasicMaterial({
        color: {
          r: part.color.r,
          g: part.color.g,
          b: part.color.b,
        }
      });
      const cube = new THREE.Mesh(geometry, material);
      cube.position = new THREE.Vector3(part.pos.x, part.pos.y, part.pos.z)
      cube.name = part.name
      scene.add(cube);
    }

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