
type person2 = [
    {
    name: string, 
    email:string, 
    role: string
    },
    {
    name: string, 
    email:string, 
    role: string
    },
    {
    name: string, 
    email:string, 
    role: string
    },
    {
    name: string, 
    email:string, 
    role: string 
    },
    {
    name: string, 
    email:string, 
    role: string 
    },
    {
    name: string, 
    email:string, 
    role: string  
    }
]

const arrayUse:person2 =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function parameter2(element:any) { 
    return (element.role === "admin"); 
 } 

function filter2(array:any){
    const result:any = []
    const newArray:any = array.map((item:any)=>{
        if(item.role === "admin"){
            result.push(item.email)
        }else{

        }
    })
        console.log(result)
}

filter2(arrayUse)


