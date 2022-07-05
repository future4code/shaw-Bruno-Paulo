function cpf ( cpf:string) {
    let result = true
    var param = cpf.replace( "." , "")
    var par = param.replace( "." , "")
    var p = par.replace( "." , "")
    var cleanCpf = p.replace( "-" , "")
    var newCpf = cleanCpf.split("")
    let um = Number(newCpf[0]) * 10;
    let dois = Number(newCpf[1]) * 9;
    let tres = Number(newCpf[2]) * 8;
    let quatro = Number(newCpf[3]) * 7;
    let cinco = Number(newCpf[4]) * 6;
    let seis = Number(newCpf[5]) * 5;
    let sete = Number(newCpf[6]) * 4;
    let oito = Number(newCpf[7]) * 3;
    let nove = Number(newCpf[8]) * 2;
    let dez = Number(newCpf[9])
    let onze = Number(newCpf[10])
    let somaDezPrimeiros = um + dois + tres + quatro + cinco + seis + sete + oito + nove;
    let modulo = somaDezPrimeiros % 11
    let primeiroDigito = 11 - modulo
    let um2 = Number(newCpf[0]) * 11;
    let dois2 = Number(newCpf[1]) * 10;
    let tres2 = Number(newCpf[2]) * 9;
    let quatro2 = Number(newCpf[3]) * 8;
    let cinco2 = Number(newCpf[4]) * 7;
    let seis2 = Number(newCpf[5]) * 6;
    let sete2 = Number(newCpf[6]) * 5;
    let oito2 = Number(newCpf[7]) * 4;
    let nove2 = Number(newCpf[8]) * 3;
    let dez2 = Number(newCpf[9]) * 2;
    let somaDezPrimeiros2 = um2 + dois2 + tres2 + quatro2 + cinco2 + seis2 + sete2 + oito2 + nove2 + dez2;
    let modulo2 = somaDezPrimeiros2 % 11
    let segundoDigito = 11 - modulo2
    
        if(primeiroDigito = Number(newCpf[9])){
            result = true
        }else{
            result = false
        }
        if(segundoDigito = Number(newCpf[10])){
            result = true
        }else{
            result = false
        }

    console.log(result)

}

cpf("460.877.558-00")