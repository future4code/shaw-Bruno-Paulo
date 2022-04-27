import React, { useEffect } from 'react';
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const MainContainer = styled.div`
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
             console.log(response.data)
         }).catch((error)=>{
             console.log(error.response)
         })
    },[])

    return(
        <MainContainer>TripDetails</MainContainer>
    )
}

export default TripDetails