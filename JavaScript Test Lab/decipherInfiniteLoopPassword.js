const passwordArray = [
  ["Q", "W", "E", "R", "T", "Y"],
  ["A", "S", "D", "F", "G", "H"],
  ["Z", "X", "C", "V", "B", "N"],
  ["U", "I", "O", "P", "!", "@"],
  ["H", "J", "K", "L", "#", "$"],
  ["M", "%", "^", "&", "*", "?"],
];

function decipherInfiniteLoopPassword() {
    const firstChar = passwordArray[1][3],
        secondChar = passwordArray[3][4],
        thirdChar = passwordArray[2][5],
        fourthChar = passwordArray[3][4],
        fifthChar = passwordArray[0][4],
        sixthChar = passwordArray[0][2];

    return firstChar + secondChar + thirdChar + fourthChar +
        fifthChar + sixthChar;
}

console.log(decipherInfiniteLoopPassword());