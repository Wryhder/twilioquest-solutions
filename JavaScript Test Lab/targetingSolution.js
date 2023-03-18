class TargetingSolution {
    constructor(coordinates) {
        this.x = coordinates.x;
        this.y = coordinates.y;
        this.z = coordinates.z;
    }

    target() {
        return `(${this.x}, ${this.y}, ${this.z})`;
    }
}

// const sln = new TargetingSolution({
//   x: 45,
//   y: 12,
//   z: -1,
// });

// console.log(sln.target());