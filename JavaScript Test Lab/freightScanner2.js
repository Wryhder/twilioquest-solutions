function scan(cargo) {
    let illegalSubstancesFound = [];

    for (let i = 0; i < cargo.length; i++) {
        if (cargo[i] === "contraband") {
            illegalSubstancesFound.push(i);
        }
    }

    return illegalSubstancesFound;
}

// const indexesItems = scan(['contraband', 'apples', 'cats', 'contraband', 'contraband']);
// console.log(indexesItems);
// console.log('Indexes of "contraband": ' + indexesItems);