const proxy = require("http-proxy-middleware")

module.exports = function(app) {
  app.use(
    proxy("/apiam", {
      // target: "https://portalsandbox.addnewer.com/",
      // target: "https://portal.addnewer.com/",
      target: 'https://portaldev.addnewer.com/',
      // target: 'https://portaltest.addnewer.com ',
      changeOrigin: true,
    })
  )

  app.use(
    proxy("/api", {
      target: 'https://approvaldev.addnewer.com/',
      // target: 'https://approvaltest.addnewer.com',
      changeOrigin: true,
    })
  )
}
