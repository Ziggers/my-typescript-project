const greeting: string = "Hello, TypeScript!";
function greet(name: string): string {
    return `${greeting} Welcome, ${name}!`;
}

const userName = prompt("Enter your name:");
console.log(greet(userName || "Guest"));
