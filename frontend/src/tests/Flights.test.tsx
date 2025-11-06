vi.mock("../services/flightServices", () => ({
    getFlights: vi.fn().mockResolvedValue({
        flights: [
            {
                id: "FL-001",
                aircraft: {
                    name: "Boeing 737",
                    registration: "PR-PNK",
                    airline: "Pilops Test",
                },
                flightData: {
                    date: "2024-06-01",
                    balance: 1500,
                    route: { from: "JFK", to: "LAX" },
                    xp: 300,
                    missionBonus: 200,
                },
            },
        ],
        totalPages: 1,
    }),
    getTotalBalance: vi.fn().mockResolvedValue(1500),
}));


import * as flightServices from "../services/flightServices";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Flights } from "../pages/Flights";
import { describe, it, expect, vi } from "vitest";

describe("Flights", () => {
    it("deve navegar para a página de detalhes ao clicar no card", async () => {
        const user = userEvent.setup();

        render(
            <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    <Route path="/" element={<Flights />} />
                    <Route
                        path="/flights/:id"
                        element={<div>Detalhes do voo</div>}
                    />
                </Routes>
            </MemoryRouter>
        );

        const card = await screen.findByTestId("flight-card-FL-001");
        await user.click(card);

        expect(screen.getByText("Detalhes do voo")).toBeInTheDocument();
    });

    it("Deve exibir os dados do voo corretamente", async () => {
        render(
            <MemoryRouter initialEntries={["/flights"]}>
                <Routes>
                    <Route path="/flights" element={<Flights />} />
                </Routes>
            </MemoryRouter>
        );
        expect(await screen.findByText("FL-001")).toBeInTheDocument();
        expect(screen.getByText("Boeing 737")).toBeInTheDocument();
        expect(screen.getByText("Pilops Test")).toBeInTheDocument();
        expect(screen.getByText("JFK")).toBeInTheDocument();
        expect(screen.getByText("LAX")).toBeInTheDocument();
    });

    it("Deve exibir mensagem quando não houver voos", async () => {

        vi.mocked(flightServices.getFlights).mockResolvedValueOnce({
            flights: [],
            totalPages: 1,
        });
        render(
            <MemoryRouter initialEntries={["/flights"]}>
                <Routes>
                    <Route path="/flights" element={<Flights />} />
                </Routes>
            </MemoryRouter>
        );
        expect(await screen.findByText("Nenhum voo encontrado.")).toBeInTheDocument();
    })
})
;
