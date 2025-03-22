import "dotenv/config"; // Load environment variables from .env
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import createError from "http-errors";
import { fileURLToPath } from "url";
import { PORT } from "./config/env.js";

// Database connection
import connectDB from "./database/db.js";

// Import Arcjet global middleware from config
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";

// Import error middleware
import errorMiddleware from "./middlewares/error.middleware.js";

// Import routes
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import subscriptionRoutes from "./routes/subscription.routes.js";
import workflowRoutes from "./routes/workflow.routes.js";

const app = express();

// Define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());

// Global security middleware (Arcjet)
// app.use(arcjetMiddleware);

// Define routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/subscriptions", subscriptionRoutes);
app.use("/api/workflows", workflowRoutes);

app.use(errorMiddleware);

// Basic route for testing
app.get("/", (req, res) => {
  res.send("Welcome to the Subscriptions API");
});

const port = PORT || 5500;
app.listen(port, async () => {
  console.log(`Subscription Tracker API running on http://localhost:${port}`);

  await connectDB();
});

export default app;
