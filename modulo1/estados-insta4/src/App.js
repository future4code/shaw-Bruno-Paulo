import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const AddPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  width: 302px;
  height: 267px;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 10px;
`

class App extends React.Component {
  state = {
    nomeUsuario: "",
    fotoUsuario: "",
    fotoPost: "",
    postInfo: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'murilo_15',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151'
      },
      {
        nomeUsuario: 'mina_gab',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/152'
      }
    ]
  };

  onClickPost = () => {
    const novaPostagem = {
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost
    };

    const novoArray = [...this.state.postInfo];
    novoArray.push(novaPostagem);

    this.setState({ postInfo: novoArray });
    console.log(novoArray)
    console.log(novaPostagem)
    console.log(this.state.postInfo)
    console.log(this.state)
    
  };

  onChangeNomeU = (event) => {
    this.setState({ nomeUsuario: event.target.value });
  };

  onChangeFotoU = (event) => {
    this.setState({ fotoUsuario: event.target.value });
  };

  onChangeFotoP = (event) => {
    this.setState({ fotoPost: event.target.value });
  };

  render() {
    const renderizaNaTela = this.state.postInfo.map((post) => {
      return (
        <Post
          nomeU={post.nomeUsuario}
          fotoU={post.fotoUsuario}
          fotoP={post.fotoPost}
        />
      );
    });
    return (
      <MainContainer>
        <AddPostContainer>
        <div>
            <label>Nome de Usuario</label>
            <input onChange={this.onChangeNomeU} value={this.state.id} />

            <label>Foto de Usuario</label>
            <input onChange={this.onChangeFotoU} value={this.state.post} />

            <label>Foto do Post</label>
            <input onChange={this.onChangeFotoP} value={this.state.imagem} />

            <button onClick={this.onClickPost}>Publicar postagem</button>
          </div>
        </AddPostContainer>
        {renderizaNaTela}
      </MainContainer>
    );
  }
}

export default App;
