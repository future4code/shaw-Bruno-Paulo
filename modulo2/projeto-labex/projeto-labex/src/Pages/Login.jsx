import React, { useState } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MainContainer = styled.div`
`

function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassWord] = useState()
    const onChangeEmail = (event) =>{
        setEmail(event.target.value)
    }
    const navigate = useNavigate()
    const onChangePassWord = (event) =>{
        setPassWord(event.target.value)
    }

    const onClickReturn = () =>{

    }

    const onClickLogin = () =>{
        const body = {
            email: email,
            password: password
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-siqueira-shaw/login`, body)
         .then((response)=>{
            console.log('Deu Certo: ',response.data.token)
            localStorage.setItem('token', response.data.token)
            navigate('/admin/trips/list')
         }).catch((error)=>{
            console.log('Deu errado: ',error.response)
         })
    }
    return(
        <MainContainer>
            <h2>Login</h2>
            <input type="email" value={email} onChange={onChangeEmail} placeholder='E-mail'/>
            <input type="password" value={password} onChange={onChangePassWord} placeholder='Senha'/>
            <button onClick={onClickReturn}>Voltar</button>
            <button onClick={onClickLogin}>Entrar</button>
        </MainContainer>
    )
}

export default Login