const argv = process.argv;
const myNumber = parseInt(argv[2]);

if (!Number.isNaN(myNumber)) {
    console.log(factorial(myNumber))
} else {
    console.log("1");
}

function factorial(a) {
    if(a == 0 | a == 1){
        return 1
    }
    else if (a > 1){
        return a * factorial(a - 1)
    }
}