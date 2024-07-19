#! usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([{
        name: "q1",
        type: "list",
        message: "Q1) What is the correct way to check if two valuea are not equal?",
        choices: ["a==b", "a===b", "a!==b", "a=b"]
    },
    { name: "q2",
        type: "list",
        message: "Q2) what cannot be used to declare a variable?",
        choices: ["let", "const", "var", "func"] },
    {
        name: "q3",
        type: "list",
        message: "Q3) Which operator is used for string conact?",
        choices: ["+", "-", "!", "&"]
    },
    {
        name: "q4",
        type: "list",
        message: "Q4) Which symbol is used to terminate a statement?",
        choices: ["+", "-", "!", ";"]
    },
    {
        name: "q5",
        type: "list",
        message: "Q5) Which method of inquirer is use to recieve input?",
        choices: ["prompt", "await", "inquire", "let"]
    }
]);
let score = 0;
switch (quiz.q1) {
    case "a!==b":
        console.log("1. Correct");
        ++score;
        break;
    default:
        console.log("1. Incorrect");
}
switch (quiz.q2) {
    case "func":
        console.log("2. Correct");
        ++score;
        break;
    default:
        console.log("2. Incorrect");
}
switch (quiz.q3) {
    case "+":
        console.log("3. Correct");
        ++score;
        break;
    default:
        console.log("3. Incorrect");
}
switch (quiz.q4) {
    case ";":
        console.log("4. Correct");
        ++score;
        break;
    default:
        console.log("4. Incorrect");
}
switch (quiz.q5) {
    case "prompt":
        console.log("5. Correct");
        ++score;
        break;
    default:
        console.log("5. Incorrect");
}
console.log(`Score: ${score}`);
