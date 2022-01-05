const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/v1/europa',
    createProxyMiddleware({
      target: 'http://localhost:10001',
      changeOrigin: true,
    })
  );
};