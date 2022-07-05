import express, { Request, Response } from 'express'
import cors from 'cors'

// Respostas:
// 1 -
// a) Utilizei o get
// b) Colocando um path que faz sentido, por exemplo users 
// 2 -
// a) Passei via path, usei o path pelo motivo de ser mais intuitivo
// b) Coloquei um if/else com o find
// 3 -
// a) uma string com nome
// 4 -
// a) na prática nada mudou
// b) acredito que não, pois o put é mais para edição 

type User = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: UserType.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: UserType.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: UserType.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: UserType.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: UserType.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: UserType.ADMIN,
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

app.get("/users/:name", (req, res) =>{
  try {
    var parametroTratado:string = req.params.name.toUpperCase()

        if (!parametroTratado) {
          throw new Error("Parametro nulo ou inválido")
        } else {
          var newUsers = users.filter((produto) =>{
            return produto.name.toUpperCase() === parametroTratado.toUpperCase()
         }) 
        }

     res.send(newUsers)

  } catch (error) {
    res.status(422).send(error)
    console.log(error)
  }
})

app.put("/add", (req, res) =>{
  try {
    var typeTratado:UserType;
    var {id, name, email, type, age} = req.body
    if ((!id || !name || !email || !type || !age)) {
      throw new Error("Algum ou alguns parâmetros vazios ou inválidos")
    }
    if(type.toUpperCase() === "NORMAL"){
      typeTratado = UserType.NORMAL
    }else if(type.toUpperCase() === "ADMIN"){
      typeTratado = UserType.ADMIN
    }else{
      throw new Error("Type inválido no body")
    }
    users.push({id: id, name: name, email: email, type: typeTratado, age: age})

    res.send(users)

  } catch (error) {
    res.status(422).send(error)
  }
})
