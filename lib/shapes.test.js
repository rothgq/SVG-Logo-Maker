const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle test", () => {
    test('Testing for a triangle with a blue background', ()=> {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe("Circle test", () => {
    test('Testing for a circle with a blue background', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="125" cy="100" r="75" fill="blue" />');
    });
});

describe("Square test", () => {
    test('Testing for a square with a blue background', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="10" y="10" width="150" height="150" fill="blue"/>');
    });
});