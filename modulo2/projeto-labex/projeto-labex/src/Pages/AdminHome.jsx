import React from 'react';
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { RenderListPrivate } from '../Components/lists/List';
import axios from 'axios';
import { useState } from 'react';

const MainContainer = styled.div`
`

function AdminHome(){
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token === null){
            navigate('/login')
        }
    },[])

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


    const onClickReturn = () =>{
        navigate("/")
    }

    const onClickCreate = () =>{
        navigate('/admin/trips/create')
    }

    const Logout = () =>{
        localStorage.removeItem('token')
        window.location.reload()
    }

    return(
        <MainContainer>
            <button onClick={onClickReturn}>Voltar</button>
            <button onClick={onClickCreate}>Criar Viagem</button>
            <button onClick={Logout}>Logout</button>
            <RenderListPrivate/>
        </MainContainer>
    )
}

export default AdminHome