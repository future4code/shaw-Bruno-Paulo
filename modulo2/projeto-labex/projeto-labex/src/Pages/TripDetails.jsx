import React from 'react';
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom';

const MainContainer = styled.div`
`

function TripDetails(){
    
    const navigate = useNavigate()
    const params = useParams()

    const GoToTrips = (id) =>{
        navigate(`admin/trips/${id}`)
    }

    return(
        <MainContainer>TripDetails</MainContainer>
    )
}

export default TripDetails