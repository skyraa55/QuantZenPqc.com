import mongoose from "mongoose";

const contactMessageSchema = new mongoose.Schema(
  {
    organization: {
      type: String,
      required: [true, "Organization is required"],
      trim: true,
      maxlength: 200,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Enter a valid email address"],
    },
    interest: {
      type: String,
      required: true,
      enum: [
        "A product demonstration",
        "A pilot program",
        "A partnership",
        "A technical workshop",
        "An enterprise deployment",
      ],
      default: "A product demonstration",
    },
    context: {
      type: String,
      trim: true,
      maxlength: 2000,
      default: "",
    },
  },
  { timestamps: true } // adds createdAt / updatedAt automatically
);

export default mongoose.model("ContactMessage", contactMessageSchema);
