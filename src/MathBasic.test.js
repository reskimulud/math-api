const MathBasic = require('./MathBasic');

describe('A MathBaseic', () => {
  it('sould contains add, subtract, multiply and divide function', () => {
    expect(MathBasic).toHaveProperty('add');
    expect(MathBasic).toHaveProperty('subtract');
    expect(MathBasic).toHaveProperty('multiply');
    expect(MathBasic).toHaveProperty('divide');
    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.subtract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.divide).toBeInstanceOf(Function);
  });

  describe('A add function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.add()).toThrowError();
      expect(() => MathBasic.add(1)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3, 4)).toThrowError();
    });

    it('should throw error when given parameter is not a number', () => {
      expect(() => MathBasic.add('1', '2')).toThrowError();
      expect(() => MathBasic.add(true, {})).toThrowError();
      expect(() => MathBasic.add(null, false)).toThrowError();
    });

    it('should return the sum of 2 numbers', () => {
      expect(MathBasic.add(1, 2)).toEqual(3);
      expect(MathBasic.add(2, 3)).toEqual(5);
      expect(MathBasic.add(3, 4)).toEqual(7);
      expect(MathBasic.add(4, 5)).toEqual(9);
      expect(MathBasic.add(8, 10)).toEqual(18);
    });
  });

  describe('A subtract function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.subtract()).toThrowError();
      expect(() => MathBasic.subtract(1)).toThrowError();
      expect(() => MathBasic.subtract(1, 2, 3)).toThrowError();
      expect(() => MathBasic.subtract(1, 2, 3, 4)).toThrowError();
    });

    it('should throw error when given parameter is not a number', () => {
      expect(() => MathBasic.subtract('1', '2')).toThrowError();
      expect(() => MathBasic.subtract(true, {})).toThrowError();
      expect(() => MathBasic.subtract(null, false)).toThrowError();
    });

    it('should return the difference of 2 numbers', () => {
      expect(MathBasic.subtract(1, 2)).toEqual(-1);
      expect(MathBasic.subtract(5, 3)).toEqual(2);
      expect(MathBasic.subtract(3, 5)).toEqual(-2);
      expect(MathBasic.subtract(10, 5)).toEqual(5);
      expect(MathBasic.subtract(88, 10)).toEqual(78);
    });
  });

  describe('A multiply function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.multiply()).toThrowError();
      expect(() => MathBasic.multiply(1)).toThrowError();
      expect(() => MathBasic.multiply(1, 2, 3)).toThrowError();
      expect(() => MathBasic.multiply(1, 2, 3, 4)).toThrowError();
    });
  });
});
