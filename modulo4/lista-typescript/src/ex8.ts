function cnh (nascimento:string, emissao:string) {
    const newNascimento = nascimento.split("/")
    const newEmissao = emissao.split("/")
    const age = 2022 - Number(newNascimento[2])
    const dueDate = 2022 - Number(newEmissao[2])
    var result: boolean = true
    if(age <= 20){
        if(dueDate >= 5){
            result = false
        }
    }else if (age > 20 && age < 50){
        if(dueDate >= 10){
            result = false
        }
    }else{
        if(dueDate >= 15){
            result = false
        }
    }
    if(result == false){
        console.log("Carteira inválida")
    }else{
        console.log("Carteira válida")
    }
}

cnh("21/03/1997", "21/05/2020")