const Hapi = require('@hapi/hapi');

const createServer = ({ mathBasic }) => {
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
  ]);

  return server;
};

module.exports = createServer;
