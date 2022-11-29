var circle = {
  radius: 3,
  Pi: 3.14,
  calArea: function() {
    return 2 * this.Pi * this.radius;
  },
  calPerimeter: function() {
    return this.Pi * this.radius ** 2;
  }
};

console.log(circle.calArea());
console.log(circle.calPerimeter());