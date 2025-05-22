import express, { json } from 'express';
import { variables } from '../configs.js';
import { routes } from './routes/atendimentosRoutes.js';
import { connectDB } from './database/conect.js';
import Tables from './classes/createTableClass.js';

const connection = await connectDB();
const table = new Tables();

table.init(connection);
table.createTableAtendimentos();


const app = express();
app.use(json())
app.use(routes)

app.listen(variables.SERVE, () => {
    console.log(`servidor rodando na porta ${variables.SERVE}`)
})