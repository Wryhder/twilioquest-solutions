const arguments = process.argv;
const [a, b] = arguments.slice(2).map(str => str.toLowerCase());

switch (true) {
    case a.localeCompare(b) < 0:
        console.log(-1);
        break;
    case a.localeCompare(b) === 0:
        console.log(0);
        break;
    case a.localeCompare(b) > 0:
        console.log(1);
        break;
}
