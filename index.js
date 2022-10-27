const Express = require("express");
const { routes } = require("./routes");
const app = new Express();

routes.forEach(({ route, method, callbacks }) => {
  console.log(`Added route: ${method} ${route}`);
  app[method](route, callbacks);
});

app.listen(4001, () => {
  console.log("App listening on port 4001!");
});
