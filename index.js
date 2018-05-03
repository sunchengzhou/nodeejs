const path = require("path");
const ejs = require("ejs");
const express = require("express");
const app = express();

const indexRouter = require("./routers/index.js");
const usersRouter = require("./routers/user.js");
const answerRouter = require("./routers/answer.js");

app .set("views", path.join(__dirname, "views"))
    .set("view engine", "ejs")
    .use("/",indexRouter)
    .use("/users", usersRouter)
    .use("/answer",answerRouter)
    .listen(9000);