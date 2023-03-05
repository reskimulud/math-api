const Hapi = require('@hapi/hapi');

const createServer = ({ mathBasic, figureCalcualator }) => {
  const server = Hapi.server({
    host: 'localhost',
    port: 5000,
  });

  server.route([
    {
      method: 'GET',
      path: '/add/{a}/{b}',
      handler: (request, h) => {
        const { a, b } = request.params;
        const value = mathBasic.add(Number(a), Number(b));
        return h.response({ value }).code(200);
      },
    },
    {
      method: 'GET',
      path: '/subtract/{a}/{b}',
      handler: (request, h) => {
        const { a, b } = request.params;
        const value = mathBasic.subtract(Number(a), Number(b));
        return h.response({ value }).code(200);
      },
    },
    {
      method: 'GET',
      path: '/multiply/{a}/{b}',
      handler: (request, h) => {
        const { a, b } = request.params;
        const value = mathBasic.multiply(Number(a), Number(b));
        return h.response({ value }).code(200);
      },
    },
    {
      method: 'GET',
      path: '/divide/{a}/{b}',
      handler: (request, h) => {
        const { a, b } = request.params;
        const value = mathBasic.divide(Number(a), Number(b));
        return h.response({ value }).code(200);
      },
    },
    {
      method: 'GET',
      path: '/rectangle/perimeter/{width}/{height}',
      handler: (request, h) => {
        const { width, height } = request.params;
        const value = figureCalcualator.calculateRectangelPerimeter(Number(width), Number(height));
        return h.response({ value }).code(200);
      },
    },
  ]);

  return server;
};

module.exports = createServer;
