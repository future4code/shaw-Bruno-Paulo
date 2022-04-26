import React from "react";
import axios from "axios";
import styled from "styled-components";

const MainContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: black;
width: 100%;
`

const MainContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
gap: 2em;
background-image: radial-gradient(circle at 74.18% -16.45%, #08d861 0, #08d861 50%, #08d861 100%);
border-radius: 1.5em;
min-width: 40vw;
height: 100%;
padding: 2em;
input{
    width: 12em;
    height: 2em;
}
button{
    width: 5em;
    height: 3.3em;
}
div{
  border: 1px solid white;
  padding: 1em;
}
`

class DetalhesPlayList extends React.Component {
    render(){
  
   
    return (
      <MainContent>
        <MainContainer>
          <button onClick={this.props.onClickLogin}>Voltar</button>
          <button onClick={this.props.onClickAddMusic}>Adicionar música</button>
          {this.props.listTracks}
        </MainContainer>
      </MainContent>
    );
  } }
  
  export default DetalhesPlayList;