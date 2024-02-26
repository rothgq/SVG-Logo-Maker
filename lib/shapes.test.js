const { Triangle, Circle, Square } = require("./shapes");

describe("Blue Triangle test", () => {
    test('Testing for a triangle with a blue background and red text', ()=> {
        const shape = new Triangle('TST', 'red', 'blue');
        expect(shape.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="blue"/>
        <text x="70" y="75" font-size="75" text-anchor="middle" fill="red">TST</text></svg>`);
    });
});

describe("Blue Circle test", () => {
    test('Testing for a circle with a blue background and red text', () => {
        const shape = new Circle('TST', 'red', 'blue');
        expect(shape.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="125" cy="100" r="75" fill="blue"/>
        <text x="75" y="75" font-size="75" text-anchor="middle" fill="red">TST</text></svg>`);
    });
});

describe("Blue Square test", () => {
    test('Testing for a square with a blue background and red text', () => {
        const shape = new Square('TST', 'red', 'blue');
        expect(shape.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="150" height="150" fill="blue"/>
        <text x="75" y="75" font-size="75" text-anchor="middle" fill="red">TST</text></svg>`);
    });
});