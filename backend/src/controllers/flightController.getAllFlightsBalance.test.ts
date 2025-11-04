
describe('Testando getAllFlightsBalance', () => {
  it('Deve retornar o balanço correto dos voos', async () => {
    jest.doMock('../data/flightHistory.json', () => ({
      flights: [
        { flightData: { balance: 100 } },
        { flightData: { balance: -50 } },
        { flightData: { balance: 200 } },
      ],
    }), { virtual: true });

    const { getAllFlightsBalance } = await import('./flightController');

    const json = jest.fn();
    const status = jest.fn(() => ({ json }));
    const response = { status } as any;

    getAllFlightsBalance({} as any, response);

    expect(status).toHaveBeenCalledWith(200);
    expect(json).toHaveBeenCalledWith({ totalBalance: 250 });
  });

  it('Deve retornar o balanço zero quando não houver voos', async () => {
    jest.resetModules();
    jest.doMock('../data/flightHistory.json', () => ({
      flights: [],
    }), { virtual: true });

    const { getAllFlightsBalance } = await import('./flightController');

    const json = jest.fn();
    const status = jest.fn(() => ({ json }));
    const response = { status } as any;

    getAllFlightsBalance({} as any, response);

    expect(status).toHaveBeenCalledWith(200);
    expect(json).toHaveBeenCalledWith({ totalBalance: 0 });
  });
});

