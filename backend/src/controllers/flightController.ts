import type { Request, Response } from 'express';
import flights from '../data/flightHistory.json' with { type: 'json' };

export const getAllFlights  = (req: Request, res: Response): Response => {
    try {
        return res.status(200).json(flights);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao carregar voos.' });
    }
};

export const getFlightById = (req: Request, res: Response) => {
    const { flights: flightList } = flights;
    
    try {
        const { id } = req.params;
        const flight = flightList.find(f => f.id === id);
        if (!flight) {
            return res.status(404).json({ message: 'Voo não encontrado.' });
        } 
        return res.status(200).json(flight);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao carregar voo.' });
    }
        }