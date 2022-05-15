const connection = require("../db/db");
const Sequelize = require("sequelize");

const moedas = connection.define("moedas",{
    moeda:{
        type:Sequelize.STRING,
        allowNull:false
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    address:{
        type:Sequelize.STRING,
        allowNull:false
    },
    amount:{
        type:Sequelize.DOUBLE,
        allowNull:false
    }
});

moedas.sync({force:false}).then(()=>console.log("Tabela Criada"));

module.exports = moedas;