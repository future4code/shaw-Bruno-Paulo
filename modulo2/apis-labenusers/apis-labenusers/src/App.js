import './App.css';
import React from 'react';
import styled from 'styled-components';
import TelaInicial from './Components/TelaInicial';
import Cadastros from './Components/Cadastros';
import axios from 'axios';

const headers = {
  headers: {
    Authorization: "Janaylla-Firmino-SS"
  }
};

const TelaTotal = styled.div`
display: flex;
height: 99.95vh;
justify-content: center;
align-items: center;
background-color: #d29ebc;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

const MainContainer = styled.div`
 width: 40vw;
 height: 50vh;
 background-image: radial-gradient(circle at 100% 0%, #cb3288 0, #b82d84 25%, #a4287e 50%, #902378 75%, #7e2071 100%);
 border-radius: 20px;
 box-shadow: 10px 5px 5px black;
`

class App extends React.Component {
  state = {
    tela: "inicial",
    inputEmail: "",
    inputNome: "",
    users: []
}

componentDidMount() {
  this.getAllUser();
}

getAllUser() {
  const url =
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
  axios
    .get(url, headers)
    .then((res) => {
      this.setState({
        users: res.data
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
}

postUser = () => {
  //body é criado com o valor que tem no inputName
  const body = {
    name: this.state.inputNome,
    email: this.state.inputEmail
  };
  //Aqui é onde a função de post é chamada
  //No pot passamos a url, body, e o headers
  axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, headers)
    .then((res) => {
      //Pegartodas as Users
      this.getAllUser();
      //Deixar o texto do input com um valor vazio
      this.setState({
        inputNome: ""
      });
    })
    .catch((err) => {
      //Alertar caso um erro aconteça
      alert(err.response.data.message);
    });
};

onChangeName = (e) => {
  this.setState({
    inputNome: e.target.value
  });
};

onChangeEmail = (e) => {
  this.setState({
    inputEmail: e.target.value
  });
};

onClickPost = () => {
  this.postUser()
  this.setState({inputEmail: ""})
  this.setState({inputNome: ""})
  this.setState({tela: "cadastros"})
};

  render(){
  return (
    <TelaTotal>
      <MainContainer>
        {(() => {
  
        switch (this.state.tela) {
        case 'inicial':
        return (
        <TelaInicial
        state = {this.state}
        getAllUser = {this.getAllUser}
        postUser = {this.postUser}
        onChangeName = {this.onChangeName}
        onChangeEmail = {this.onChangeEmail}
        onClickPost = {this.onClickPost}
        />
        )
        case 'cadastros':
        return (
        <Cadastros
        state = {this.state}
        getAllUser = {this.getAllUser}
        postUser = {this.postUser}
        />
        )
        default:
        return (
        <div>You are a User.</div>
        )
        }

        })()}
      </MainContainer>
    </TelaTotal>
  );}
}

export default App;
