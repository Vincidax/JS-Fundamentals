argv = process.argv;
myNumber = parseInt(argv[2])
if (!Number.isNaN(parseInt(argv[2]))){
    if (myNumber <= 0) {
        
    }
    else if (myNumber > 0){
        for (i= 0; i < myNumber; i++){
            console.log("C is fun")
        }
    }
}
else {
    console.log("Missing number of occurrences")
}
