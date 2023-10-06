// Partially Ported from https://github.com/MaximumADHD/Roblox-File-Format/

class RBLXVector3 {
    X = 0
    Y = 0
    Z = 0

    constructor(vec3) {
        this.X = vec3.x
        this.Y = vec3.y
        this.Z = vec3.z
    }

    get Unit() {
        return this.divideFloat(this, Magnitude)
    }


    get Magnitude() {
        let product = Dot(this)
        let magnitude = Math.Sqrt(product)

        return magnitude
    }

    divideFloat(v, n) {
        let a = new RBLXVector3(n, n, n);
        let b = v;

        return new RBLXVector3(a.X / b.X, a.Y / b.Y, a.Z / b.Z);
    }

    Dot(other)
    {
        let dotX = X * other.X
        let dotY = Y * other.Y
        let dotZ = Z * other.Z
        return dotX + dotY + dotZ
    }
}

class RBLXCFrame {
    x = 0
    y = 0
    z = 0
    r00 = 0
    r01 = 0
    r02 = 0
    r10 = 0
    r11 = 0
    r12 = 0
    r20 = 0
    r21 = 0
    r22 = 0

    VectorAxisAngle(vec, axis, theta) {
        let unit = vec.Unit;

        let cosAng = Math.Cos(theta);
        let sinAng = Math.Sin(theta);

        return axis * cosAng + axis.Dot(unit) * unit * (1 - cosAng) + unit.Cross(axis) * sinAng;
    }
}