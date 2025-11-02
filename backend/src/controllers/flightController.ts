import type { Request, Response } from 'express';
import flights from '../data/flightHistory.json' with { type: 'json' };

export const getAllFlights  = (req: Request, res: Response): Response => {
    try {
        return res.status(200).json(flights);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao carregar voos.' });
    }
};