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

app.get("/users", (req, res) => {
    const users: any[] = [{
        id: "01",
        name: "Bruno Siqueira",
        phone: "988870530",
        email: "bruno@gmail.com",
        website: "www.google.com.br"
    },
    {
        id: "02",
        name: "Thais Comenalli",
        phone: "988870819",
        email: "thais@gmail.com",
        website: "www.facebook.com.br"
    },
    {
        id: "03",
        name: "Maria José",
        phone: "988855501",
        email: "maria@gmail.com",
        website: "www.orkut.com.br"
    }]
    res.send(users)
})