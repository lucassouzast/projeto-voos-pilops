
describe('Testando getAllFlights', () =>  {
    it('Deve retornar a pagina correta de voos com paginação', async () => {
        jest.doMock('../data/flightHistory.json', () => ({
            flights: Array.from({length: 25}, (_, i) => ({id: `FL-${i+1}`, flightData: {}})),
        }), {virtual: true});
        const {getAllFlights} = await import('./flightController');
        const json = jest.fn();
        const status = jest.fn(() => ({json}));
        const response = {status} as any;
        const request = {query: {page: '2', limit: '10'}} as any;
        getAllFlights(request, response);

        expect(status).toHaveBeenCalledWith(200);
        expect(json).toHaveBeenCalledWith({
            page: 2,
            limit: 10,
            totalFlights: 25,
            totalPages: 3,
            flights: Array.from({length: 10}, (_, i) => ({id: `FL-${i+11}`, flightData: {}}))
        });
    });
});