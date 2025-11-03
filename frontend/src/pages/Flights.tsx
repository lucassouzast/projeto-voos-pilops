import { useEffect, useState } from "react";
import { FlightCard } from "../components/FlightCard";
import { PilopsLogo } from "../components/PilopsLogo";
import type { Flight } from "../types/flight";
import { api } from "../services/api";
import { SectionHeader } from "../components/SectionHeader";
import { Box, ButtonBase, Pagination, Skeleton } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { FlightBalance } from "../components/FlightBalance";

export const Flights = () => {
    const [flightsList, setFlightsList] = useState<Flight[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const navigate = useNavigate();

    const getFlights = (page: number) => {
        api.get(`/flights?page=${page}`).then((response) => {
            setFlightsList(response.data.flights);
            setTotalPages(response.data.totalPages);
        });
    };

    useEffect(() => {
        getFlights(currentPage);
    }, [currentPage]);
    useEffect(() => {
        setCurrentPage(1);
    }, []);
    return (
        <>
            <Box sx={{ maxWidth: "1200px", mx: "auto", px: 2 }}>
                <PilopsLogo />
                <div>
                    <Box display={"flex"} justifyContent={"space-between"}>
                        <SectionHeader />
                        <FlightBalance />
                    </Box>

                    {flightsList && flightsList.length > 0
                        ? flightsList.map((flight) => (
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
                                      key={flight.id}
                                      onClick={() =>
                                          navigate(`/flights/${flight.id}`, {
                                              state: flight,
                                          })
                                      }
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
                        : Array.from({ length: 5 }).map((_, index) => (
                              <Skeleton
                                  key={index}
                                  variant="rectangular"
                                  width="100%"
                                  height={94}
                                  sx={{ mb: 2 }}
                              />
                          ))}

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
