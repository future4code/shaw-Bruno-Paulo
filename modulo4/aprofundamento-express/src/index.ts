import express from "express"
import cors from "cors"
import { list } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

app.get("/ping", (req, res) => {          
  res.send("Pong! 🏓")
})

app.get("/task:boolean", (req, res) => {
  var boolean:boolean;
  var newlist: any;
  if(req.params.boolean === "false"){
    boolean = false
  }else{
    boolean = true
  }
   

  if(boolean === false){

    newlist = list.map((item) =>{
      if(item.completed === false){
        return item
      }
    })
    newlist = newlist.filter(function (i:any) {
      return i != null;
    });
  }
  if(boolean === true){

     newlist = list.map((item) =>{
      if(item.completed === true){
        return item
      }
    })
    newlist = newlist.filter(function (i:any) {
      return i != null;
    });
  }
  res.send(newlist)
})

app.post("/newTaks", (req, res) =>{
  
})