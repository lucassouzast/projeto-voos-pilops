import type { Request, Response } from 'express';
import flightsData from '../data/flightHistory.json' with { type: 'json' };

export const getAllFlights  = (req: Request, res: Response): Response => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const flightsPage = flightsData.flights.slice(startIndex, endIndex);

    const totalFlights = flightsData.flights.length;
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
    const { flights: flightList } = flightsData;
    
    try {
        const { id } = req.params;
        const flightById = flightList.find(f => f.id === id);
        if (!flightById) {
            return res.status(404).json({ message: 'Voo não encontrado.' });
        } 
        return res.status(200).json({flight:flightById});
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao carregar voo.' });
    }
        }


export const getAllFlightsBalance = (req: Request, res:Response) => {
    const {flights: flightsBalance } = flightsData;

    const totalBalance = flightsBalance.reduce((acc, f) => acc + f.flightData.balance, 0);
    return res.status(200).json({totalBalance});
}