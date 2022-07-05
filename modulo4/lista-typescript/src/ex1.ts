function nameDate (name:string, date:string) :void{
    const newDate = date.split("/")
    console.log(`Olá me chamo ${name}, nasci no dia ${newDate[0]} do mês de ${newDate[1]} do ano de ${newDate[2]}`)
}

const typeName:string = process.argv[2];
const typeDate:string = process.argv[3]

nameDate(typeName, typeDate);