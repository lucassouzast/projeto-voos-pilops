
describe('Testando getFlightById', () =>  {
    it('Deve retornar o voo correto quando o ID existir', async () => {
        jest.doMock('../data/flightHistory.json', () => ({
            flights: [
                {id: 'FL-001', flightData: {}},
                {id: 'FL-002', flightData: {}},
            ],
        }), {virtual: true});
        const {getFlightById} = await import('./flightController');

        const json = jest.fn();
        const status = jest.fn(() => ({json}));
        const response = {status} as any;
        const request = {params: {id: 'FL-002'}} as any;
        getFlightById(request, response);

        expect(status).toHaveBeenCalledWith(200);
        expect(json).toHaveBeenCalledWith({flightById: {id: 'FL-002', flightData: {}}});
    });

    it('Deve retornar 404 quando o ID do voo não existir', async () => {
        jest.resetModules();
        jest.doMock('../data/flightHistory.json', () => ({
            flights: [
                {id: 'FL-001', flightData: {}},
                {id: 'FL-002', flightData: {}},
            ],
        }), {virtual: true});
        const {getFlightById} = await import('./flightController');
        const json = jest.fn();
        const status = jest.fn(() => ({json}));
        const response = {status} as any;

        const request = {params: {id: 'FBA-3232'}} as any;
        getFlightById(request, response);
        expect(status).toHaveBeenCalledWith(404);
        expect(json).toHaveBeenCalledWith({message: 'Voo não encontrado.'});
    })
});