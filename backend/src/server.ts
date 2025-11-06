import express from 'express';
import helmet from 'helmet';
import flightsRoutes from './routes/flightsRoutes.js';
import cors from 'cors';

import { swaggerUiMiddleware, swaggerUiSetup } from './swagger';


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/api-docs', swaggerUiMiddleware, swaggerUiSetup);
server.use('/', flightsRoutes);


const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Servidor rodando: http://localhost:${PORT}`);
})
