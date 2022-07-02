class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(figura){
    if(figura == square){
      let area = square.side * square.side;
      return area;
    }else if(figura == rectangle){
      let area = rectangle.height * rectangle.width;
      return area;
    }else if(figura == circle){
      let area= circle.radius * 3.14;
      return parseFloat(area.toFixed(2));
    }else{
      console.log("Non hai inserito una forma geometrica prevista!")
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));