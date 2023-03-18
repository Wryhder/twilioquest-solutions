function scan(cargo) {
    let illegalSubstancesFound = 0;

    for (const item of cargo) {
        if (item === "contraband") {
            illegalSubstancesFound++;
        }
    }

    return illegalSubstancesFound;
}

// const numItems = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
// console.log('Number of "contraband": ' + numItems);