const Sequelize = require("sequelize");
const connection = require("../db/db");
const transacoes = connection.define("transacoes",{

    value:{
        type:Sequelize.DOUBLE,
        allowNull:false
    },
    datetime:{
        type:Sequelize.DATE,
        allowNull:false
    },
    sendto:{
        type:Sequelize.STRING,
        allowNull:false
    },
    recivefrom:{
        type:Sequelize.STRING,
        allowNull:false
    },
    currentcotation:{
        type:Sequelize.DOUBLE,
        allowNull:false
    }
});

transacoes.sync({force:false}).then(()=>{console.log("Tabela criada com sucesso")});

module.exports = transacoes;