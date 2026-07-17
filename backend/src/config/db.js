// import mongoose from "mongoose";

// export async function connectDB() {
//   const uri = process.env.MONGO_URI;

//   if (!uri) {
//     throw new Error("MONGO_URI is not set. Check your .env file.");
//   }

//   mongoose.set("strictQuery", true);

//   await mongoose.connect(uri);

//   console.log(`MongoDB connected -> ${mongoose.connection.name}`);
// }






// testing

import mongoose from "mongoose";

export async function connectDB() {
  try {
    const uri = process.env.MONGO_URI;

    console.log("Connecting to MongoDB...");
    console.log("URI Loaded:", !!uri);

    await mongoose.connect(uri);

    console.log("MongoDB connected:", mongoose.connection.name);
  } catch (err) {
    console.error("FULL ERROR:");
    console.error(err);
    console.error("STACK:");
    console.error(err.stack);
    process.exit(1);
  }
}