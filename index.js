const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const protect = require("./middleware/protect");
const checkRole = require("./middleware/checkRole");
const tasksRouter = require("./routes/tasksRouter");
const usersRouter = require("./routes/usersRouter");
const connectDB = require("./db");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.get("/", (req, res) => res.send("Hello World!"));

app.use("/tasks", tasksRouter);
app.use("/users", usersRouter);
connectDB(process.env.MONGO_URI);

app.use(errorHandlerMiddleware);

function errorHandlerMiddleware(err, req, res, next) {
  res.status(err.statusCode).json({
    status: "error",
    error: err.message,
  });
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
