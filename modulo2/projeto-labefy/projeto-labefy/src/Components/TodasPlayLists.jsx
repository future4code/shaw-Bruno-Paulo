import React from "react";
import axios from "axios";
import styled from "styled-components";

const MainContent = styled.div`

`
const MainContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 2em;
background-image: radial-gradient(circle at 74.18% -16.45%, #08d861 0, #08d861 50%, #08d861 100%);
border-radius: 1.5em;
width: 40vw;
height: 40vh;
padding: 2em;
input{
    width: 12em;
    height: 2em;
}
button{
    width: 5em;
    height: 2em;
}
div{
}
div:hover{
    border: 1px solid purple;
}
`

const ButtonB = styled.div`
button{
  height: 4em;
  width: 8em;
}
`

const ButtonC = styled.button`

`

class TodasPlayLists extends React.Component {
    render(){
  
   
    return (
      <MainContent>
        <MainContainer>
            {this.props.lists}
        <ButtonB>
          <ButtonC onClick={this.props.onClickGoCriarPlayList}>Criar nova playlist</ButtonC>
        </ButtonB>
        </MainContainer>
      </MainContent>
    );
  } }
  
  export default TodasPlayLists;