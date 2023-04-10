import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const MONGO_URL = `mongodb+srv://lucas:${process.env.MONGO_PASSWORD}@cluster0.chbipbt.mongodb.net/nasa?retryWrites=true&w=majority`;

mongoose.connection.on("open", () => {
  console.log("MongoDB connection ready");
});

mongoose.connection.on("error", (e) => {
  console.error(e);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

export { mongoConnect, mongoDisconnect };
