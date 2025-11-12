argv = process.argv;
myNumber = parseInt(argv[2])
if (!Number.isNaN(parseInt(argv[2]))){
    console.log("My number: ", myNumber)
}
else {
    console.log("Not a number")
}
