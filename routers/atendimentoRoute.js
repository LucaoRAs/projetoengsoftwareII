const { Router } = require('express');
const router = Router();
const atendimentoController = require('../controllers/atendimentoController');


//get post put delete

router.get('/atendimentos', (req, resp) => {
    const listaAtendimentos = atendimentoController.buscar();
    listaAtendimentos.then(atendimentos => resp.status(200).json(atendimentos))
    .catch(error => resp.status(400).json(error.message));
});

router.post('/atendimentos', (req, resp) => {
    const novoAtendimento = req.body;
    const atendimentoCriado = atendimentoController.criar(novoAtendimento);
    atendimentoCriado
        .then(atendimento => resp.status(201).json(atendimento))
        .catch(error => resp.status(400).json(error.message));
});

router.put('/atendimentos/:id', (req, resp) => {
    const { id } = req.params;
    const atendimentoAtualizado = req.body;
    
    atendimentoController.atualizar(atendimentoAtualizado, id)
        .then(resultAtendimentoAtualizado => {
            resp.status(200).json(resultAtendimentoAtualizado);
        })
        .catch((error) => {
            resp.status(400).json(error.message);
        });
});
router.delete('/atendimentos/:id', (req, resp) => {
    const { id } = req.params;

    atendimentoController.deletar(id)
    .then(resultAtendimentoDeletado => {
        resp.status(200).json(resultAtendimentoDeletado);
    })
    .catch((error) => {
        resp.status(400).json(error.message);
    })
})

module.exports = router;