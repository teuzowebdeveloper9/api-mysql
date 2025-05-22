import express from 'express';
import { variables } from './configs.js';

const app = express();

app.listen(variables.SERVE, () => {
    console.log(`servidor rodando na porta ${variables.SERVE}`)
})