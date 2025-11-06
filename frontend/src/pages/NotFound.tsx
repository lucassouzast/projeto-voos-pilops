import { PilopsLogo } from "../components/PilopsLogo";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight={{xs:"80vh", sm:"100%"}}
            px={{ xs: 2, sm: 0 }}
        >
            <PilopsLogo />
            <Typography
                variant="h4"
                fontWeight={700}
                sx={{
                    mt: { xs: 2, sm: 4 },
                    fontSize: { xs: "1.5rem", sm: "2rem" },
                }}
                textAlign="center"
            >
                Página não encontrada.
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    mt: 2,
                    mb: 4,
                    fontSize: { xs: "1rem", sm: "1.25rem" },
                    maxWidth: 350,
                    whiteSpace: "nowrap",
                }}
                textAlign="center"
            >
                Parece que você se perdeu. <br/> Que tal voltar para a página inicial?
            </Typography>
            <Button
                component={Link}
                to="/"
                variant="contained"
                color="primary"
                sx={{
                    width: { xs: "100%", sm: "auto" },
                    maxWidth: 300,
                }}
            >
                Voltar para Home
            </Button>
        </Box>
    );
};
