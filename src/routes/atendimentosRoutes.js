import {Router }from 'express';

export const routes = Router();

routes.get("/atendimentos", (req,res) => {
    res.json('listando todos os atendimentos')
})

routes.post("atendimentos", (req,res) => {
    res.json('criando um atendimento')
})

routes.put("atendimentos/:id", (req,res) => {
    const {id} = req.params
    res.json(`editar atendimento ${id}`)
})

routes.delete(`atendimentos/:id`, (req,res) => {
    const {id} = req.params
    res.json(`atendimento ${id} cancelado`)
})

routes.get("/hi", (req, res) => {
    res.json('teste oi')
})

