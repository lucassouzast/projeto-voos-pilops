import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { getTotalBalance } from "../services/flightServices";

export const FlightBalance = () => {
    const [totalBalance, setTotalBalance] = useState(0);

    const fetchBalance = async () => {
        try {
            const balance = await getTotalBalance();
            setTotalBalance(balance);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchBalance();
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
                width: { sm: "250px" },
                px: { xs: 2.5, sm: 0 },
                ml: 0.5,
            }}
        >
            <div>
                <Typography variant="overline">Saldo Total</Typography>
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
        </Box>
    );
};
