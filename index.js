const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const dbConfig = require("./config/dbConfig");
const errorHandler = require("./middleware/errorHandler");
const authRoute = require("./route/user.route");

dbConfig();
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(express.json());

//Routes
app.use("/api/auth", authRoute);

app.get("/", (_, res) => {
  res.send("App is running successfully");
});

const PORT = process.env.PORT || 8000;

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
