const fs = require('fs');
const inquire = require('inquire');
const { Triangle, Circle, Square } = require('./lib/shapes');

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like for your logo?',
        choices: ['Triangle', 'Circle', 'Square'],
    },
    {
        type: 'input',
        name: 'text',
        message: 'Type three letters to display.',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log('\n Too many characters.');
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a keyword or hexadecimal number for your text color.',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a keyword or hexadecimal number for your background color.',
    }
]