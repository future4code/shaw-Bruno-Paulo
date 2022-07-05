import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get("/", (req, res) =>{
    res.send(("Hello from Express"))
})
type form = {
    id: string,
    name: string,
    phone: string,
    email:string,
    website: string
    post: [{
        id: string,
        title: string,
        body: string,
        userId: string
    }]
}

const users: form[] = [{
    id: "01",
    name: "Bruno Siqueira",
    phone: "988870530",
    email: "bruno@gmail.com",
    website: "www.google.com.br",
    post: [{
        id: "01",
        title: "Comi capim e agora?",
        body: "Olá não sei o que fazer, o que recomendam?",
        userId: "01"
    }]
},
{
    id: "02",
    name: "Thais Comenalli",
    phone: "988870819",
    email: "thais@gmail.com",
    website: "www.facebook.com.br",
    post: [{
        id: "01",
        title: "Gosto de rock",
        body: "O que recomendam?",
        userId: "02"
    }]
},
{
    id: "03",
    name: "Maria José",
    phone: "988855501",
    email: "maria@gmail.com",
    website: "www.orkut.com.br",
    post: [{
        id: "01",
        title: "Chora me liga",
        body: "Curtem?",
        userId: "03"
    }]
}]

app.get("/users", (req, res) => {

    res.send(users)
})

app.get("/users/:id", (req, res) =>{
    var params: any = parseInt(req.params.id)
    res.send(users[params].post)
})


//Exerício 6: Prefiro colocar dentro do array pois fica mais fácil de acessar