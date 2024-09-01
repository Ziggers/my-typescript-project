const readline = require('readline');

const greeting: string = "Hello, TypeScript!";

function greet(name: string): string {
    return `${greeting} Welcome, ${name}!`;
}

console.log(greet("Ziggers"));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", (userName: string) => {
    console.log(greet(userName.trim() || "Guest"));
    rl.close();
});
