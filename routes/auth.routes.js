// routes/user.routes.js
import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/auth.controller.js";
import { validateEmail } from "../config/arcjet.js";

const router = express.Router();

// Registration route with arcjet email validation middleware
router.post("/register", validateEmail, registerUser);

// Login route (no email validation needed)
router.post("/login", loginUser);

router.post("/logout", logoutUser);

export default router;
