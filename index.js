const inquirer = require("inquirer");
const fs = require("fs");

const questionArray = [
    {
      type: "input",
      message: "Please type in your name:",
      name: "myName",
    },
    {
      type: "input",
      message: "Please type in your age:",
      name: "myAge",
    },
  ];
  
  const init = async () => {
    try {
      const answers = await inquirer.prompt(questionArray);
  
      if (answers.myName) {
        console.log(answers.myName);
      }
  
      if (answers.myAge) {
        console.log(answers.myAge);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  
  init();