function formataCPF(cpf){
    var novoCpf='';
    for(var i = 0; i<3; i++){
        novoCpf = cpf.replace('.','');
        cpf = novoCpf;
    }
    novoCpf = cpf.replace('-','');
    return novoCpf;
}
function validaCPF(cpf){
    var tratamento = formataCPF(cpf);
    var matriz = tratamento.split('');
    var controle=10;
    var controle2=11;
    var total = 0;
    var total2 = 0;
    for(var i=0; i<matriz.length-2;i++){
        total+=matriz[i]*controle;
        controle -= 1;
    }
    for(var i=0; i<matriz.length-1;i++){
        total2+=matriz[i]*controle2;
        controle2 -= 1;
    }
    if(matriz[9] == (total*10)%11 && matriz[10] == (total2*10)%11){
        return true;
    }else{
        return false;
    }
}

module.exports = {validaCPF, formataCPF};