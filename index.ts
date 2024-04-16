#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";    

const answer: {
    WordCounter : string
}= await inquirer.prompt([
    {
      name :"WordCounter",
      type : "input",
      message : chalk.yellow("Enter your sentence to counter a word__.")
    }               
]);                

const words = answer.WordCounter.trim().split(" ");

console.log (words);
console.log(chalk.green (`*** Your Sentence Word Count Is "${words.length}" ***`))

