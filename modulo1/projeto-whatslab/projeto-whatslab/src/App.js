import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import React from 'react';
import Forms from './Components/Forms';
import Header from './Components/Header';

const MainContainer = styled.div`
  display: flex;
  border: 1px solid black;
  justify-content: center;
  min-height: 99.7vh;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 50%;
  justify-content: center;
  justify-items: center;
  align-items: center;
`



class App extends React.Component{
  render(){
    return (
      <MainContainer>
        <SubContainer>
          <Header></Header>
          <Forms></Forms>
        </SubContainer>
      </MainContainer>
    );
  }
}

export default App;
