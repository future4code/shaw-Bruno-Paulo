function anagrama ( palavra:string) {
    var numberFinal:number = palavra.length;
    for (let index = 1; index < palavra.length; index++) {
        numberFinal = numberFinal * index
    }
    console.log(numberFinal)
}

anagrama("bruno")