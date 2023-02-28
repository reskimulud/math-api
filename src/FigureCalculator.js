class FigureCalcualator {
  #mathBasic;

  constructor(mathBasic) {
    this.#mathBasic = mathBasic;
  }

  calculateRectangelPerimeter(...args) {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima dua parameter');
    }

    const [length, width] = args;

    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('fungsi hanya menerima dua parameter bertipe number');
    }

    // formula : 2 * (length + width)
    return this.#mathBasic.multiply(2, this.#mathBasic.add(length, width));
  }

  calculateRectangleArea() { }
  calculateTrianglePerimeter() { }
  calculateTriangleArea() { }
}

module.exports = FigureCalcualator;