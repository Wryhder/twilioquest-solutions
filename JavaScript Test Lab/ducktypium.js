class Ducktypium {
    constructor(crystalColor) {
        this.validColors = ["red", "blue", "yellow"];
        if (!this.validColors.includes(crystalColor)) {
            throw new Error('Color is not valid!');
        } else {
            this.color = crystalColor;
        }

        this.calibrationSequence = [];
    }

    refract(crystalColor) {
        if (!this.validColors.includes(crystalColor)) {
            throw new Error('Color is not valid!');
        }

        let refractedLight;
        const mixPrimaryColorsRGB = (color1, color2) => {
            const colorsToMix = color1 + color2;
            switch (colorsToMix.toLowerCase()) {
                case "bluered":
                case "redblue":
                    refractedLight = "purple";
                    break;
                case "redyellow":
                case "yellowred":
                    refractedLight = "orange";
                    break;
                case "yellowblue":
                case "blueyellow":
                    refractedLight = "green";
                    break;
            }
        }

        if (crystalColor === this.color)  {
            refractedLight = crystalColor;
        } else {
            mixPrimaryColorsRGB(crystalColor, this.color);
        }

        return refractedLight;
    }

    calibrate(NumsArr) {
        function compareNumbers(a, b) {
            return a - b;
        }

        const sortedNums = NumsArr.sort(compareNumbers);
        this.calibrationSequence = sortedNums.map(num => num * 3);
    }
}

// // -------------------------------------TESTS-----------------------------------------
// // The following would produce an error
// try {
//   const badColor = new Ducktypium("pink");
// } catch (e) {
//   console.log("Color must be red, yellow, or blue!");
// }

// // Create a new instance of the class
// const dt = new Ducktypium("red");

// console.log(dt.color); // prints 'red'

// console.log(dt.refract("blue")); // prints 'purple'
// console.log(dt.refract("red")); // prints 'red'

// dt.calibrate([3, 5, 1]);

// console.log(dt.calibrationSequence); // prints [3, 9, 15]