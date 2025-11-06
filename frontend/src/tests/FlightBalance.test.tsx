vi.mock('../services/flightServices', () => ({
  getTotalBalance: vi.fn().mockResolvedValue(1500),
}));

import { render, screen } from "@testing-library/react";
import { FlightBalance } from "../components/FlightBalance";
import { expect, describe, it, vi } from "vitest";

describe("FlightBalance", () => {
    it("Deve exibir o saldo corretamente", async () => {
        render(<FlightBalance />);
        const saldo = await screen.findByText(/1.500/);
        await expect(saldo).toBeInTheDocument();
    });
});
