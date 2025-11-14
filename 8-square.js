argv = process.argv;
myNumber = parseInt(argv[2])
if (!Number.isNaN(parseInt(argv[2]))){
    if (myNumber <= 0) {
        
    }
    else if (myNumber > 0){
        for (i= 0; i < myNumber; i++){
            console.log(repeatCharacter('x', myNumber))
        }
    }
}
else {
    console.log("Missing size")
}

function repeatCharacter(char, count) {
  let result = '';
  for (let i = 0; i < count; i++) {
    result += char;
  }
  return result;
}