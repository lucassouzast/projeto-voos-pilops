import { render, screen } from '@testing-library/react'
import { FlightCard } from '../components/FlightCard'
import { describe, it, expect } from 'vitest'


describe('FlightCard', () => {
  it('Deve verificar se os dados do voo estão sendo exibidos corretamente', () => {
    render(
      <FlightCard
        flight={{
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
            }}
      />
    )
    expect(screen.getByText('FL-001')).toBeInTheDocument();
    expect(screen.getByText('Boeing 737')).toBeInTheDocument();
    expect(screen.getByText('Pilops Test')).toBeInTheDocument();
    expect(screen.getByText('01/06/2024')).toBeInTheDocument();
    expect(screen.getByText('P$ 1.500,00')).toBeInTheDocument();
    expect(screen.getByText('JFK')).toBeInTheDocument();
    expect(screen.getByText('LAX')).toBeInTheDocument();
  })
})

