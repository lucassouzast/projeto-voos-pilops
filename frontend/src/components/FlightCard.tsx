import { Box, Typography, Card, Stack } from "@mui/material";
import type { Flight } from "../types/flight";
import CircleIcon from "@mui/icons-material/Circle";

const textBase = {
    fontFamily: "Manrope",
    color: "#fff",
    lineHeight: "140%",
};

interface FlightCardProps {
    flight: Flight;
}

export const FlightCard = ({ flight }: FlightCardProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Card
                sx={{
                    width: "100%",
                    maxWidth: 1147,
                    minHeight: 94,
                    borderRadius: "5px",
                    border: "1px solid #444444",
                    p: 3,
                    backgroundColor: "#212121",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <Box sx={{ minWidth: 150 }}>
                        <Typography variant="h5" fontWeight="bold">
                            Boeing 737-800
                            {/* {flight.aircraft.name} */}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ color: "#aaa" }}
                        >
                            Gol Linhas Aéreas (GOL)
                            {/* {flight.aircraft.airline} */}
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: "center", mx: 4, flexShrink: 0 }}>
                        <Stack alignItems="center">
                            <Typography
                                variant="caption"
                                sx={{
                                    ...textBase,
                                    fontWeight: 400,
                                    fontSize: "12px",
                                    letterSpacing: 0,
                                    textAlign: "center",
                                }}
                            >
                                Trajeto
                            </Typography>

                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={0}
                            >
                                <CircleIcon
                                    sx={{ fontSize: 16, color: "#f1c40f" }}
                                />
                                <Box
                                    sx={{
                                        height: 4,
                                        backgroundColor: "#f1c40f",
                                        minWidth: 100,
                                        borderRadius: 2,
                                    }}
                                />
                                <CircleIcon
                                    sx={{ fontSize: 16, color: "#f1c40f" }}
                                />
                            </Stack>

                            <Stack
                                direction="row"
                                alignItems="center"
                                sx={{
                                    mt: 0.5,
                                    width: "100%",
                                    justifyContent: "space-between",
                                    px: "2px",
                                }}
                            >
                                <Typography
                                    sx={{ color: "#fff", lineHeight: 1 }}
                                    fontWeight={400}
                                    fontFamily={"Manrope"}
                                    fontSize={16}
                                >
                                    SBVT
                                </Typography>
                                <Typography
                                    sx={{ color: "#fff", lineHeight: 1 }}
                                    fontWeight={400}
                                    fontFamily={"Manrope"}
                                    fontSize={16}
                                >
                                    SBSP
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ color: "#aaa", whiteSpace: "nowrap" }}
                        >
                            Matrícula
                        </Typography>
                        <Typography
                            sx={{
                                ...textBase,
                                fontWeight: 600,
                                fontSize: "16px",
                                letterSpacing: 0,
                                textAlign: "center",
                                whiteSpace: "nowrap",
                            }}
                        >
                            PR-000
                            {/* {flight.id} */}
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: "center" }}>
                        <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ color: "#aaa", whiteSpace: "nowrap" }}
                        >
                            Data
                        </Typography>
                        <Typography
                            sx={{
                                ...textBase,
                                fontWeight: 600,
                                fontSize: "16px",
                                letterSpacing: 0,
                                textAlign: "center",
                                whiteSpace: "nowrap",
                            }}
                        >
                            15/07/2025
                            {/* {flight.flightData.date} */}
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: "center" }}>
                        <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ color: "#aaa", whiteSpace: "nowrap" }}
                        >
                            Saldo
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            sx={{ color: "#2ecc71", whiteSpace: "nowrap" }}
                        >
                            {/* {flight.flightData.balance} */}
                            R$ 5.000,00
                        </Typography>
                    </Box>
                </Box>
            </Card>
        </Box>
    );
};
