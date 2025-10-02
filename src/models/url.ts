import mongoose, { Model, Schema } from "mongoose";

type url = {
  _id: string,
  url: string
}

const urlSchema = new Schema<url>({
  _id: { type: String, required: true },
  url: { type: String, required: true },
});

export const shortUrl: Model<url> = mongoose.model("ShortUrl", urlSchema);
