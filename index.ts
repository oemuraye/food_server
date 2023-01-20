import express, { Application, Request, Response, NextFunction } from "express";
import * as dotevn from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from "./routes/users"

const port = process.env.PORT || 5000;
const app : Application = express();
dotevn.config();

// Enable body parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req: Request, res: Response) => {  
  res.send("Express + TypeScript Server");
});

app.use("/user", userRoutes);


app.listen(port, () =>
  console.log(`Server started on port http://localhost:${port}`)
);
