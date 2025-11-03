import express from 'express';
import { getAllFlights, getAllFlightsBalance, getFlightById } from '../controllers/flightController.js';

const router = express.Router();

router.get('/flights', getAllFlights);
router.get('/flights/balance', getAllFlightsBalance);
router.get('/flights/:id', getFlightById);

export default router;
