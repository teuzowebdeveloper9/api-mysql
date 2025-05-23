import {Router }from 'express';
import atendimentoController from '../controllers/atendimentoController.js';


export const routes = Router();
routes.get("/atendimentos", (req, res) => {
    const list = atendimentoController.search();
    list.then(atendimentos => res.status(200).json(atendimentos))
        .catch(error => res.status(500).json({ error: error.message }));
});

routes.post("/atendimentos", (req, res) => {
    const newAtendimento = req.body;
    atendimentoController.create(newAtendimento)
        .then(result => res.status(201).json(result))
        .catch(error => res.status(400).json({ error: error.message }));
});

routes.put("/atendimentos/:id", (req, res) => {
    const { id } = req.params;
    const updatedAtendimento = req.body;
    atendimentoController.update(id, updatedAtendimento)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).json({ error: error.message }));
});

routes.delete("/atendimentos/:id", (req, res) => {
    const { id } = req.params;
    atendimentoController.delete(id)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).json({ error: error.message }));
});
