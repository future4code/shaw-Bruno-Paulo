import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { useEffect } from 'react';
import useForm from '../Hooks/useForm';
import axios from 'axios';
import { getList } from '../Components/lists/List';

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
button{
    height: 30px;
    width: 70px;
}
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    button{
        margin-bottom: 20px;
        height: 30px;
        width: 70px;
    }
    input{
        height: 30px;
        width: 80%;
        border-radius: 10px;
        border: 1px solid gray;
    }
    select{
        height: 30px;
        width: 80%;
        border-radius: 10px;
        border: 1px solid gray;
    }
`

function CreateTrip(){
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token === null){
            navigate('/login')
        }
    },[])

    const onClickReturn = () =>{
        navigate(-1)
    }


    const onClickCreate = (event) =>{
        event.preventDefault()
        CreateTrip()
        getList()
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
    

    const CreateTrip = () =>{
        const token = localStorage.getItem('token')
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-siqueira-shaw/trips`, form,{
            headers:{
                auth: token
                }
            })
         .then((response)=>{
            alert("Viagem criada com sucesso!")
            cleanFields()
            navigate('/')

         }).catch((error)=>{
            alert("Erro ao criar a viagem, tente novamente")
            console.log(error.response)
         })
    }

    const {form, onChange, cleanFields} = useForm({name: "", planet: "", date: "", description: "", durationInDays: ""})

    return(
        <MainContainer>
            <h2>Criar Viagem</h2>
            <Form onSubmit={onClickCreate}>
            <input type="text" required placeholder='Nome' name='name'onChange={onChange} value={form.name}/>
            <select name='planet' value={form.planet} onChange={onChange}>
                <option>Terra</option>
                <option>Marte</option>
                <option>Mercúrio</option>
                <option>Saturno</option>
            </select>
            <input type="date" name='date' onChange={onChange} value={form.date}/>
            <input type="text" placeholder='Descrição' required name='description'onChange={onChange} value={form.description}/>
            <input type="number" placeholder='Duração em dias' required name='durationInDays'onChange={onChange} value={form.durationInDays}/>
            <button>Criar</button>
            </Form>
            <button onClick={onClickReturn}>Voltar</button>
        </MainContainer>
    )
}

export default CreateTrip