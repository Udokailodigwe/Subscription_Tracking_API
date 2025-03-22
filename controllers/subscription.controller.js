// controllers/subscription.controller.js
import mongoose from "mongoose";
import Subscription from "../models/Subscription.js";
import { workflowClient } from "../config/upstash.js";
import { SERVER_URL } from "../config/env.js";

export const createSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });

    const { workflowRunId } = await workflowClient.trigger({
      url: `${SERVER_URL}/api/workflows/subscription/reminder`,
      body: {
        subscriptionId: subscription._id,
      },
      headers: {
        "content-type": "application/json",
      },
      retries: 0,
    });
    res
      .status(201)
      .json({ success: true, data: { subscription, workflowRunId } });
  } catch (error) {
    next(error);
  }
};

export const getUserSubscriptions = async (req, res, next) => {
  try {
    // is the loggedIn user same as as the one in the token?
    if (req.params.userId !== req.user.userId) {
      const error = new Error("You are not the owner of this account");
      error.statuscode = 401;
      throw error;
    }
    const subscriptions = await Subscription.find({ user: req.user.id });
    res.status(200).json({ success: true, data: subscriptions });
  } catch (error) {
    next(error);
  }
};

export const findSubscriptionById = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error(`Invalid subscription ID: ${id}`);
  }
  const subscription = await Subscription.findById(id);
  if (!subscription) {
    throw new Error("Subscription not found");
  }
  return subscription;
};

export const getSubscriptionById = async (req, res, next) => {
  try {
    const subscription = await findSubscriptionById(req.params.id);
    // Ensure that the authenticated user owns the subscription
    if (subscription.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    res.status(200).json({ success: true, data: subscription });
  } catch (error) {
    next(error);
  }
};

// PUT update an existing subscription
export const updateSubscription = async (req, res, next) => {
  const { id } = req.params;
  const {
    name,
    price,
    frequency,
    category,
    renewalDate,
    paymentMethod,
    startDate,
  } = req.body;
  try {
    const subscription = await Subscription.findById(id);
    if (!subscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }
    if (subscription.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    subscription.name = name || subscription.name;
    subscription.price = price || subscription.price;
    subscription.frequency = frequency || subscription.frequency;
    subscription.category = category || subscription.category;
    subscription.renewalDate = renewalDate || subscription.renewalDate;
    subscription.paymentMethod = paymentMethod || subscription.paymentMethod;
    subscription.startDate = startDate || subscription.startDate;

    const updatedSubscription = await subscription.save();
    res.status(200).json(updatedSubscription);
  } catch (error) {
    next(error);
  }
};

// DELETE a subscription
export const deleteSubscription = async (req, res, next) => {
  const { id } = req.params;
  try {
    const subscription = await Subscription.findById(id);
    if (!subscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }
    if (subscription.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    await subscription.deleteOne();
    res.status(200).json({ success: true, message: "Subscription deleted" });
  } catch (error) {
    next(error);
  }
};
