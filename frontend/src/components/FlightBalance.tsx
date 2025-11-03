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
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
            bgcolor="#1976d2"
            color="#fff"
            borderRadius="12px"
            minWidth="250px"
            height="70px"
            px={4}
            boxShadow={0}
        >
            <Typography variant="caption">Saldo Total</Typography>
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 700,
                    mt: 0.5,
                }}
            >
                {`P$ ${totalBalance.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })}`}
            </Typography>
        </Box>
    );
};
