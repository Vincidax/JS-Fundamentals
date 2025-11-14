const argv = process.argv;
const a = parseInt(argv[2]);
const b = parseInt(argv[3]);

console.log(add(a, b))

function add(a, b) {
    return (a + b);
}