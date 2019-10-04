const http = require("http");
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const { RoutesUser } = require("./routes/user.route");

const app = express();

const httpServer = http.createServer(app);

app.use("/users", RoutesUser);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  res.send("<a href='/swagger'>Go to Swagger</a>");
});

httpServer
  .listen(8080)
  .on("listening", () => console.log("Server is running"))
  .on("error", err => console.log(err));
