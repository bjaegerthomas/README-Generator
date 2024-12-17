// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
// TODO: Create an array of questions for user input
const questions = [
    'What is the Title of your README file?',
    'Can you provide a Description of your program?',
    'What are the Installation Instructions for your program?',
    'What Usage Information can you provide?',
    'What are the Contribution Guidelines for your project?',
    'What Test Instructions can you provide for your program?',
    'What is your Github username?',
    'What is your email address?',
    'What license would you like to use for this program?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('README.md', data, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
  );
}

// TODO: Create a function to initialize app
function init(questions) {
    const promptUser = () => {
        return inquirer.prompt([
          {
            type: 'input',
            name: 'title',
            message: questions(0),
          },
          {
            type: 'input',
            name: 'description',
            message: questions(1),
          },
          {
            type: 'input',
            name: 'installation',
            message: questions(2),
          },
          {
            type: 'input',
            name: 'usage',
            message: questions(3),
          },
          {
            type: 'input',
            name: 'contribution',
            message: questions(4),
          },
          {
            type: 'input',
            name: 'test',
            message: questions(5),
          },
          {
            type: 'input',
            name: 'github',
            message: questions(6),
          },
          {
            type: 'input',
            name: 'email',
            message: questions(7),
          },
          {
            type: 'list',
            name: 'license',
            message: questions(8),
            choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License (GPL)', 'BSD License', 'Creative Commons licenses (for documentation)'],
          },
        ]);
      };
      return data = promptUser();
}

// Function call to initialize app
init();
