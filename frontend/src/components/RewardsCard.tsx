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
            <Card
                sx={{
                    width: "100%",
                    maxWidth: 1147,
                    minheight: 155,
                    borderRadius: "5px",
                    border: "1px solid #444444",
                    px: 3,
                    py: 3,
                    backgroundColor: "#212121",
                    color: "white",
                    mb: 3,
                }}
            >
                <Box
                    display={"flex"}
                    alignItems="center"
                    mb={2}
                    justifyContent={{ xs: "center", sm: "flex-start" }}
                >
                    <EmojiEventsOutlinedIcon
                        sx={{ color: "#38BDF8", fontSize: 24 }}
                    />
                    <Typography
                        sx={{
                            fontFamily: "Sora",
                            fontWeight: 700,
                            fontSize: "18px",
                            lineHeight: "140%",
                            letterSpacing: 0,
                            ml: 1,
                            color: "#E0E0E0",
                        }}
                    >
                        Recompensas
                    </Typography>
                </Box>
                <Grid
                    container
                    rowSpacing={{ xs: 1 }}
                    columnSpacing={{ xs: 3, sm: 2, md: 4 }}
                >
                    <Grid size={{ xs: 12, sm: 12, md: 4 }}>
                        <Box
                            display={"flex"}
                            justifyContent={{ xs: "center", md: "flex-start" }}
                        >
                            <img src={PilopsCoin} alt="Pilops Coin" />
                            <Box display="flex" flexDirection="column" ml={{xs:1, sm:2}}>
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
                    <Grid size={{ xs: 6, sm: 6, md: 4 }}
                        display={"flex"}
                        justifyContent={"center"}
                    >
                        <Box
                            display={"flex"}
                            justifyContent={{ xs: "center", md: "flex-start" }}
                        >
                            <img src={StarShine} />
                            <Box display="flex" flexDirection="column" ml={{xs:1, sm:2}}>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        fontFamily: "Manrope",
                                        fontWeight: 400,
                                        fontSize: "12px",
                                        lineHeight: "140%",
                                        letterSpacing: 0,
                                        color: "#E0E0E0",
                                        mb: 0.5,
                                        whiteSpace: "nowrap",
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
                                        color: "#fff",
                                    }}
                                >
                                    {flight.flightData.xp}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 6, sm: 6, md: 4 }}
                        display={"flex"}
                        justifyContent={"center"}
                    >
                        <Box
                            display={"flex"}
                            justifyContent={{ xs: "center", md: "flex-start" }}
                        >
                            <img src={AwardStar} />

                            <Box display="flex" flexDirection="column" ml={{xs:1, sm:2}}>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        fontFamily: "Manrope",
                                        fontWeight: 400,
                                        fontSize: {xs:12, md:14},
                                        lineHeight: "140%",
                                        letterSpacing: 0,
                                        color: "#E0E0E0",
                                        mb: 0.5,
                                        whiteSpace: "nowrap",
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
        </>
    );
};
