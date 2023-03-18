function calculatePower(powerSettings) {
    return powerSettings.reduce((accumulator, currentValue) => accumulator +
        currentValue * 2, 0);
}