const request = require('supertest');
const { expect } = require('chai');
const express = require('express');
const cornRoutes = require('../../src/routes/corn.routes');
const limiterMiddleware = require('../../src/middlewares/rateLimiter.middleware');

describe('Corn Routes', () => {
  
  describe('POST /api/corn/buy', () => {
    it('should buy corn successfully', async () => {

      const app = express();
      app.use(express.json());
      app.use("/api/corn", cornRoutes);

      const response = await request(app).post("/api/corn/buy").send();

      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("error", false);
      expect(response.body).to.have.property(
        "message",
        "Corn purchased successfully!"
      );
    });

    it('should block second purchase within 1 minute due to rate limiting', async () => {

      const appWithRateLimit = express();
      appWithRateLimit.use(express.json());
      appWithRateLimit.use("/api/corn", limiterMiddleware, cornRoutes);
      
      const firstResponse = await request(appWithRateLimit)
        .post("/api/corn/buy")
        .send();

      expect(firstResponse.status).to.equal(200);

      const secondResponse = await request(appWithRateLimit)
        .post("/api/corn/buy")
        .send();

      expect(secondResponse.status).to.equal(429);
      expect(secondResponse.body).to.have.property("error", true);
    });
  });
});