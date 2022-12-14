import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import cors from "cors";
import {
  errorHandler,
  NotFoundError,
  currentUser,
} from "@hblearningtickets/common";

import { indexOrderRouter } from "./routes";
import { showOrderRouter } from "./routes/show";
import { newOrderRouter } from "./routes/new";
import { deleteOrderRouter } from "./routes/delete";

const app = express();
app.set("trust proxy", true);
app.use(json());

if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
}

app.use(
  cookieSession({
    signed: false,
    secure:
      process.env.NODE_ENV === "test" || process.env.NODE_ENV === "development"
        ? false
        : true,
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use(currentUser);
app.use(indexOrderRouter);
app.use(showOrderRouter);
app.use(newOrderRouter);
app.use(deleteOrderRouter);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
