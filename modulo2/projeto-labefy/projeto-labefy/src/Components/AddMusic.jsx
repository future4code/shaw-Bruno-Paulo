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
height: 50%;
padding: 3em;
input{
    width: 12em;
    height: 2em;
}
button{
    width: 5em;
    height: 3em;
}
`

const PlayPai = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 2em;
padding: 1em;
`

const PlayPai2 = styled.div`
font-size: 80%;
`

const ButtonDel = styled.div`

`

class AddMusic extends React.Component {
    render(){
  
   
    return (
      <MainContent>
        <MainContainer>
            <button onClick={this.props.onClickGoDetalhePlayList}>Voltar</button>
            <input type="text" value={this.props.state.name} placeholder="Nome" onChange={this.props.onChangeInputNomeMusic}/>
            <input type="text" value={this.props.state.artist} placeholder="Artista" onChange={this.props.onChangeInputArtistMusic}/>
            <input type="text" value={this.props.state.url} placeholder="Url" onChange={this.props.onChangeInputUrlMusic}/>
            <button onClick={this.props.onClickAddMusic} >criar</button>
        </MainContainer>    
      </MainContent>
    );
  } }
  
  export default AddMusic;