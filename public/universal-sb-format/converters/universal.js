const pako = require('pako')
const uF = require('../utils/universal-format.js')

const metadata = {
    platformName: "Universal Sandbox Format",
    supportedVersion: ``,
    fileExtension: `.usbf`,
    fileType: "text",
}

function fromUniversal(u) {
    return JSON.stringify(u)
}

function toUniversal(dataRaw) {
    return JSON.parse(dataRaw)
}

module.exports = { toUniversal, fromUniversal, metadata }