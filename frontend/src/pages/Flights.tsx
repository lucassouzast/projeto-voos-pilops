import { useEffect, useState } from "react";
import { FlightCard } from "../components/FlightCard";
import { PilopsLogo } from "../components/PilopsLogo";
import type { Flight } from "../types/flight";
import { api } from "../services/api";
import { SectionHeader } from "../components/SectionHeader";
import { Box } from "@mui/material";

import { useNavigate } from "react-router-dom";


export const Flights = () => {
    useEffect(() => {
        getFlights();
    }, []);
    const getFlights = () => {
        api.get("/flights").then((response) => {
            setFlightsList(response.data.flights);
        });
    };

    const [flightsList, setFlightsList] = useState<Flight[]>([]);
    const navigate = useNavigate();

    return (
        <>
        <Box sx={{maxWidth: '1200px', mx:'auto', px:2}}>
            <PilopsLogo />
            <div>
                <SectionHeader />
                {flightsList.map((flight) => (
                    <div key={flight.id} onClick={()=> navigate(`/flights/${flight.id}`, {state: flight})} style={{cursor: 'pointer'}}>
                        <FlightCard key={flight.id} flight={flight} />
                    </div>
                ))}
            </div>
        </Box>
        </>
    );
};
