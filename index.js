const express = require("express");
const app = express();
const cryp = require("crypto-js");
const bodyParser= require("body-parser");
const connection = require("./db/db");
const cliente = require("./models/Cliente");
const func = (cliente)=>{console.log(cliente.id)};
const moedas = require("./models/moedas");


connection.authenticate().then(()=>{console.log("Conexão com o banco de dados realizada")}).catch((erro)=>{console.log(erro)});

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/",function(request,response){
    response.render("index");
});

app.post("/api/v1/wallet",function(req,resp){
    
    var nome = req.query.name;
    var cpf = req.query.cpf;
    var birthdate = req.query.birthdate;
    cliente.create({
        nome : nome,
        cpf : cpf,
        birthdate : birthdate
    }).then((cliente)=>{
        moedas.create({
            moeda:"BTC",
            nome:"Bitcoin",
            address:cliente.id,
            amount:21.56
        });
        cliente.update({
            address:cryp.MD5(cliente.id).toString() 
        },
        {
            where:{
                id:cliente.id
            }
        }
        );
        resp.send(cliente);
    });
});

app.get("/api/v1/wallet",function(req,resp){
    
    
    var cli = cliente.findAll(
        {raw : true, order:[
            ['id','DESC']
        ]}).then((cliente)=>{
            let moeda = moedas.findAll({
                where:{
                    address:cliente.id
                }
            });
            resp.send({cliente:cliente, moeda:moeda});
        });

});

app.listen(3000,function(){
    console.log("Servidor Conectado");
});
