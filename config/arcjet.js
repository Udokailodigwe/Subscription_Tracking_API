// config/arcjet.js
import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import { ARCJET_KEY } from "./env.js";

// Configure Arcjet with security rules.
const aj = arcjet({
  key: ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    shield({ mode: "LIVE" }), // Protects against common attacks
    detectBot({ mode: "LIVE", allow: ["CATEGORY:SEARCH_ENGINE"] }), // Bot detection
    tokenBucket({ mode: "LIVE", refillRate: 5, interval: 10, capacity: 10 }), // Rate limiting
  ],
});

// Middleware for basic email validation on signup.
export const validateEmail = async (req, res, next) => {
  try {
    const email = req.body.email;
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    // Basic regex for email validation.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }
    next();
  } catch (error) {
    console.error("Email validation error:", error);
    next();
  }
};
export default aj;
