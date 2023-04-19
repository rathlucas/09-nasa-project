import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

mongoose.connection.on("open", () => {
  console.log("MongoDB connection ready");
});

mongoose.connection.on("error", (e) => {
  console.error(e);
});

async function mongoConnect() {
  await mongoose.connect(process.env.MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

export { mongoConnect, mongoDisconnect };
