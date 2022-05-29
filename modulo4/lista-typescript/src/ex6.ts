type clients =[
    {cliente: string, saldoTotal: number, debitos: number[] },
    {cliente: string, saldoTotal: number, debitos: number[] },
    {cliente: string, saldoTotal: number, debitos: number[] },
    {cliente: string, saldoTotal: number, debitos: number[] },
    {cliente: string, saldoTotal: number, debitos: number[] },
    {cliente: string, saldoTotal: number, debitos: number[] }
]

const mainArray:clients =
[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function newParameter(element:any) { 
    return (element.saldoTotal < 0); 
 } 

function ex6 (array: clients){
    const upArray = array.map((item:any)=>{
        const initialValue = 0;
        const sumWithInitial = item.debitos.reduce(
          (previousValue:number, currentValue:number) => previousValue + currentValue,
          initialValue
        );
        var newArray = {...item, debitos: sumWithInitial}
        var upArray = {...newArray, saldoTotal: item.saldoTotal - sumWithInitial}
        var lastArray = {...upArray, debitos: 0}
        return lastArray
    })
    const theFinalArray:any = upArray.filter(newParameter)
    console.log(theFinalArray)

}

ex6(mainArray)