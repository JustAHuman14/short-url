import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import { nanoid } from "nanoid";

const app: Express = express();
const port: number = 3000;

app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post("/short-url", (req: Request, res: Response): void => {
    console.log(req.body)
    res.json({message: 'hello'})
});
app.listen(port, (): void => {
  console.log("Server is running on http://localhost:3000");
});
