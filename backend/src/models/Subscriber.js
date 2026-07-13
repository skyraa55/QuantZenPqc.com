import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      unique: true, // one subscriber row per email
      match: [/^\S+@\S+\.\S+$/, "Enter a valid email address"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Subscriber", subscriberSchema);
