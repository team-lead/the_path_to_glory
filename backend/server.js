require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const logger = require("morgan");
const createError = require("http-errors");

const app = express();
connectDB();

app.use(cors());
app.use(logger("dev"));

// Init middleware
app.use(express.json({extended: false}));

// Define routes hear

app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
