class FigureCalcualator {
  #mathBasic;

  constructor(mathBasic) {
    this.#mathBasic = mathBasic;
  }

  calculateRectangelPerimeter(...args) {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima dua parameter');
    }
  }

  calculateRectangleArea() { }
  calculateTrianglePerimeter() { }
  calculateTriangleArea() { }
}

module.exports = FigureCalcualator;