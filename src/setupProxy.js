const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/v1/pangu",
    createProxyMiddleware({
      target: "http://localhost:10006",
      changeOrigin: true,
    })
  );
};
