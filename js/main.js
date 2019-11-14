function Shape() {
  
}

// Polygon
function Polygon() {}
Polygon.prototype.draw = function() {}
Polygon.prototype.getNumbersOfAngles = function() {
  return this.anglesNumber;
}
Polygon.prototype.setNumbersOfAngles = function(num) {
  this.anglesNumber = num;
}

// Square
function Square(sizeSize) {
  this.sizeSize = sizeSize;
}
Square.prototype.getArea = function() {
  return this.sizeSize * this.sizeSize;
}


function chain(...args) {
  let reversed = args.reverse();
  var c = [].shift.call(reversed),
      len = reversed.length
  while(len--) {
      $.extend(c.prototype, new reversed[len]());
  }
  
  return reversed[0];
}

chain(Square, Polygon, Shape);

// const sqrt = new Square(2);

// console.log(sqrt.getArea())
// Shape.prototype = Object.create(Polygon.prototype);
// Shape.prototype.constructor = Shape;

// Polygon.prototype = Object.create(Square.prototype);
// Polygon.prototype.constructor = Polygon;

// Polygon.prototype = Object.create(Square.prototype);

// Shape.prototype = Object.create(Polygon.prototype);
// Polygon.prototype.constructor = Polygon;
// Shape.prototype.constructor = Shape;


// console.dir(Polygon)
// console.log(Polygon.prototype)
// console.log(Object.create(Polygon))
// console.log(Object.create(Polygon.prototype))


const shapel = new Shape();

console.dir(shapel);

console.log(shapel.draw)
console.log(shapel.getArea)

// console.dir(Square);
// console.dir(Polygon);
// console.dir(Shape);



// const ExtendedSquare = chain(Square, Polygon, Shape);

// console.dir(ExtendedSquare)

// console.log(ExtendedSquare.getArea)
// console.log(ExtendedSquare.setNumbersOfAngles)
// console.log(ExtendedSquare.getNumbersOfAngles)
// console.log(ExtendedSquare.draw)
