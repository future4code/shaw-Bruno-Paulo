import React from 'react';
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

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