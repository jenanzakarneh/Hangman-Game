import express, { Express, Request, Response, NextFunction } from "express";
import gameRoutes from "./routes/game";
import userRoutes from "./routes/user";
import createHttpError, { isHttpError } from "http-errors";
import morgan from "morgan";
import cors from "cors";

import passport from "passport";
import { config } from "./passport";
const app: Express = express();
config(passport);

app.use(passport.initialize());
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/", userRoutes);
app.use("/game", gameRoutes);

app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  //error handler always should be at the bottom
  console.error(error);
  let errorMessage = "An unknown error occured ";
  let status = 500;
  if (isHttpError(error)) {
    status = error.status;
    errorMessage = error.message;
  }
  res.status(status).json({ error: errorMessage });
});
export default app;
