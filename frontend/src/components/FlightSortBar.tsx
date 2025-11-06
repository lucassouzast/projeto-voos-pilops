import { Box, ButtonBase, FormControl, MenuItem, Select } from "@mui/material";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

interface FlightSortBarProps {
    sortType: "none" | "balance" | "date";
    setSortType: (type: "none" | "balance" | "date") => void;
    sortOrder: "asc" | "desc";
    setSortOrder: (order: "asc" | "desc") => void;
}

export const FlightSortBar = ({
    sortType,
    setSortType,
    sortOrder,
    setSortOrder,
}: FlightSortBarProps) => (
    <Box display="flex" alignItems="center" gap={2} sx={{ mb: 2 }}>
        <FormControl sx={{ minWidth: 120 }}>
            <Select
                value={sortType}
                onChange={(e) =>
                    setSortType(
                        e.target.value as "none" | "balance" | "date"
                    )
                }
                displayEmpty
                sx={{
                    bgcolor: "#404040",
                    height: 36,
                    fontSize: 14,
                }}
            >
                <MenuItem value="none">Ordenar</MenuItem>
                <MenuItem value="balance">Saldo</MenuItem>
                <MenuItem value="date">Data</MenuItem>
            </Select>
        </FormControl>
        {sortType !== "none" && (
            <ButtonBase
                onClick={() =>
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                }
                sx={{
                    display: "flex",
                    alignItems: "center",
                    px: 2,
                    py: 1,
                    bgcolor: "primary.main",
                    color: "white",
                    borderRadius: 1,
                }}
            >
                {sortOrder === "asc" ? "Ascendente" : "Decrescente"}
                {sortOrder === "asc" ? (
                    <ArrowUpward fontSize="small" />
                ) : (
                    <ArrowDownward fontSize="small" />
                )}
            </ButtonBase>
        )}
    </Box>
);