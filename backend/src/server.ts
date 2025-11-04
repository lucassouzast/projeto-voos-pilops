import express from 'express';
import helmet from 'helmet';
import flightsRoutes from './routes/flightsRoutes.js';
import cors from 'cors';

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/', flightsRoutes);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Servidor rodando: http://localhost:${PORT}`);
})
