const conexao = require('../infraestrutura/conexao');
class AtendimentoModel {
    listar() {
        const sql = 'SELECT * FROM atendimentos';
        return new Promise((resolve, reject) => {
                conexao.query(sql, {}, (error, resposta) => {
                if(error) {
                    console.log('Deu erro no listar...')
                    reject(error);
                }
                console.log('Tabela listada com sucesso...')
                resolve(resposta);
            });
        }) 
    }

    criar(novoAtendimento) {
        const sql = 'INSERT INTO atendimentos SET ?';
        return new Promise((resolve, reject) => {
            conexao.query(sql, novoAtendimento, (error, resposta) => {
                if(error) {
                    console.log('Deu erro no criar...')
                    reject(error);
                }
                console.log('Tabela criada com sucesso...')
                resolve(resposta);
            });
        }) 
    }

    atualizar(atendimentoAtualizado, id) {
        const sql = 'UPDATE atendimentos SET ? where id = ?';
        return new Promise((resolve, reject) => {
            conexao.query(sql, [atendimentoAtualizado, id], (error, resposta) => {
                if(error) {
                    console.log('Deu erro no atualizar...')
                    reject(error);
                }
                console.log('Tabela atualizada com sucesso...')
                resolve(resposta);
            });
        }) 
    }

    deletar(id) {
        const sql = 'DELETE FROM atendimentos WHERE id = ?';
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, resposta) => {
                if(error) {
                    console.log('Deu erro no deletar...')
                    reject(error);
                }
                console.log('Atendimento deletado com sucesso...')
                resolve(resposta);
            });
        }) 
    }
}

module.exports = new AtendimentoModel();