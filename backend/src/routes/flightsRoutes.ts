import express from 'express';
import { getAllFlights, getAllFlightsBalance, getFlightById } from '../controllers/flightController.js';

const router = express.Router();

/**
 * @swagger
 * /flights:
 *   get:
 *     summary: Lista todos os voos
 *     tags:
 *       - Voos
 *     responses:
 *       200:
 *         description: Lista de voos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Flight'
 */

/**
 * @swagger
 * /flights/balance:
 *   get:
 *     summary: Retorna o balanço total dos voos
 *     tags:
 *       - Voos
 *     responses:
 *       200:
 *         description: Balanço total
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalBalance:
 *                   type: number
 */

/**
 * @swagger
 * /flights/{id}:
 *   get:
 *     summary: Busca voo por ID
 *     tags:
 *       - Voos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Voo encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Flight'
 *       404:
 *         description: Voo não encontrado
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Flight:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "FL-001"
 *         aircraft:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: "Cessna 172 G1000"
 *             registration:
 *               type: string
 *               example: "PR-PNK"
 *             airline:
 *               type: string
 *               example: "Pilops Academy"
 *         flightData:
 *           type: object
 *           properties:
 *             date:
 *               type: string
 *               format: date
 *               example: "2025-07-22"
 *             balance:
 *               type: number
 *               example: 1065
 *             route:
 *               type: object
 *               properties:
 *                 from:
 *                   type: string
 *                   example: "SBRJ"
 *                 to:
 *                   type: string
 *                   example: "SBFZ"
 *             xp:
 *               type: integer
 *               example: 445
 *             missionBonus:
 *               type: number
 *               example: 0
 */

router.get('/flights', getAllFlights);
router.get('/flights/balance', getAllFlightsBalance);
router.get('/flights/:id', getFlightById);

export default router;
