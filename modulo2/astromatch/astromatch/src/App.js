import './App.css';
import MainComponents from './Components/MainComponents/MainComponents'
import styled from 'styled-components'
import logo from "./img/logo.png"

const MainContainer = styled.div`
background-color: #f56a89;
height: 100vh;
display: flex;

img{
  width: 20vmax;
  margin: 2em;
}


@media screen and (min-width: 768px) and (max-width: 1023px){
  img{
    width: 21vmax;
    margin: 1.5em;
  }
}

@media screen and (max-width:767px){
  img{
    width: 22vmax;
    margin: 1em;
  }
}
`
const DivEsquerda = styled.div`
display: flex;
width: 25%;
img{
  align-self: baseline;
}
`

const DivDireita = styled.div`
display: flex;
justify-content: flex-end;
align-content: flex-start;
width: 25%;
img{
  width: 16%;
  align-self: baseline;
}
h3{
  margin-top: 2.5em;
}
`

const DivCentral = styled.div`
width: 50%;
display: flex;
justify-content: center;
align-items: center;
`

function App() {
  return (
    <MainContainer>
      <DivEsquerda>
        <img src={logo}/>
      </DivEsquerda>
      <DivCentral>
        <MainComponents/>
      </DivCentral>
      <DivDireita>
        <h3>Matches</h3>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-plain.svg" />
      </DivDireita>
    </MainContainer>
  );
}

export default App;

