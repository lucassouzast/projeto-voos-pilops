import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { Flight } from "../types/flight";
import { PilopsLogo } from "../components/PilopsLogo";
import { RewardsCard } from "../components/RewardsCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Typography, Skeleton } from "@mui/material";

export const SelectedFlight = () => {
    const { id } = useParams();
    const location = useLocation();
    const [flight, setFlight] = useState<Flight | null>(location.state || null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!flight) {
            api.get(`/flights/${id}`)
                .then((response) => {
                    setFlight(response.data.flight);
                })
                .catch((err) => console.error("Erro ao buscar voo:", err));
        }
    }, [id, flight]);

    if (!flight) {
        return (
            <Box
                sx={{
                    maxWidth: "1200px",
                    mx: "auto",
                    px: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                <PilopsLogo />
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Skeleton variant="circular" width={24} height={24} />
                    <Skeleton variant="text" width={180} height={32} />
                </Box>

                <Skeleton
                    variant="rectangular"
                    height={250}
                    sx={{ borderRadius: 2 }}
                />
            </Box>
        );
    }

    return (
        <Box
            sx={{
                maxWidth: "1200px",
                mx: "auto",
                px: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
            }}
        >
            <PilopsLogo />
            <Box sx={{ maxWidth: "1200px", display: "flex" }}>
                <div
                    onClick={() => navigate("/")}
                    style={{ cursor: "pointer" }}
                >
                    <ArrowBackIosIcon />
                </div>
                <Typography
                    sx={{
                        fontFamily: "Sora, sans-serif",
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "110%",
                        letterSpacing: "0",
                    }}
                >
                    Detalhes do Voo
                </Typography>
            </Box>
            <RewardsCard flight={flight} />
        </Box>
    );
};
