const fs = require('fs');
const inquirer = require('inquirer');

const renderHtml = (answers) => {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
    </head>
    <body>
        <h1>${answers.name}</h1>
        <p>My name is ${answers.name} from ${answers.location}. ${answers.bio}.</p>
        <h2>Contact Info</h2>
        <ul>
            <li>${answers.linkedin}</li>
            <li>${answers.github}</li>
        </ul>
        
    </body>
    </html>`

    fs.writeFile('base.html', html, (err) => {
        err ? console.error(err) : console.log('Success!');
    })

};

    inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Where are you located?',
        name: 'location'
    },
    {
        type: 'input',
        message: 'Write a brief bio',
        name: 'bio'
    },
    {
        type: 'input',
        message: 'What is your linkedin username?',
        name: 'linkedin'
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github'
    }
]).then((answers) => renderHtml(answers));

