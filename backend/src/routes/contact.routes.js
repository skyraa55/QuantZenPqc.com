import { Router } from "express";
import ContactMessage from "../models/ContactMessage.js";

const router = Router();

// POST /api/contact  -> save a new contact form submission
router.post("/", async (req, res) => {
  try {
    const { organization, email, interest, context } = req.body;

    const message = await ContactMessage.create({
      organization,
      email,
      interest,
      context,
    });

    return res.status(201).json({
      success: true,
      message: "Thank you. Your message has been received.",
      data: message,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ success: false, errors });
    }
    console.error("Contact submit error:", err);
    return res.status(500).json({ success: false, message: "Something went wrong. Please try again." });
  }
});

// GET /api/contact  -> list all submissions (simple admin/read endpoint)
router.get("/", async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    return res.json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    console.error("Contact fetch error:", err);
    return res.status(500).json({ success: false, message: "Could not fetch messages." });
  }
});

export default router;
