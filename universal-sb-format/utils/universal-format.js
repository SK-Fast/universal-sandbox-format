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


function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

class Color3 {
    constructor(r, g, b) {
        this.r = parseFloat(r);
        this.g = parseFloat(g);
        this.b = parseFloat(b);
    }

    get hex() {
        return rgbToHex(parseFloat(this.r) * 255, parseFloat(this.g) * 255, parseFloat(this.b) * 255)
    }
}

module.exports = {
    createUniversal,
    Vector3,
    Color3
}