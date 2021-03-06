enum SETOR {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type person = [
    {
    nome: string, 
    salário:number, 
    setor: SETOR, 
    presencial:boolean 
    },
    {
    nome: string, 
    salário:number, 
    setor: SETOR, 
    presencial:boolean 
    },
    {
    nome: string, 
    salário:number, 
    setor: SETOR, 
    presencial:boolean 
    },
    {
    nome: string, 
    salário:number, 
    setor: SETOR, 
    presencial:boolean 
    },
    {
    nome: string, 
    salário:number, 
    setor: SETOR, 
    presencial:boolean 
    },
    {
    nome: string, 
    salário:number, 
    setor: SETOR, 
    presencial:boolean 
    },
    {
    nome: string, 
    salário:number, 
    setor: SETOR, 
    presencial:boolean 
    }
]

const arrayBase:person = [
	{ nome: "Marcos", salário: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: SETOR.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: SETOR.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: SETOR.MARKETING, presencial: true }
]

function parameter(element:any) { 
    return (element.setor === SETOR.MARKETING && element.presencial === true); 
 } 

function filter(array:any){
    const newArray:any = array.filter(parameter)
        console.log(newArray)
}

filter(arrayBase)


