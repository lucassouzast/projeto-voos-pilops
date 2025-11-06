import type { Request, Response } from 'express';
import flightsData from '../data/flightHistory.json' with { type: 'json' };
import { Flight } from '../model/flightModel';


const flights: Flight[] = flightsData.flights;

const validSorts = ["balance", "date"];

export const getAllFlights  = (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const sort = typeof req.query.sort === "string" ? req.query.sort : undefined;
    const order = req.query.order === "asc" ? "asc" : "desc";

    let flightsSorted: Flight[];

    if (sort && validSorts.includes(sort)) {
        flightsSorted = [...flights].sort((a, b) => {
            let valA, valB;
            switch (sort) {
                case "balance":
                    valA = a.flightData[sort];
                    valB = b.flightData[sort];
                    break;
                case "date":
                    valA = new Date(a.flightData.date).getTime();
                    valB = new Date(b.flightData.date).getTime();
                    break;
                default:
                    valA = 0;
                    valB = 0;
            }
            return order === "asc" ? valA - valB : valB - valA;
        });
    } else {
        flightsSorted = [...flights];
    }

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const flightsPage = flightsSorted.slice(startIndex, endIndex);

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