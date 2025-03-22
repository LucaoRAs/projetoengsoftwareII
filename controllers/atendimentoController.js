const atendimentoModel = require('../models/atendimentoModel');
class AtendimentoController {
    buscar() {
        return atendimentoModel.listar();
    }
    criar(novoAtendimento) {
        return atendimentoModel.criar(novoAtendimento);
    }
    atualizar(atendimentoAtualizado, id) {
        return atendimentoModel.atualizar(atendimentoAtualizado, id);
    }
    deletar(id) {
        return atendimentoModel.deletar(id)
    }
}

module.exports = new AtendimentoController;