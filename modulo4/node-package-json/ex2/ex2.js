const operation = process.argv[2]
const firstn = process.argv[3]
const secondn = process.argv[4]

switch (operation) {
    case "add":
        console.log(`Answer: ${Number(firstn) + Number(secondn)}`)
        break;

    case "sub":
        console.log(`Answer: ${Number(firstn) - Number(secondn)}`)
        break;
    case "mult":
        console.log(`Answer: ${Number(firstn) * Number(secondn)}`)
        break;
    case "div":
        console.log(`Answer: ${Number(firstn) / Number(secondn)}`)
        break;
    default:
        console.log(`Error, try again, the options are: add, sub, mult and div`)
}