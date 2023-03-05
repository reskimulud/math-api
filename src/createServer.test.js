const createServer = require('./createServer');
const FigureCalcualator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A HTTP server', () => {
  describe('when GET /add', () => {
    it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const server = createServer({ mathBasic: MathBasic });

      // Act
      const response = await server.inject({
        method: 'GET',
        url: `/add/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(a + b);
      expect(spyAdd).toBeCalledWith(a, b);
    })
  });

  describe('when GET /subtract', () => {
    it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
      // Arrange
      const a = 50;
      const b = 20;
      const spySubtract = jest.spyOn(MathBasic, 'subtract');
      const server = createServer({ mathBasic: MathBasic });

      // Act
      const response = await server.inject({
        method: 'GET',
        url: `/subtract/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(a - b);
      expect(spySubtract).toBeCalledWith(a, b);
    });
  });

  describe('when GET /multiply', () => {
    it('should respond with a status code of 200 and the payload value is multiplication result of a and b correctly', async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const server = createServer({ mathBasic: MathBasic });

      // Act
      const response = await server.inject({
        method: 'GET',
        url: `/multiply/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(a * b);
      expect(spyMultiply).toBeCalledWith(a, b);
    });
  });

  describe('when GET /divide', () => {
    it('should respond with a status code of 200 and the payload value is division result of a and b correctly', async () => {
      // Arrange
      const a = 100;
      const b = 20;
      const spyDivide = jest.spyOn(MathBasic, 'divide');
      const server = createServer({ mathBasic: MathBasic });

      // Act
      const response = await server.inject({
        method: 'GET',
        url: `/divide/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(a / b);
      expect(spyDivide).toBeCalledWith(a, b);
    });
  });

  describe('when GET /rectangle/perimeter', () => {
    it('should respond with a status code of 200 and the payload value is the result of calculating the perimeter of the rectangle correctly', async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const figureCalcualator = new FigureCalcualator(MathBasic);
      const spyPerimeter = jest.spyOn(figureCalcualator, 'calculateRectangelPerimeter');
      const server = createServer({ figureCalcualator });

      // Act
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/perimeter/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(2 * (a + b));
      expect(spyPerimeter).toBeCalledWith(a, b);
    });
  });
});