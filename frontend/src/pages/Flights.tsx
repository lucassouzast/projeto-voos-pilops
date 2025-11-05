import { useEffect, useState } from "react";
import { FlightCard } from "../components/FlightCard";
import { PilopsLogo } from "../components/PilopsLogo";
import type { Flight } from "../types/flight";
import { SectionHeader } from "../components/SectionHeader";
import { Box, ButtonBase, Pagination, Skeleton } from "@mui/material";

import { getFlights } from "../services/flightServices";

import { useNavigate } from "react-router-dom";
import { FlightBalance } from "../components/FlightBalance";
import { ErrorAlert } from "../components/ErrorAlert";

export const Flights = () => {
    const [flightsList, setFlightsList] = useState<Flight[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

    const navigate = useNavigate();


    const fetchFlights = async (page: number) => {
        setLoading(true);
        try {
            const flightsData = await getFlights(page);
            setFlightsList(flightsData.flights);
            setTotalPages(flightsData.totalPages);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(true);
            setErrorMessage("Não foi possível carregar os voos no momento.");
        }
    };

    useEffect(() => {
        fetchFlights(currentPage);
    }, [currentPage]);


    return (
        <>
            <ErrorAlert
                error={error}
                onClose={() => setError(false)}
                message={errorMessage}
            />
            <Box sx={{ maxWidth: "1200px", mx: "auto", px: 2 }}>
                <PilopsLogo />
                <div>
                    <Box
                        display={"flex"}
                        sx={{
                            mb: 3,
                            flexDirection: { xs: "column", sm: "row" },
                            alignItems: { xs: "flex-start", sm: "center" },
                            justifyContent: { sm: "space-between" },
                        }}
                    >
                        <SectionHeader />
                        <FlightBalance />
                    </Box>

                    {!loading ? (
                        flightsList.length > 0 ? (
                            flightsList.map((flight) => (
                                <div
                                    key={flight.id}
                                    onClick={() =>
                                        navigate(`/flights/${flight.id}`, {
                                            state: flight,
                                        })
                                    }
                                    style={{ cursor: "pointer" }}
                                >
                                    <ButtonBase
                                        sx={{
                                            width: "100%",
                                            display: "block",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <FlightCard flight={flight} />
                                    </ButtonBase>
                                </div>
                            ))
                        ) : (
                            <Box textAlign="center" py={5} color="gray">
                                Nenhum voo encontrado.
                            </Box>
                        )
                    ) : (
                        Array.from({ length: 5 }).map((_, index) => (
                            <Skeleton
                                key={index}
                                variant="rectangular"
                                width="100%"
                                height={94}
                                sx={{ mb: 2 }}
                            />
                        ))
                    )}

                    <Box display="flex" justifyContent="center" my={2}>
                        <Pagination
                            count={totalPages}
                            page={currentPage}
                            onChange={(_, page) => setCurrentPage(page)}
                            color="primary"
                        />
                    </Box>
                </div>
            </Box>
        </>
    );
};
