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

app.post("/new-task", (req, res) =>{
  var body: any = req.body
  list.push(body)
  res.send(list)
})

app.put("/edit-task:id", (req, res) =>{
  var id = Number(req.params.id)
  if(req.query.response === "true"){
    list[id] = {...list[id], "completed": true}
  }else{
    list[id] = {...list[id], "completed": false}
  }
  res.send(list)
})

app.delete("/delete-task:id", (req, res) =>{
  var id = Number(req.params.id)
  var id2 = id + 1
  list.splice(id, id2)
  res.send(list)
})

app.get("/get-task:id", (req, res) => {
  var ids = Number(req.params.id)
  var newlist: any;
   
    newlist = list.map((item) =>{
      if(item.userId === ids){
        return item
      }else{

      }
    })
    newlist = newlist.filter(function (i:any) {
      return i != null;
    });

  res.send(newlist)
})

