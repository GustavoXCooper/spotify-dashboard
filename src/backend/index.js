import express from 'express';
import helmet from 'helmet';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config()
const server = express();
const port = process.env.PORT || 4000;

// middleware
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.resolve('src', 'backend', 'public')));

// rotas
server.get('/ping', (req, res) => res.json({ pong: true }));

// inicializa
server.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}/`));
