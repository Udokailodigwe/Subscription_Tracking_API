import aj from "../config/arcjet.js";

// Global Arcjet middleware applied to every incoming request.
const arcjetMiddleware = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: 1 });
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res.status(429).json({ error: "Too Many Requests" });
      }
      if (decision.reason.isBot()) {
        console.log(decision);
        return res.status(403).json({ error: "Forbidden: Bot detected" });
      }
      return res.status(403).json({ error: "Forbidden" });
    }

    next();
  } catch (error) {
    console.error(`Arcjet Middleware Error: ${error}`);
    next(error);
  }
};

export default arcjetMiddleware;
