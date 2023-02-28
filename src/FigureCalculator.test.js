const FigureCalcualator = require("./FigureCalculator");
const MathBasic = require("./MathBasic");

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

    it('should throw error when given with non-number parameters', () => {
      const figureCalculator = new FigureCalcualator({});

      expect(() => figureCalculator.calculateRectangelPerimeter(1, true)).toThrowError();
      expect(() => figureCalculator.calculateRectangelPerimeter({}, [])).toThrowError();
      expect(() => figureCalculator.calculateRectangelPerimeter(null, '2')).toThrowError();
    });

    it('should return correct value based on rectangle perimeter formula', () => {
      // Arrange
      const length = 20;
      const width = 10;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const figureCalculator = new FigureCalcualator(MathBasic);

      // Act
      const result = figureCalculator.calculateRectangelPerimeter(length, width);

      // Assert
      expect(result).toEqual(60);
      expect(spyAdd).toHaveBeenCalledWith(length, width);
      expect(spyMultiply).toHaveBeenCalledWith(2, 30);
    });
  });

  describe('a calculateRectangleArea function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalcualator({});

      expect(() => figureCalculator.calculateRectangleArea()).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(1)).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(1, 2, 3)).toThrowError();
    });

    it('should throw error when given with non-number parameters', () => {
      const figureCalculator = new FigureCalcualator({});

      expect(() => figureCalculator.calculateRectangleArea(1, true)).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea({}, [])).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(null, '2')).toThrowError();
    });
  });
});
