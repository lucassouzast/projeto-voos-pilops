import { Box, Alert } from "@mui/material";

interface ErrorAlertProps {
    error: boolean;
    onClose: () => void;
    message?: string;
}

export const ErrorAlert = ({ error, onClose, message }: ErrorAlertProps) => {
    const defaultMessage = "Houve um problema no momento. Por favor, tente novamente mais tarde.";

    return (
        <Box
            sx={{
                position: "fixed",
                top: 2,
                left: 0,
                right: 0,
                zIndex: 1300,
                opacity: error ? 1 : 0,
                visibility: error ? "visible" : "hidden",
                transition: "opacity 0.6s ease-in-out",
            }}
        >
            <Alert
                variant="filled"
                severity="error"
                onClose={onClose}
                sx={{
                    borderRadius: 0,
                }}
            >
                {message || defaultMessage}
            </Alert>
        </Box>
    );
};
