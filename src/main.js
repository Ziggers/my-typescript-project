var readline = require('readline');
var greeting = "Hello, TypeScript!";
function greet(name) {
    // Greet the user with a personalized message
    return "".concat(greeting, " Welcome, ").concat(name, "!");
}
console.log(greet("Ziggers"));
console.log(greet("Derek"));
// Create a readline interface for user input
var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Prompt the user for their name and greet them
reader.question("Enter your name: ", function (userName) {
    console.log(greet(userName.trim() || "Guest"));
    reader.close();
});
