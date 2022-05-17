import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import useForm from '../Hooks/useForm';
import { RenderOptions } from '../Components/lists/List';
import axios from 'axios';
import { getList } from '../Components/lists/List';


const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
button{
    height: 30px;
    width: 70px;
}
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    button{
        margin-bottom: 20px;
        height: 30px;
        width: 70px;
    }
    input{
        height: 30px;
        width: 80%;
        border-radius: 10px;
        border: 1px solid gray;
    }
    select{
        height: 30px;
        width: 80%;
        border-radius: 10px;
        border: 1px solid gray;
    }
`

function ApplicationForms(){
    const navigate = useNavigate()

    const {form, onChange, cleanFields} = useForm({name: "", age: "", applicationText: "", profession: "", country: "", trip: ""})

    const onClickReturn = () =>{
        navigate(-1)
    }
    const onClickSend = (event) =>{
        event.preventDefault()
        applyToTrip()
        getList()
        cleanFields()
    }

    const applyToTrip = () =>{
        let ids = localStorage.getItem('id')
        console.log(ids)
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-siqueira-shaw/trips/${ids}/apply`, body)
         .then((response) =>{
            alert("foi")
         }).catch((error)=>{
             alert("Erro tente novamente")
         })
    }

    useEffect(()=>{
        const token = localStorage.getItem('token')
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-siqueira-shaw/trip/Y6Xn3LR5qHSZ4dZ4vKNW`,{
            headers:{
                auth: token
            }
        })
         .then((response)=>{
         }).catch((error)=>{
             console.log(error.response)
         })
    },[])

    return(
        <MainContainer>
            <h2>Inscreva-se para uma viagem</h2>
            <Form onSubmit={onClickSend}>
            <RenderOptions/>
            <input type="text" placeholder='Name' required name='name' value={form.name} onChange={onChange}/>
            <input type="number" placeholder='Idade' required name='age' value={form.age} onChange={onChange}/>
            <input type="text" placeholder='Texto de candidatura' required name='applicationText' value={form.applicationText} onChange={onChange}/>
            <input type="text" placeholder='Profissão' required name='profession' value={form.profession} onChange={onChange}/>
            <select name='country' value={form.country} onChange={onChange}>
                <option>Selecione um país</option>
                <option>Brasil</option>
                <option>França</option>
                <option>Espanha</option>
                <option>Portugal</option>
                <option>USA</option>
                <option>México</option>
            </select>
            <button onClick={onClickSend}>Enviar</button>
            </Form>
            <button onClick={onClickReturn}>Voltar</button>
        </MainContainer>
    )
}

export default ApplicationForms