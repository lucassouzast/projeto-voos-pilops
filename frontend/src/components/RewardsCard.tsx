import { Box, Card, Grid, Typography } from "@mui/material";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

import PilopsCoin from "../assets/PilopsCoin.svg";
import StarShine from "../assets/StarShine.svg";
import AwardStar from "../assets/AwardStar.svg";

import type { Flight } from "../types/flight";
import { FlightCard } from "./FlightCard";

interface FlightCardProps {
    flight: Flight;
}

export const RewardsCard = ({ flight }: FlightCardProps) => {
    return (
        <>
            <Box>
                <Card
                    sx={{
                        width: "100%",
                        maxWidth: 1200,
                        minHeight: 155,
                        borderRadius: "5px",
                        border: "1px solid #444444",
                        p: 3,
                        backgroundColor: "#212121",
                        color: "white",
                        gap: 3,
                        mb: 4,
                    }}
                >
                    <Box display={"flex"} alignItems="center" mb={2}>
                        <EmojiEventsOutlinedIcon
                            sx={{ color: "#38BDF8", fontSize: 24 }}
                        />
                        <Typography
                            sx={{
                                fontFamily: "Manrope, sans-serif",
                                fontWeight: 400,
                                fontSize: "14px",
                                lineHeight: "140%",
                                letterSpacing: 0,
                                ml: 1,
                                color: "#E0E0E0",
                            }}
                        >
                            Recompensas
                        </Typography>
                    </Box>
                    <Grid container spacing={6} justifyContent="space-between">
                        <Grid size={3}>
                            <Box display={"flex"}>
                                <img src={PilopsCoin} alt="Pilops Coin" />
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    ml={2}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: "Manrope, sans-serif",
                                            fontWeight: 400,
                                            fontSize: "14px",
                                            lineHeight: "140%",
                                            letterSpacing: 0,
                                            color: "#E0E0E0",
                                            mb: 0.5,
                                        }}
                                    >
                                        Ganhos Totais
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            fontFamily: "Sora, sans-serif",
                                            fontWeight: 700,
                                            fontSize: "32px",
                                            lineHeight: "110%",
                                            letterSpacing: 0,
                                            color:
                                                flight.flightData.balance < 0
                                                    ? "#FF0000"
                                                    : "#00FF88",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {flight.flightData.balance.toLocaleString(
                                            "pt-BR",
                                            {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            }
                                        )}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={3}>
                            <Box display={"flex"}>
                                <img src={StarShine} />
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    ml={2}
                                >
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            fontFamily: "Manrope",
                                            fontWeight: 400,
                                            fontSize: "14px",
                                            lineHeight: "140%",
                                            letterSpacing: 0,
                                            color: "#E0E0E0",
                                            mb: 0.5,
                                        }}
                                    >
                                        XP CONQUISTADO
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            fontFamily: "Sora",
                                            fontWeight: 700,
                                            fontSize: "32px",
                                            lineHeight: "110%",
                                            letterSpacing: 0,
                                            color:"#fff"
                                        }}
                                    >
                                        {flight.flightData.xp}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={3}>
                            <Box display={"flex"}>
                                <img src={AwardStar} />

                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    ml={2}
                                >
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            fontFamily: "Manrope",
                                            fontWeight: 400,
                                            fontSize: "14px",
                                            lineHeight: "140%",
                                            letterSpacing: 0,
                                            color: "#E0E0E0",
                                            mb: 0.5,
                                        }}
                                    >
                                        Bônus de missão
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            fontFamily: "Sora",
                                            fontWeight: 700,
                                            fontSize: "32px",
                                            lineHeight: "110%",
                                            letterSpacing: 0,
                                            color: "#fff",
                                        }}
                                    >
                                        {flight.flightData.missionBonus * 100}%
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
                <FlightCard flight={flight} showBalance={false} />
            </Box>
        </>
    );
};
