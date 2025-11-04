import type { Request, Response } from 'express';
import flightsData from '../data/flightHistory.json' with { type: 'json' };
import { Flight } from '../model/flightModel';


const flights: Flight[] = flightsData.flights;

export const getAllFlights  = (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const flightsPage = flights.slice(startIndex, endIndex);

    const totalFlights = flights.length;
    const totalPages = Math.ceil(totalFlights/limit);

    try {
        return res.status(200).json({
            page,
            limit,
            totalFlights,
            totalPages,
            flights: flightsPage});
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao carregar voos.' });
    }
};

export const getFlightById = (req: Request, res: Response) => {
    
    try {
        const { id } = req.params;
        const flightById = flights.find(f => f.id === id);
        if (!flightById) {
            return res.status(404).json({ message: 'Voo não encontrado.' });
        } 
        return res.status(200).json({flightById});
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao carregar voo.' });
    }
        }


export const getAllFlightsBalance = (req: Request, res:Response) => {

    const totalBalance = flights.reduce((acc, f) => acc + f.flightData.balance, 0);
    return res.status(200).json({totalBalance});
}