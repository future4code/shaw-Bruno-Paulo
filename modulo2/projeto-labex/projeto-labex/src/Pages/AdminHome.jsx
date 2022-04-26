import React from 'react';
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom';

const MainContainer = styled.div`
`

function AdminHome(){
    const navigate = useNavigate()

    const GoToTrips = (id) =>{
        navigate("admin/trips/:id")
    }

    return(
        <MainContainer>
            AdminHome
        </MainContainer>
    )
}

export default AdminHome