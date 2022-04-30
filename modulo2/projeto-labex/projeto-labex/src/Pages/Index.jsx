import React from 'react';
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const MainContainer = styled.div`
`

function Index(){
    const navigate = useNavigate()
    const params = useParams()

    const GoToLogin = () =>{
        navigate("/admin/trips/list")
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

    const GoToTrips = () =>{
        navigate("/trips/list")
    }
    return(
        <MainContainer>
            <h1>Index</h1>
            <button onClick={GoToTrips}>Ver viagens</button>
            <button onClick={GoToLogin}>Área adm</button>
        </MainContainer>
    )
}

export default Index