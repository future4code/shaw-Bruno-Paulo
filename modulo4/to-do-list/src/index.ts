import app from "./app";
import connection from "./connection";
import {Request, Response} from "express";

const createUser = async (name:string, nickname:string, email:string) : Promise<any> =>{
    const result = await connection.raw(`
        INSERT INTO TodoListUser (id, name, nickname, email)
        VALUES ('${Math.floor(Math.random() * 100).toString()}', '${name}', '${nickname}', '${email}')
    `)
    return result[0][0]
}

const getUserByID = async (id:string) : Promise<any> =>{
    const result = await connection.raw(`
        SELECT * FROM TodoListUser WHERE id = '${id}'
    `)
    return result[0][0]
}

const editUserByID = async (id:string, name:string, nickname:string) : Promise<any> =>{
    const result = await connection.raw(`
        UPDATE TodoListUser SET name = '${name}', nickname = '${nickname}' WHERE id = '${id}'
    `)
    return result[0][0]
}

const createTask = async (title:string, description:string, limitDate:string) : Promise<any> =>{
    const result = await connection.raw(`
    INSERT INTO TodoListTask (id, title, description, limitDate)
    VALUES ('${Math.floor(Math.random() * 100).toString()}', '${title}', '${description}', '${limitDate}')
    `)
    return result[0][0]
}

const getTaskById = async (id:string) : Promise<any> =>{
    const result = await connection.raw(`
    SELECT * from TodoListTask JOIN TodoListUser ON TodoListTask.id = TodoListUser.'${id}';
    `)
    return result[0][0]
}


app.post("/user", async(req:Request, res:Response)=>{
    try {
        const {name, nickname, email} = req.body;
        if(!name || !nickname || !email){
            throw new Error("Body incompleto por favor corrija")
        }else{
            res.status(200).send(await createUser(name, nickname, email))
        }
    } catch (error: any) {
        res.status(400).send(error.sqlMessage)
    }
})

app.get("/user/:id", async(req:Request, res:Response)=>{
    try {
        const id = req.params.id;
        const teste = getUserByID(id)
        if(!teste){
            throw new Error("Id incorreto")
        }else{
            res.send(await getUserByID(id))
        }
    } catch (error:any) {
        res.status(400).send(error.sqlMessage)
    }
})

app.put("/user/edit/:id", async(req:Request, res:Response)=>{
    try {
        const id = req.params.id;
        const {name, nickname} = req.body
        if(!name || !nickname){
            throw new Error("Body incorreto por favor corrija")
        }else{
            res.send(await editUserByID(id, name, nickname))
        }
    } catch (error: any) {
        res.status(400).send(error.sqlMessage)
    }
})

app.post("/task", async(req:Request, res:Response)=>{
    try {
        const {title, description, limitDate} = req.body
        if(!title || !description || !limitDate){
            throw new Error("Body incorreto por favor corrija")
        }else{
            res.send(await createTask(title, description, limitDate))
        }
    } catch (error: any) {
        res.status(400).send(error.sqlMessage)
    }
})

app.get("/task/:id", async(req:Request, res:Response)=>{
    try {
        const id = req.params.id
        const test = getTaskById(id)
        if(!test){
            throw new Error("id incorreto")
        }else{
            res.send(await getTaskById(id))
        }
    } catch (error: any) {
        res.status(400).send(error.sqlMessage)
    }
})
