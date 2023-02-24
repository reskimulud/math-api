const MathBasic = {
  add: (...args) => {
    if (args.length !== 2) {
      throw new Error('fungsi add hanya menerima 2 parameter');
    }

    return args[0] + args[1];
  },
  subtract: () => { },
  multiply: () => { },
  divide: () => { }
};

module.exports = MathBasic;