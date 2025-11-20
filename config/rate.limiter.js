import rateLimit from "express-rate-limit";

// Rate Limiting
const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

export default rateLimiter;
