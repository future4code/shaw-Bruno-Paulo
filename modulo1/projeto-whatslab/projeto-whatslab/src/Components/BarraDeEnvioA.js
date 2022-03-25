import App from "../App";
import styled from 'styled-components'
import React from 'react';

const ContainerBottom = styled.bottom`
    display: flex;
    height: 20%;
    width: 100%;
    border: 1px solid red;
`
const CaixaUsuario = styled.input`
    border: 1px solid green;
    height: 20%;
    width: 20%;
`
const CaixaMensagem = styled.input`
    border: 1px solid yellow;
    height: 60%;
    width: 20%;
`
const BotaoEnviar = styled.button`
    border: 1px solid purple;
    height: 20%;
    width: 20%;
`


class BarraDeEnvio extends React.Component{
    render(){

    return <ContainerBottom>
                <h1>Oi CARA de ABA</h1>
                <CaixaUsuario></CaixaUsuario>
                <CaixaMensagem></CaixaMensagem>
                <BotaoEnviar></BotaoEnviar>
            </ContainerBottom>
}
}
export default BarraDeEnvio;