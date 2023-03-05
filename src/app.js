const createServer = require("./createServer");
const FigureCalcualator = require("./FigureCalculator");
const MathBasic = require("./MathBasic");

const start = async () => {
  const figureCalcualator = new FigureCalcualator(MathBasic);
  const server = createServer({
    mathBasic: MathBasic,
    figureCalcualator,
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

start();
