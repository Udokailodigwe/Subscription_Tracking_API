import { Router } from "express";

const workflowRouter = Router();

import { sendReminders } from "../controllers/workflow.controller.js";

// The route for QStash to trigger workflow actions.
workflowRouter.post("/subscription/reminder", sendReminders);

export default workflowRouter;
