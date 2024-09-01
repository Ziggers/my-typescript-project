const readline = require('readline');

const greeting: string = "Hello, TypeScript!";

function greet(name: string): string {
    // Greet the user with a personalized message
    return `${greeting} Welcome, ${name}!`;
}

console.log(greet("Ziggers"));
console.log(greet("Derek"));

// Create a readline interface for user input
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for their name and greet them
reader.question("Enter your name: ", (userName: string) => {
    console.log(greet(userName.trim() || "Guest"));
    reader.close();
});