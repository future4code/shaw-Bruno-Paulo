import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import BarraDeEnvio from './Components/BarraDeEnvioA';
import React from 'react';

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
`

const ContainerDentro = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 60%;
    border: 1px solid black;
`



class App extends React.Component {
  state = {
    Usuario: '',
    Mensagem: ''

  };
  render(){
    return (
      <div className="App">
        <Container>
          <h1>Oi CARA de ABA</h1>
          <ContainerDentro>
          <BarraDeEnvio></BarraDeEnvio>
          </ContainerDentro>
        </Container>
      </div>
    );
  }
}

export default App;
