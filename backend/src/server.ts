import express from 'express';
import helmet from 'helmet';
import flightsRoutes from './routes/flightsRoutes.js';


const server = express();

server.use(helmet());
server.use(express.json());
server.use('/', flightsRoutes);

server.listen(3000, () => {
    console.log('Servidor rodando: http://localhost:3000');
})
