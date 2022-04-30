import React, { useEffect } from "react";
import axios from "axios"; 
import { CardContainer, Title, RowContainer, ContainerPai, CardContainerPrivate, RowContainerPrivate, ContainerPaiForm, SelectForm, OptionForm, Container } from "./ListStyles";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import useForm from '../../Hooks/useForm';
import { useNavigate } from "react-router-dom";
import styed from 'styled-components'

export const getList = () =>{
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-siqueira-shaw/trips`)
     .then((response)=>{
        localStorage.setItem('List', JSON.stringify(response.data.trips))
     }).catch(()=>{
         alert("Deu ruim getlist")
     })
}


export default function RenderListPublic(){
    const dataBasePure = localStorage.getItem('List')
    const dataBaseReady = JSON.parse(dataBasePure)
    const renderedList = dataBaseReady.map((itens)=>{
        return [<CardContainer key={itens.id}>
                    <RowContainer><Title>Nome: </Title><p>{itens.name}</p></RowContainer>
                    <RowContainer><Title>Descrição:</Title><p> {itens.description}</p></RowContainer>
                    <RowContainer><Title>Planeta:</Title><p> {itens.planet}</p></RowContainer>
                    <RowContainer><Title>Duração:</Title><p> {itens.durationInDays}</p></RowContainer>
                    <RowContainer><Title>Data:</Title><p> {itens.date}</p></RowContainer>
                </CardContainer>]
    });
    return(
        <ContainerPai>
            {renderedList}
        </ContainerPai>
    )
}

export function RenderListPrivate(){
    const dataBaseListPure = localStorage.getItem('List')
    const dataBaseListReady = JSON.parse(dataBaseListPure)
    const dataBaseId = localStorage.getItem('id')
    const onEnterId = (id) =>{
        const isDataBase = dataBase => dataBase.id === id;
        const row = dataBaseListReady.filter(isDataBase);
        localStorage.setItem('Escolhido', JSON.stringify(row[0].id))
        console.log(row[0].id)
    }
    const navigate = useNavigate()
    const ItemDetailGet = () =>{
        const ids = localStorage.getItem('Escolhido')
        const id = JSON.parse(ids)
        const token = localStorage.getItem('token')
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-siqueira-shaw/trip/${id}`, {
            headers:{
                auth: token
            }
        } ).then ((response)=>{
                localStorage.setItem('itemDetail', JSON.stringify(response.data.trip))
                navigate(`/admin/trips/${id}`)
        }).catch((error)=>{
            alert("Erro na recuperação dos detalhes do item, tente novamente.")
        })
    }

    const getList = () =>{
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-siqueira-shaw/trips`)
        .then((response)=>{
           localStorage.setItem('List', JSON.stringify(response.data.trips))
        }).catch(()=>{
            alert("Deu ruim getlist")
        })
    }

    const deleteItem = () =>{
        const ids = localStorage.getItem('Escolhido')
        const id = JSON.parse(ids)
        const token = localStorage.getItem('token')
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-siqueira-shaw/trips/${id}`,{
            headers:{
                auth: token
            }
            }).then((response)=>{
                alert("Vigem excluida com sucesso")
                getList()
                window.location.reload()
            }).catch((error)=>{
                alert("Erro ao deletar a viagem, tente novamente")
            })
    }



    const itemDetail = () =>{
        ItemDetailGet()
    }
    const renderedList = dataBaseListReady.map((itens)=>{
        return [<CardContainerPrivate key={itens.id} onMouseEnter={()=>onEnterId(itens.id)}>
                    <RowContainerPrivate onClick={()=>itemDetail()}><p>{itens.name}</p></RowContainerPrivate><HighlightOffIcon onClick={()=>deleteItem()}/>
                </CardContainerPrivate>]
    });
    return(
        <ContainerPai>
            {renderedList}
        </ContainerPai>
    )
}

export function RenderOptions(){
    const {form, onChange, cleanFields} = useForm({name: "", age: "", applicationText: "", profession: "", country: "", trip: ""})
    const dataBasePure = localStorage.getItem('List')
    const dataBaseReady = JSON.parse(dataBasePure)
    const onEnterId = () =>{
        const isDataBase = dataBase => dataBase.name === form.trip;
        const id = dataBaseReady.filter(isDataBase);
        localStorage.setItem('id', id[0].id)
    }
    const renderedList = dataBaseReady.map((itens)=>{
        return <OptionForm key={itens.id}>
                    {itens.name}
                </OptionForm>
    });
    return(
        <SelectForm name='trip' value={form.trip} onChange={onChange} onMouseLeave={()=>onEnterId()}>
            {renderedList}
        </SelectForm>
    )
}

export function Details(){
    

    const itensDetailsBruto = localStorage.getItem('itemDetail')
    const itensDetails = JSON.parse(itensDetailsBruto)
    const candidates = itensDetails.candidates.map((person)=>{
        return <div key={person.id}>
                    <li>{person.name}</li>
                </div>
    })
    const approved = itensDetails.approved.map((person)=>{
        return <div key={person.id}>
                    <li>{person.name}</li>
                </div>
    })
    console.log(itensDetails)
    return(
        <div>
        <h3>{itensDetails.name}</h3>
        <Container><Title>Nome: </Title>{<p>{itensDetails.name}</p>}</Container>
        <Container><Title>Descrição: </Title><p>{itensDetails.description}</p></Container>
        <Container><Title>Planeta: </Title><p>{itensDetails.planet}</p></Container>
        <Container><Title>Duração: </Title><p>{itensDetails.durationInDays} dias</p></Container>
        <Container><Title>Data: </Title><p>{itensDetails.date}</p></Container>
        <h3>Candidatos Pendentes</h3>
            {/* {itensDetails.candidates[0].name} */}
            {candidates}
        <h3>Candidatos Aprovados</h3>
            {approved}
        </div>
    )
}