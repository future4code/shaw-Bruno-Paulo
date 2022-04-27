import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { useEffect } from 'react';

const MainContainer = styled.div`
`

function CreateTrip(){
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token === null){
            navigate('/login')
        }
    },[])

    return(
        <MainContainer>CreateTrip</MainContainer>
    )
}

export default CreateTrip