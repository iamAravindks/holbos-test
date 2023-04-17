import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import morgan from "morgan";
import { errorHandler, notFound } from "./middleware/middleware.js";
import eDRouter from "./routes/eDRoute.js";

const app = express();

app.use(morgan("dev"));

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const PORT = process.env.PORT || 5000;
connectDB();

app.get("/", (req, res) => res.send("CONGRATS ,YOU SUMMONED holbos"));

app.use("/api/ed", eDRouter);

app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () =>
  console.log(`server listen on http://localhost:${PORT}`)
);
