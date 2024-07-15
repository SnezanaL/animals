import express from "express";
import * as db from "./db.js";
import animalsRouter from "./animals.router.js";
import cors from "cors";

const app = express();
const port = 3000;
await db.connect();

// middlewares for parsing the requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Add endpoints
app.use("/animals", animalsRouter);

// handling errors
app.use((req, res, next) => {
  const err = new Error("Route not defined!");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  if (err) {
    const statusCode = err.status || 500;
    res.status(statusCode).json({ status: "failed", msg: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
