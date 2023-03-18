function calculateMass(cargo) {
    return cargo.reduce((accumulator, currentValue) => accumulator +
        currentValue.length, 0);
}

// const cargo = ['cat', 'dog', 'bird'];
// const mass = calculateMass(cargo);
// console.log(mass);