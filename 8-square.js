const argv = process.argv;
const myNumber = parseInt(argv[2]);

if (!Number.isNaN(myNumber)) {
    if (myNumber <= 0) {
        
    } else if (myNumber > 0) {
        for (let i = 0; i < myNumber; i++) {
            console.log(repeatCharacter('x', myNumber));
        }
    }
} else {
    console.log("Missing size");
}

function repeatCharacter(char, count) {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += char;
    }
    return result;
}