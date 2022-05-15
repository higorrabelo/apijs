const Sequelize = require("sequelize");
const connection = require("../db/db");

const cliente = connection.define("Cliente",{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    cpf:{
        type:Sequelize.STRING,
        allowNull:false
    },
    birthdate:{
        type:Sequelize.STRING,
        allowNull:false
    },
    address:{
        type:Sequelize.STRING,
        allowNull:true
    }
});

cliente.sync({force:false}).then(()=>{console.log("Tabela craida")}).catch((error)=>{console.log("Erro: "+error)});

module.exports = cliente;


