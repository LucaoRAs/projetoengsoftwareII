const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: 'root',
    database: 'controle_atendimento',
});

module.exports = conexao;
