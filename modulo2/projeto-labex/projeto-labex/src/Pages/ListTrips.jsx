import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { getList } from '../Components/lists/List'
import RenderListPublic  from '../Components/lists/List'
import axios from 'axios';

const MainContainer = styled.div`
`
const Main = styled.div`

`

const Header = styled.div`
`

function ListTrips(){
    const navigate = useNavigate()
    const onClickReturn = () =>{
        navigate(-1)
    }
    const onClickSubscribe = () =>{
        navigate('/trips/application')
    }
    useEffect(()=>{
        getList()
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

    return(
        <MainContainer>
            <Header></Header>
            <Main>
                <button onClick={onClickReturn}>Voltar</button>
                <button onClick={onClickSubscribe}>Inscrever-se</button>
                <RenderListPublic/>
            </Main>
        </MainContainer>
    )
}

export default ListTrips