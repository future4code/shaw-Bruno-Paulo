enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type result = {
	name: string,
	age: number,
	gender: GENERO,
	grade?: number
}

function streaming (name:string, age:number, gender:GENERO, grade?: number){

	const finalResult :result = 
	{
		name: name,
		age: age,
		gender: gender,
		grade: grade
	}

	if(grade === undefined){
		console.log(`nome: ${name}, anoLancamento: ${age}, genero: ${gender}`)
	} else{
		console.log(`nome: ${name}, anoLancamento: ${age}, genero: ${gender}, pontuacao: ${grade}`)
	}
}

streaming("Final Battle", 1997, GENERO.ACAO, 10)