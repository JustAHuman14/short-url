import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { shortUrl } from "./models/url.js";
import { nanoid } from "nanoid";
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI environment variable is not set.");
}
await mongoose.connect(MONGODB_URI);

if (mongoose.connection.readyState === 1) {
  console.log("MongoDB is successfully connected!");
}

const app: Express = express();
const port: number = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/short-url", async (req: Request, res: Response): Promise<void> => {
  const url = new shortUrl({ _id: nanoid(5), url: req.body.url });
  await url.save();
  res.json({ message: url.id });
});

app.get("/:urlId", async (req: Request, res: Response): Promise<void> => {
  const { urlId } = req.params;
  const Url = await shortUrl.findById(urlId);

  if (Url) {
    res.redirect(Url.url);
  } else {
    const html = `<!DOCTYPE html><head><title>Not Found</title></head><body><h1>Page Not Found<h1/></body></html>`
    res.send(html)
  }
});

app.listen(port, (): void => {
  console.log("Server is running on http://localhost:3000");
});
