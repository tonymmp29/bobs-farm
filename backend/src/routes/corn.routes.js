const express = require('express');
const router = express.Router();
const cornController = require('../controllers/corn.controller');

/**
 * @swagger
 * /api/corn/buy:
 *   post:
 *     summary: Buy corn from Bob's store
 *     description: Purchase corn with a limit of 1 corn per client per minute due to rate limiting
 *     tags:
 *       - Corn
 *     responses:
 *       200:
 *         description: Corn purchased successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Corn purchased successfully!"
 *                 order:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "1698765432100"
 *                     date:
 *                       type: string
 *                       format: date-time
 *                       example: "2023-10-31T10:30:32.100Z"
 *                     items:
 *                       type: object
 *                       properties:
 *                         type:
 *                           type: string
 *                           example: "corn"
 *                         quantity:
 *                           type: number
 *                           example: 1
 *                         basePrice:
 *                           type: number
 *                           example: 5.00
 *                     total:
 *                       type: number
 *                       example: 5.00
 *       429:
 *         description: Rate limit exceeded - too many requests
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "You can only buy 1 corn per minute. Please wait before buying more corn."
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Error processing purchase"
 */

// POST to buy corn
router.post('/buy', cornController.buyCorn);

module.exports = router;