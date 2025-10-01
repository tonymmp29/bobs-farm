const rateLimit = require('express-rate-limit');

// Rate limiter configuration - Bob's "1 corn per client per minute" rule
const limiter = rateLimit({
	windowMs: 60 * 1000, // 1 minute
	limit: 1, // Limit each IP to 1 request per `window` (here, per 1 minute)
	standardHeaders: 'draft-6', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  message: {
    error: true,
    message: "You can only buy 1 corn per minute. Please wait before buying more corn."
  }
});

module.exports = limiter;