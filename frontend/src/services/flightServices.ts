import { api } from "./api";

export const getTotalBalance = async () => {
    try {
        const response = await api.get("/flights/balance");
        return response.data.totalBalance;
    } catch (error) {
        console.error("Erro ao buscar saldo:", error);
    }
};

export const getFlights = async (page: number) => {
    try {
        const response = await api.get(`/flights?page=${page}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar voos:", error);
    }
};
