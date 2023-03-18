function scanAndFilter(cargo, contraband) {
    return cargo.filter((item) => item !== contraband)
}

const cargo = ['apples', 'ray guns', 'oranges', 'tacos', 'ray guns'];
const filteredCargo = scanAndFilter(cargo, 'ray guns');
console.log(filteredCargo);
// filteredCargo should now be ['apples', 'oranges', 'tacos']