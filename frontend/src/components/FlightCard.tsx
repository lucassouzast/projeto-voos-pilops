import { Box, Typography, Card, Stack, Grid } from "@mui/material";
import type { Flight } from "../types/flight";
import CircleIcon from "@mui/icons-material/Circle";

const textBase = {
    fontFamily: "Manrope",
    color: "#fff",
    lineHeight: "140%",
};

interface FlightCardProps {
    flight: Flight;
    showBalance?: boolean;
}

export const FlightCard = ({ flight, showBalance = true }: FlightCardProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
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
                }}
            >
                <Grid
                    container
                    spacing={{ xs: 2, md: 4 }}
                    justifyContent={{ xs: "flex-start", md: "space-between" }}
                >
                    <Grid size={{ xs: showBalance ? 12 : 6, md: 3, sm: 12 }}>
                        <Typography
                            sx={{
                                fontFamily: "Manrope",
                                fontWeight: 600,
                                fontSize: "16px",
                                lineHeight: "140%",
                                letterSpacing: 0,
                                whiteSpace: "nowrap",
                            }}
                        >
                            {flight.aircraft.name}
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ color: "#aaa" }}
                        >
                            {flight.aircraft.airline}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 6, md: 4, sm: 3 }}>
                        <Stack alignItems="center">
                            <Typography
                                variant="caption"
                                sx={{
                                    ...textBase,
                                    fontWeight: 400,
                                    fontSize: "12px",
                                    letterSpacing: 0,
                                    textAlign: "center",
                                    color: "#aaa",
                                }}
                            >
                                Trajeto
                            </Typography>
                            <Stack>
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
                                            minWidth: { md: 100, xs: 70 },
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
                                        {flight.flightData.route.from}
                                    </Typography>
                                    <Typography
                                        sx={{ color: "#fff", lineHeight: 1 }}
                                        fontWeight={400}
                                        fontFamily={"Manrope"}
                                        fontSize={16}
                                    >
                                        {flight.flightData.route.to}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 6, md: 1.5, sm: 3 }}>
                        <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{
                                color: "#aaa",
                                whiteSpace: "nowrap",
                                fontSize: "12px",
                            }}
                        >
                            Matrícula
                        </Typography>
                        <Typography
                            sx={{
                                ...textBase,
                                fontWeight: 600,
                                fontSize: "16px",
                                letterSpacing: 0,
                                whiteSpace: "nowrap",
                            }}
                        >
                            {flight.id}
                        </Typography>
                    </Grid>

                    <Grid
                        size={{ xs: 6, md: 1.5, sm: 3 }}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "flex-start",
                        }}
                    >
                        <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{
                                color: "#aaa",
                                whiteSpace: "nowrap",
                                fontSize: "12px",
                            }}
                        >
                            Data
                        </Typography>
                        <Typography
                            sx={{
                                ...textBase,
                                fontWeight: 600,
                            }}
                        >
                            {new Date(
                                flight.flightData.date
                            ).toLocaleDateString("pt-BR", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                            })}
                        </Typography>
                    </Grid>

                    {showBalance && (
                        <Grid size={{ xs: 6, md: 2, sm: 3 }}>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                                alignContent={"center"}
                                sx={{ color: "#aaa", whiteSpace: "nowrap" }}
                            >
                                Saldo
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                fontWeight="bold"
                                sx={{
                                    color:
                                        flight.flightData.balance < 0
                                            ? "#FF0000"
                                            : "#00FF88",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {flight.flightData.balance < 0 ? "- " : ""}
                                P${" "}
                                {Math.abs(
                                    flight.flightData.balance
                                ).toLocaleString("pt-BR", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            </Card>
        </Box>
    );
};
