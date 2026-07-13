import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contact.routes.js";
import newsletterRoutes from "./routes/newsletter.routes.js";

const app = express();

// Allow requests from your frontend dev/prod origin(s)
const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((o) => o.trim());

app.use(
  cors({
    origin: allowedOrigins,
  })
);

app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/contact", contactRoutes);
app.use("/api/newsletter", newsletterRoutes);

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

export default app;
