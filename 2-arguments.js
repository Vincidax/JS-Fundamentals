argv = process.argv;
if (argv[2] == undefined) {
    console.log("No argument")
}
else if ((argv[2] != undefined) && (argv[3]) == undefined){
    console.log("Argument found")
}
else if (argv[2] != undefined) {
    console.log("Arguments found")
}