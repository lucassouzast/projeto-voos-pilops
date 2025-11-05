import { Alert, Snackbar } from "@mui/material";

interface ErrorAlertProps {
    error: boolean;
    onClose: () => void;
    message?: string;
}

export const ErrorAlert = ({ error, onClose, message }: ErrorAlertProps) => {
    const defaultMessage =
        "Houve um problema no momento. Por favor, tente novamente mais tarde.";

    return (
        <Snackbar open={error} autoHideDuration={6000} onClose={onClose}>
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
        </Snackbar>
    );
};
