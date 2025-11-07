import { useEffect, useState } from "react";
import { FlightCard } from "../components/FlightCard";
import { PilopsLogo } from "../components/PilopsLogo";
import type { Flight } from "../types/flight";
import { SectionHeader } from "../components/SectionHeader";
import { Box, ButtonBase, Grid, Pagination, Skeleton } from "@mui/material";

import { FlightSortBar } from "../components/FlightSortBar";

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
    const [errorMessage, setErrorMessage] = useState<string | undefined>(
        undefined
    );

    const [sortType, setSortType] = useState<"none" | "balance" | "date">(
        "none"
    );
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

    const navigate = useNavigate();

    const fetchFlights = async (
        page: number,
        sort?: string,
        order?: string
    ) => {
        setLoading(true);
        try {
            let query = `?page=${page}`;
            if (sort && sort !== "none") {
                query += `&sort=${sort}&order=${order}`;
            }
            const flightsData = await getFlights(query);
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
        fetchFlights(currentPage, sortType, sortOrder);
    }, [currentPage, sortType, sortOrder]);

    return (
        <>
            <ErrorAlert
                error={error}
                onClose={() => setError(false)}
                message={errorMessage}
            />

            <Box sx={{ maxWidth: "1147px", mx: "auto", px: 2 }}>
                <PilopsLogo />
                <div>
                    <Grid
                        container
                        justifyContent="space-between"
                        mb={{ xs: 3, md: 1 }}
                    >
                        <Grid size={{ md: 6, xs: 12 }}>
                            <SectionHeader />
                        </Grid>
                        <Grid
                            size={{ md: 6, xs: 6 }}
                            display={"flex"}
                            justifyContent={"flex-end"}
                        >
                            <FlightBalance />
                        </Grid>
                        <Grid size={{ md: 6, xs: 4 }} display={"flex"} alignItems={"flex-start"}>
                            <FlightSortBar
                                sortType={sortType}
                                setSortType={setSortType}
                                sortOrder={sortOrder}
                                setSortOrder={setSortOrder}
                            />
                        </Grid>
                    </Grid>

                    {!loading ? (
                        flightsList.length > 0 ? (
                            flightsList.map((flight) => (
                                <Box
                                    sx={{ mb: 3 }}
                                    key={flight.id}
                                    onClick={() =>
                                        navigate(`/flights/${flight.id}`, {
                                            state: flight,
                                        })
                                    }
                                    style={{ cursor: "pointer" }}
                                >
                                    <ButtonBase
                                        data-testid={`flight-card-${flight.id}`}
                                        sx={{
                                            width: "100%",
                                            display: "block",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <FlightCard flight={flight} />
                                    </ButtonBase>
                                </Box>
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
