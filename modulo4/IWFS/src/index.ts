import express from "express"
import cors from "cors"
import { users, user, moviment } from "./data"

const app = express()

const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const day = today.toLocaleDateString()
const dayFilter = day.split("/")

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

app.get("/status", (req, res) =>{
  res.send("Connected")
})

app.get("/users", (req, res) =>{
  res.send(users)
})

app.get("/users/balance", (req, res) =>{
  try {
    var {name, cpf} = req.body;
    if ((!name || !cpf) || (typeof name != "string" || typeof cpf != "number")) {
      throw new Error("Erro no body")
    }else{
      var result = users.find((user) =>{
        return user.cpf == cpf && user.name == name
      })
      res.send(result)
    }
  } catch (error) {
    res.status(422).send(error)
  }
})

app.post("/users/new", (req, res) =>{
  try {
    var {name, cpf, bornDate} = req.body;
    var age = bornDate.split("/")
    users.map((user) =>{
      if(user.cpf == cpf){
        throw new Error("CPF já cadastrado")
      }
    })
    if((!name || !cpf || !bornDate) || (typeof name != "string" || typeof cpf != "number" || typeof bornDate != "string")){
      throw new Error("Complete ou corrija os dados do body")
    }else{
      if(Number(age[2]) >= 18){
        users.push({
          name: name,
          cpf: cpf,
          bornDate: bornDate,
          balance: 0,
          moviments:[]
        })
        res.send(users)
      }else{
        throw new Error("Idade inválida")
      }
    }
  } catch (error) {
    res.status(422).send(error)
  }
})

app.put("/users/deposit",(req, res) =>{
  try {
    var {name, cpf, value, date, description} = req.body;
    if((!name || !cpf || !value || !description) || (typeof name != "string" || typeof cpf != "number" || typeof value != "number" || typeof description != "string")){
      throw new Error("Erro no body")
    }else if(typeof date != "string"){
      throw new Error("O date precisa ser em string")
    }else if(!date){
      users.map((user) =>{
        if(user.name == name && user.cpf == cpf){
          user.balance = user.balance + value
          user.moviments?.push({        
            value: value,
            date: day,
            description: description
          })
        }
      })
      res.send(users)
    }else{
      users.map((user) =>{
        if(user.name == name && user.cpf == cpf){
          user.balance = user.balance + value
          user.moviments?.push({        
            value: value,
            date: date,
            description: description
          })
        }
      })
      res.send(users)
    }
  } catch (error) {
    res.status(422).send(error)
  }
})

app.put("/users/pay", (req, res) =>{
  try {
    var {name, cpf, value, date, description} = req.body;
    var dateFiltered = date.split("/")
    if((!name || !cpf || !value || !date || !description) || (typeof name != "string" || typeof cpf != "number" || typeof value != "number" || typeof date != "string" || typeof description != "string")){
      throw new Error("Erro no body")
    }else{
      if(Number(dateFiltered[2]) < Number(dayFilter[2])){ 
        throw new Error("A data não poder ser anterior a de hoje ano")
      }else if((Number(dateFiltered[2]) == Number(dayFilter[2])) && Number(dateFiltered[1]) < Number(dayFilter[1])){
        throw new Error("A data não poder ser anterior a de hoje mes")
      }else if((Number(dateFiltered[2]) == Number(dayFilter[2])) && Number(dateFiltered[1]) == Number(dayFilter[1]) && Number(dateFiltered[0]) == Number(dayFilter[0])){
        throw new Error("A data não poder ser anterior a de hoje dia")
      }else{
        users.map((user) =>{
          if(user.name == name && user.cpf == cpf){
            if(user.balance >= value){
              user.balance = user.balance - value
              user.moviments?.push({        
                value: value,
                date: date,
                description: description
              })
            }else{
              throw new Error("Saldo insuficiente")
            }
          }
        })
      
        res.send(users)
      }
    }
  } catch (error) {
    res.status(422).send(error)
    console.log(error)
  }
})

app.put("/users/transfer", (req, res) =>{
  try {
    var {senderName, senderCpf, recipientName, recipientCpf, value} = req.body;
    if((!senderName || !senderCpf || !recipientName || !recipientCpf || !value) || (typeof senderName != "string" || typeof senderCpf != "number" || typeof recipientName != "string" || typeof recipientCpf != "number" || typeof value != "number")){
      throw new Error("Erro no body")
    }else{
      users.map((user)=>{
        if(user.name == senderName && user.cpf == senderCpf){
          if(user.balance >= value){
            user.balance = user.balance - value
            user.moviments?.push({        
              value: value,
              date: day,
              description: `Transferência para ${recipientName}`
            })
          }else{
            throw new Error("Saldo insuficiente")
          }
        }
      })
      users.map((user)=>{
        if(user.name == recipientName && user.cpf == recipientCpf){
            user.balance = user.balance + value
            user.moviments?.push({        
              value: value,
              date: day,
              description: `Transferência recebida de ${senderName}`
            })
        }
      })
      res.send(users)
    }
  } catch (error) {
    res.status(422).send(error)
  }
})