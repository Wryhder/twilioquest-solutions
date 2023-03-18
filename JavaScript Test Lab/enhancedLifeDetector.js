const arguments = process.argv;
const treeLifeStatusID = parseInt(arguments[2]);

switch (true) {
    case treeLifeStatusID === 0:
        console.log("alive");
        break;
    case treeLifeStatusID === 1:
        console.log("flowering");
        break;
    case treeLifeStatusID === 2:
        console.log("shedding");
        break;
    case treeLifeStatusID === 3 || treeLifeStatusID > 3:
        console.log("other");
        break;
}