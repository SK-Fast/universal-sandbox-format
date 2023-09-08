function createUniversal(origin) {
    return new UniversalSBFormat(origin)
}

class UniversalSBFormat {
    originPlatform = "universal-sb-format"
    parts = []
    constructor(origin) {
        this.originPlatform = origin
    }

    addPart(name, pos, size, rot, color, opacity, shape, flags) {
        this.parts.push({
            name,
            pos,
            size,
            rot,
            color,
            opacity: opacity ?? 1,
            shape: shape ?? "brick",
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

    toJSON() {
		return {
			r: this.r,
			g: this.g,
			b: this.b,
			hex: this.hex,
		};
	}
}

module.exports = {
    createUniversal,
    Vector3,
    Color3
}