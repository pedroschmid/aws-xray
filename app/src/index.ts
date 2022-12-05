import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const PORT: number = Number(process.env.PORT) || 3000;
const HOST: string = "0.0.0.0";

import AWSXRay from "aws-xray-sdk";
import express, { Express } from "express";
import morgan from "morgan";

import PostRouter from "./post/post.router";

const app: Express = express();

app.use(AWSXRay.express.openSegment("express"));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", PostRouter);

app.use(AWSXRay.express.closeSegment());

app.listen(PORT, HOST, () => {
  console.log(`⚡️ [SERVER]: Server is running at http://127.0.0.1:${PORT}`);
});
