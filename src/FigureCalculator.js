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

  calculateRectangleArea(...args) {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima dua parameter');
    }

    const [length, width] = args;

    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('fungsi hanya menerima dua parameter bertipe number');
    }

    // formula : length * width
    return this.#mathBasic.multiply(length, width);
  }

  calculateTrianglePerimeter(...args) {
    if (args.length !== 3) {
      throw new Error('fungsi hanya menerima tiga parameter');
    }

    const [sideA, sideB, sideC] = args;

    if (typeof sideA !== 'number' || typeof sideB !== 'number' || typeof sideC !== 'number') {
      throw new Error('fungsi hanya menerima tiga parameter bertipe number');
    }

    // formula : sideA + sideB + sideC
    return this.#mathBasic.add(this.#mathBasic.add(sideA, sideB), sideC);
  }

  calculateTriangleArea(...args) {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima dua parameter');
    }

    const [base, hight] = args;

    if (typeof base !== 'number' || typeof hight !== 'number') {
      throw new Error('fungsi hanya menerima dua parameter bertipe number');
    }

    // formula : (base * hight) / 2
    return this.#mathBasic.divide(this.#mathBasic.multiply(base, hight), 2);
  }
}

module.exports = FigureCalcualator;