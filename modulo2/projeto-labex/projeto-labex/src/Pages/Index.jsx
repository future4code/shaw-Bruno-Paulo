import React from 'react';
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom';

const MainContainer = styled.div`
`

function Index(){
    const navigate = useNavigate()
    const params = useParams()

    const GoToLogin = () =>{
        navigate("/login")
    }

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