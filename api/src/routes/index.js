const routes = require("./route")

module.exports.load = (app) => {
  app.use("/clients", routes)
}