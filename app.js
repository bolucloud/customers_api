const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const customerRouter = require("./routes/customer");
const apiVersion = "1.0.0";

app.use(express.json());
app.use("/customer", customerRouter);

app.get("/", (req, res) => {
  res.send(
    "<h1>A Customer CRUD API built using node.js </h1> <h4>Message: Success</h4> <p>Version: 1.0</p>"
  );
});

app.get("/health", (req, res) => {
  res.send();
});

app.listen(port, () => {
  console.log("Customer_api app is up and listening to port: " + port);
});
