const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: API welcome endpoint
 *     description: Returns basic API information and documentation links
 *     responses:
 *       200:
 *         description: Welcome message with API info
 */
router.get('/', (req, res) => {
  res.json({
    message: 'Bobs-Corn API - Welcome!',
    version: '1.0.0',
    documentation: '/api-docs'
  });
});

module.exports = router;