const MathBasic = {
  add: (...args) => {
    if (args.length !== 2) {
      throw new Error('fungsi add hanya menerima 2 parameter');
    }

    const [a, n] = args;

    if (typeof a !== 'number' || typeof n !== 'number') {
      throw new Error('fungsi add hanya menerima parameter bertipe number');
    }

    return a + b;
  },
  subtract: () => { },
  multiply: () => { },
  divide: () => { }
};

module.exports = MathBasic;