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