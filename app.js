const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const ErrorHandler = require("./utils/ErrorHandler");
const dotenv = require("dotenv");
var cookieSession = require("cookie-session");

dotenv.config({
  path: "././config/.env",
});

// app.use(cookieSession());

app.use(express.json());
app.use("/", express.static("uploads"));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
const user = require("./user/userController");
app.use("/api/v2/user", user);

const category = require("./category/categoryController");
app.use("/api/v2/category", category);

const artikel = require("./artikel/artikelController");
app.use("/api/v2/artikel", artikel);

const saved = require("./saved/savedController");
app.use("/api/v2/saved", saved);

const comen = require("./api/coment/comenController");
app.use("/api/v2/comen", comen);

const balesComen = require("./api/balescomen/balesComenController");
app.use("/api/v2/balescomen", balesComen);

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use(ErrorHandler);

module.exports = app;
