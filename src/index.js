import express, { json } from 'express';
import { variables } from '../configs.js';
import { routes } from './routes/atendimentosRoutes.js';

const app = express();
app.use(json())
app.use(routes)

app.listen(variables.SERVE, () => {
    console.log(`servidor rodando na porta ${variables.SERVE}`)
})