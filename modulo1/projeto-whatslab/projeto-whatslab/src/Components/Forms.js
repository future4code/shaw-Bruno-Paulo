import styled from 'styled-components';
import React from 'react';
import App from '../App';
import img from '../img/background.jpg'
import img2 from '../img/seta.png'

const ContainerFC = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-image: url(${img});
    background-size: 200px;
`

const MainContainerF = styled.div`
height: 10%;
border-radius: 20px;
display: flex;
justify-content: space-around;
align-items: center;
background-color: #fefefe;
` 
const Usuario = styled.input`
    width: 20%;
`

const Mensagem = styled.input`
    width: 50%;
`
const Botao = styled.button`
width: 60px;
height: 40px;
background-color: #03877a;
border-radius:20px;
`
const ConversaContainer = styled.div`
  height: 90%;
  margin: 2%;
`

class Forms extends React.Component{
    state = {
        InputUsuario: '',
        InputMensagem: '',
        conversa: [
            {
                usuario: '',
                mensagem: ''
            }
        ]
    }

    adicionaMensagem = () => {
        // Colocamos em uma variavel o objeto que representa uma nova pessoa
        const novaConversa = {
          // Puxamos da variavel de estado "valorInputPessoa" o nome dela
          usuario: this.state.InputUsuario,
          // Puxamos da variavel de estado "valorInputEmail" o email dela
          mensagem: this.state.InputMensagem
        };
    
        // Copia array de pessoas e adiciona uma pessoa no final
        const novoConversas = [...this.state.conversa, novaConversa];
    
        // Define o estado "pessoas" como a variavel "novoPessoas"
        this.setState({ conversa: novoConversas });
      };

    onChangeInputUsuario = (event) => {
    // Essa função é chamada toda vez que algo é digitado
    // no input de nome
    
    // Define o estado "valorInputPessoa" como o
    // valor atual do input, que vem do event
        this.setState({ InputUsuario: event.target.value });
    };

    onChangeInputMensagem = (event) => {
        // Essa função é chamada toda vez que algo é digitado
        // no input de email
    
        // Define o estado "valorInputEmail" como o
        // valor atual do input, que vem do event
        this.setState({ InputMensagem: event.target.value });
    };
      
    render(){

        const TelaRenderizada = this.state.conversa.map((conversa) => {
            return (
              <div>
                <h4>{conversa.usuario}:</h4>
                <p>
                    {conversa.mensagem}
                </p>
              </div>
            );
          });

        return(
           <ContainerFC> 
            <ConversaContainer>{TelaRenderizada}</ConversaContainer>
            <MainContainerF>
                <Usuario value={this.state.InputUsuario} onChange={this.onChangeInputUsuario} placeholder='Usuário'></Usuario>
                <Mensagem value={this.state.InputMensagem} onChange={this.onChangeInputMensagem} placeholder='Mensagem'></Mensagem>
                <Botao onClick={this.adicionaMensagem}>Enviar</Botao>
            </MainContainerF>
           </ContainerFC> 
        );
    }
}

export default Forms;