const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const app = express();
const dotenv = require("dotenv").config();
connectDb();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/list", require("./routes/listRoute"));
app.use(errorHandler);

app.listen(port, (req, res) => {
  console.log(`Server is up and running on ${port}`);
});
