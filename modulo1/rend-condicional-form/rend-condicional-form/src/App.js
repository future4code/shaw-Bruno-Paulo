import logo from './logo.svg';
import './App.css';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import PageFinal from './Components/PageFinal';
import styled from 'styled-components';
import React from 'react';

const MainContainer = styled.div`
  min-height: 99.7vh;
`

class App extends React.Component{
  
  state = {
    pagina: 'Page1'
  }

  pag1B = () => {
    this.setState({pagina: 'Page2'});
  };

  pag2B = () => {
    this.setState({pagina: 'Page3'});
  };

  pag3B = () => {
    this.setState({pagina: 'PageFinal'});
  };
  
  render(){

    let pageContent;
    switch (this.state.pagina) {
      case 'Page1':
        
        pageContent = <Page1 onClickP={this.pag1B}></Page1>
        
        break;
      case 'Page2':

        pageContent = <Page2 onClickP={this.pag2B}></Page2>

        break;
      
      case 'Page3':

        pageContent = <Page3 onClickP={this.pag3B}></Page3>
        break;
      
      case 'PageFinal':

        pageContent = <PageFinal></PageFinal>

        break;

      default:

        <p>Página de erro (entre em contato com o desenvolvedor)</p>

        break;
    }
    
    return (
      <MainContainer>
        {pageContent}
      </MainContainer>
    );
  }
}

export default App;
