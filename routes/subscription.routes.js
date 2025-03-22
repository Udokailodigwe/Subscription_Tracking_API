// routes/subscription.routes.js
import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
  updateSubscription,
  deleteSubscription,
  getSubscriptionById,
} from "../controllers/subscription.controller.js";

const router = express.Router();

// All subscription routes require authentication.
router.use(authMiddleware);

router.post("/", createSubscription);
router.get("/", getUserSubscriptions);
router.get("/:id", getSubscriptionById);
router.put("/:id", updateSubscription);
router.delete("/:id", deleteSubscription);

export default router;
