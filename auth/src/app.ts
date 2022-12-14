import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import cors from "cors";
import { errorHandler, NotFoundError } from "@hblearningtickets/common";

import { currentUserRouter } from "./routes/current-user";
import { signUpRouter } from "./routes/sign-up";
import { signInRouter } from "./routes/sign-in";
import { signOutRouter } from "./routes/sign-out";

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

app.use(signUpRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(currentUserRouter);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
