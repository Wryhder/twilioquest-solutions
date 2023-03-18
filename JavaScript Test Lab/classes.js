class Materializer {
    constructor(arg) {
        this.target = arg;
        this.activated = false;
    }

    activate() {
        this.activated = true;
    }

    materialize() {
        if (this.activated) {
            return this.target;
        }
    }
}