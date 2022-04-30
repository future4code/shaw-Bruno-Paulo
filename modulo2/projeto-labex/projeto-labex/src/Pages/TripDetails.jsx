import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Details } from '../Components/lists/List';

const MainContainer = styled.div`
`
const Container = styled.div`
`

const Title = styled.p`
`


function TripDetails(){
    
    const navigate = useNavigate()
    const params = useParams()

    const GoToTrips = (id) =>{
        navigate(`admin/trips/${id}`)
    }
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
        navigate(-1)
    }

    return(
        <MainContainer>
            <button onClick={onClickReturn}>Voltar</button>
            <Details/>
        </MainContainer>
    )
}

export default TripDetails