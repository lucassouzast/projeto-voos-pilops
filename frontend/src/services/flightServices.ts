import { api } from "./api";

export const getTotalBalance = async () => {
    try {
        const response = await api.get("/flights/balance");
        return response.data.totalBalance;
    } catch (error) {
        console.error("Erro ao buscar saldo:", error);
        throw error;
    }
};

export const getFlights = async (page: number) => {
    try {
        const response = await api.get(`/flights?page=${page}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar voos:", error);
        throw error;
    }
};

export const getFlightById = async (id: string) => {
    try {
        const response = await api.get(`/flights/${id}`);
        return response.data.flightById;
    } catch (error) {
        console.error("Erro ao buscar voo:", error);
        throw error;
    }};
