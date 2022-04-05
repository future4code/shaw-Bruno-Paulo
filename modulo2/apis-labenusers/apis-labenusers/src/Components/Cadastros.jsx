import styled from 'styled-components'
import React from 'react';

const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 100%;
height: 100%;
border: 1px solid red;
`
const UsuariosContainer = styled.div`
background-color: #d29ebc;
`

class Cadastros extends React.Component {
    render(){
        const componentsUser = this.props.users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          });
    return (
      <MainContainer>
        <UsuariosContainer>
            <ul>{componentsUser}</ul>
        </UsuariosContainer>
        <button>VOLTAR</button>
      </MainContainer>
    );}
  }
  
  export default Cadastros;