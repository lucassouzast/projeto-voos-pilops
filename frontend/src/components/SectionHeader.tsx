import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const SectionHeader = () => {
    return (
        <Box
            mb={4}
            component="header"
            sx={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                    fontFamily: "Sora",
                    fontWeight: 700,
                    fontStyle: "normal",
                    fontSize: "24px",
                    lineHeight: "110%",
                    letterSpacing: "0%",
                }}
            >
                Histórico de Voos
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    fontFamily: "Sora",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "18px",
                    lineHeight: "110%",
                    letterSpacing: "0%",
                }}
            >
                Visualize seu histórico completo de voos realizados
            </Typography>
        </Box>
    );
};
