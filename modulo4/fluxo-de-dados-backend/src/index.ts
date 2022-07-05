import express from "express"
import cors from "cors"
import { produtos } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

app.get("/test", (req, res) =>{
  res.status(200).send("Está funcionando")
})

app.post("/add", (req ,res) =>{
  try {
    const {name , price} = req.body
    if((!name || !price) || (typeof name != "string" || typeof price != "number") || (price < 0)){
      throw new Error("Erro no body")
    }else{
      produtos.push({"id": JSON.stringify(Math.floor(Math.random() * 100)) ,"name": name, "price": price})
      res.status(200).send(produtos)
    }

  } catch (error) {
    res.status(422).end()
  }
})

app.get("/all", (req, res) =>{
  res.send(produtos)
})

app.put("/edit-price", (req, res) =>{
  try {
    const {id, price} = req.body
    const teste = produtos.find((produto: any) =>{
      return produto.id == id
    })

    if((!price || !id) || (typeof price != "number" || typeof id != "string") || (price < 0) || (!teste)){
      throw new Error("Erro no body")
    }else{

    var newProdutos:any = produtos.map((produto:any) =>{
      if(produto.id == id){
          produto.price = price
          return produto;
      }else{
        return produto;
      }
    })
    
    res.send(newProdutos)}
    
  } catch (error) {
    res.status(422).end()
  }
})

app.delete("/delete/:id", (req, res) =>{
  try {
    var teste = produtos.filter((produto:any) =>{
      return produto.id == req.params.id
    })
    if((!req.params.id) || (!teste)){
      throw new Error("Erro no parametro")
    }else{
      var newProdutos = produtos.filter((produto:any) =>{
        return produto.id !== req.params.id
      })
    
      res.send(newProdutos)
    }
  } catch (error) {
    res.status(422).end()
  }
})