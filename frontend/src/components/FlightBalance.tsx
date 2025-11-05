import { useEffect, useState } from "react";
import { Box, Typography, Skeleton } from "@mui/material";
import { getTotalBalance } from "../services/flightServices";
import { ErrorAlert } from "./ErrorAlert";

export const FlightBalance = () => {
    const [totalBalance, setTotalBalance] = useState(0);
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(false);

    const fetchBalance = async () => {
        try {
            const balance = await getTotalBalance();
            setTotalBalance(balance);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBalance();
    }, []);

    const handleCloseError = () => {
        setError(false);
    };
    return (
        <>
            <ErrorAlert
                error={error}
                onClose={handleCloseError}
                message="Erro ao buscar o saldo total dos voos"
            />
            {loading ? (
                <Skeleton
                    variant="rectangular"
                    width={250}
                    height={80}
                    sx={{ borderRadius: 2, ml: 0.5 }}
                />
            ) : (
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    sx={{
                        bgcolor: "#1976d2",
                        color: "#fff",
                        borderRadius: 2,
                        maxHeight: "80px",
                        width: { sm: "250px" },
                        px: { xs: 2.5, sm: 0 },
                        ml: 0.5,
                        py: 1,
                    }}
                >
                    {error ? (
                        <Typography variant="overline">
                            Erro ao carregar saldo
                        </Typography>
                    ) : (
                        <div>
                            <Typography variant="overline">
                                Saldo Total
                            </Typography>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{ fontWeight: 700, whiteSpace: "nowrap" }}
                            >
                                {`P$ ${totalBalance.toLocaleString("pt-BR", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}`}
                            </Typography>
                        </div>
                    )}
                </Box>
            )}
        </>
    );
};
