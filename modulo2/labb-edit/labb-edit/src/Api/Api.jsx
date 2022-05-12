import axios from "axios";


export const useSignup = (username, email, password) =>{
    const body = {
        "username": username,
        "email": email,
        "password": password
    }
    axios.post("https://labeddit.herokuapp.com/users/signup", body)
    .then((res)=>{
        alert("cadastro realizado com sucesso")
        localStorage.setItem('token', res.data.token)
    }).catch((err)=>{
        console.log(err.response)
    })
}

export function useLogin(email, password){
    const  body = {
        "email": email,
        "password": password
    }
    axios.post("https://labeddit.herokuapp.com/users/login", body)
    .then((res)=>{
        localStorage.setItem('token', res.data.token)
        window.location.reload()
    }).catch((err)=>{
        console.log(err.response)
    })
}