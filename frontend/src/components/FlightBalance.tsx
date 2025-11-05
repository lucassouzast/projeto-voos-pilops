import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Box, Typography } from "@mui/material";

export const FlightBalance = () => {
    const [totalBalance, setTotalBalance] = useState(0);

    const getTotalBalance = async () => {
        try {
            const response = await api.get("/flights/balance");
            setTotalBalance(response.data.totalBalance);
        } catch (error) {
            console.error("Erro ao buscar saldo:", error);
        }
    };
    useEffect(() => {
        getTotalBalance();
    }, []);
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            sx={{
                bgcolor: "#1976d2",
                color: "#fff",
                borderRadius: 2,
                maxHeight: "80px",
                width: {sm:'250px'},
                px:{xs: 2.5, sm:0},
                ml:0.5
            }}
            
        >
            <div>
                <Typography variant="overline">Saldo Total</Typography>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: 700,whiteSpace: 'nowrap' }}
                >
                    {`P$ ${totalBalance.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}`}
                </Typography>
            </div>
        </Box>
    );
};
