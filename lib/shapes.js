class Shape {
    constructor( text, textColor, shapeColor ) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
};

class Triangle extends Shape {
    constructor( text, textColor, shapeColor ) {
        super( text, textColor, shapeColor )
    };
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
        <text x="75" y= "75" font-size="75" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    };
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="125" cy="100" r="75" fill="${this.shapeColor}"/>
        <text x="75" y= "75" font-size="75" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    };
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="150" height="150" fill="${this.shapeColor}"/>
        <text x="75" y= "75" font-size="75" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = { Triangle, Circle, Square };