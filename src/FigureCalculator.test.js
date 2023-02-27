const FigureCalcualator = require("./FigureCalculator");

describe('A FigureCalcualator', () => {
  it('should contain calculateRectangelPerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea functions', () => {
    const figureCalculator = new FigureCalcualator({});

    expect(figureCalculator).toHaveProperty('calculateRectangelPerimeter');
    expect(figureCalculator).toHaveProperty('calculateRectangleArea');
    expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateTriangleArea');
    expect(figureCalculator.calculateRectangelPerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
  });

  describe('a calculateRectangelPerimeter function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalcualator({});

      expect(() => figureCalculator.calculateRectangelPerimeter()).toThrowError();
      expect(() => figureCalculator.calculateRectangelPerimeter(1)).toThrowError();
      expect(() => figureCalculator.calculateRectangelPerimeter(1, 2, 3)).toThrowError();
    });
  });
});
