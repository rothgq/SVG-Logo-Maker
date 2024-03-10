const fs = require('fs');
const inquirer = require('inquirer');
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
        // validate: (answer) => {
        //     if (answer.text > 3) {
        //         return console.log('\n Too many characters.');
        //     }
        //     return true;
        // }
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

function renderShape(response) {
    if (response.shape === 'Triangle') {
        let newShape = new Triangle ( response.text, response.textColor, response.shapeColor )
        return newShape.render()
    }
    if (response.shape === 'Circle') {
        let newShape = new Circle( response.text, response.textColor, response.shapeColor )
        return newShape.render()
    }
    if (response.shape === 'Square') {
        let newShape = new Square( response.text, response.textColor, response.shapeColor )
        return newShape.render()
    }
};

function createSVG(response) {
    let svg = renderShape(response);
    fs.writeFile('./examples/logo.svg', svg, () => console.log('Generated logo.svg'));
}

function init() {
    inquirer.prompt(questions).then((response) => {
        createSVG(response);
    })
}

init();