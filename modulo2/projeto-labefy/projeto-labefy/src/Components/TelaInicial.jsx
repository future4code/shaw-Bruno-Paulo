import React from "react";
import axios from "axios";
import styled from "styled-components";
import CriarPlayList from "./CriarPlayList";
import TodasPlayLists from "./TodasPlayLists";
import DetalhesPlayList from "./DetalhesPlayList";
import ReactTooltip from "react-tooltip";
import AddMusic from "./AddMusic";

const MainContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 2em;
background-color: black;
min-height: 99.95vh;
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

class TelaInicial extends React.Component {
    state = {
        tela: "inicial",
        playLists: [],
        inputNomePlayList: "",
        name: "",
        artist: "",
        url: "",
        currentId: "",
        detailPlaylist: [],
        currentNameDetail: []
    }

    getAllPlayLists = async() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    
        try{
            const res = await axios.get(url, {
                headers:{
                    Authorization: "bruno-siqueira-shaw"
                }
            })
            this.setState({playLists: res.data.result.list})
        } catch (err){
            alert(err.response)
        }
    }

    componentDidMount(){
        this.getAllPlayLists();
    }

    componentDidUpdate(){
        this.getPlayListById()
    }


    createAPlayList = async() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.inputNomePlayList
        }

        try{
            const res = await axios.post(url, body, {
                headers:{
                    Authorization: "bruno-siqueira-shaw"
                }
            })
                this.setState({inputNomePlayList: ""})
                this.getAllPlayLists()
                alert("Playlist criada com sucesso")
        }
        catch{
            alert("Já existe uma playlist com esse nome, tente novamente:)")
        }
    }

    addTrackToPlaylist = async() =>{
        const id = this.state.currentId
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            name: this.state.name, 
            artist: this.state.artist,
            url: this.state.url
        }
        try{
            const res = await axios.post(url, body, {
                headers:{
                    Authorization: "bruno-siqueira-shaw"
                }
            })
            alert("foi jão!")
            this.setState({name: ""})
            this.setState({artist: ""})
            this.setState({url: ""})
            this.getAllPlayLists()
        }
        catch{
            alert("Desculpe senhor")
        }
    }

    deleteAPlayList = async() => {
        const id = this.state.currentId
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        try{
            const res = await axios.delete(url, {
                headers:{
                    Authorization: "bruno-siqueira-shaw"
                }
            })
            alert("Playlist excluída")
            this.getAllPlayLists()
        }
        catch{
            alert("erro, tente novamente:)")
        }
    }

    getPlayListById = async() => {
        const id = this.state.currentId
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        try{
            const res = await axios.get(url, {
                headers:{
                    Authorization: "bruno-siqueira-shaw"
                }
            })
            this.setState({detailPlaylist: res.data.result.tracks})
        }
        catch{
        }
    }

    namePlaylist = () =>{
        var newcurrentNameDetail = this.state.playLists.filter(x => x.id == this.state.currentId)
        this.setState({currentNameDetail: newcurrentNameDetail})
    }

    onChangeInputNomePlayList = (e) =>{
        this.setState({inputNomePlayList: e.target.value})
    }

    onChangeInputNomeMusic = (e) =>{
        this.setState({name: e.target.value})
    }

    onChangeInputArtistMusic = (e) =>{
        this.setState({artist: e.target.value})
    }

    onChangeInputUrlMusic = (e) =>{
        this.setState({url: e.target.value})
    }

    onClickCriarPlayList = () => {
        this.createAPlayList()
    }

    onClickLogin = () => {
        this.setState({tela: "todasplaylists"})
        
    }

    onClickGoCriarPlayList = () => {
        this.setState({tela: "criarplaylist"})
    }

    onClickGoDetalhePlayList = () => {
        if (this.state.detailPlaylist.length == 0){
            this.setState({tela: "addmusic"})
        } else{
            this.setState({tela: "detalhesplaylist"})
        }
    }

    onMouseEnterId = (id) => {
        this.setState({currentId: id})
        this.namePlaylist()
    }
    
    onClickDelete = () => {
        this.deleteAPlayList()
    }

    onClickAddMusic= () => {
        this.setState({tela: "addmusic"})
    }

    render(){
        const lists = this.state.playLists.map((lists) => {
            return [<PlayPai><div key={lists.id} data-tip="Clique para ver mais informações" onMouseEnter={() => this.onMouseEnterId(lists.id)}  onClick={this.onClickGoDetalhePlayList}>{lists.name}</div><ButtonDel><button data-tip="Excluir" onMouseEnter={() => this.onMouseEnterId(lists.id)} onClick={this.onClickDelete}>X</button></ButtonDel><ReactTooltip place="left" type="light" effect="float"/></PlayPai>];
        });
        const listTracks = this.state.detailPlaylist.map((tracks) => {
            return [<PlayPai2 preload="auto"><div key={tracks.id}><h2>{tracks.name}</h2><h3>Nome: {tracks.name}</h3><h3>Artista: {tracks.artist}</h3><audio preload="metadata" src={tracks.url} controls/></div></PlayPai2>];
        });  
        return (
        <MainContent>
                {(() => {
                    switch (this.state.tela) {
                    case "inicial":
                        return ([<MainContent><MainContainer><input type="text" value="aluno@hotmail.com" />
                        <input type="password" value="123456"/>
                        <button onClick={this.onClickLogin}>Login</button></MainContainer></MainContent>])
                    case "todasplaylists":
                        return <TodasPlayLists
                                state = {this.state}
                                lists = {lists}
                                onClickGoCriarPlayList = {this.onClickGoCriarPlayList}
                                onClickDelete = {this.onClickDelete}
                                />
                    case "criarplaylist":
                        return <CriarPlayList
                                state = {this.state}
                                onClickCriarPlayList = {this.onClickCriarPlayList}
                                onChangeInputNomePlayList = {this.onChangeInputNomePlayList}
                                onClickLogin = {this.onClickLogin}
                                onChangeInputNomeMusic = {this.onChangeInputNomeMusic}
                                onChangeInputArtistMusic = {this.onChangeInputArtistMusic}
                                onChangeInputUrlMusic = {this.onChangeInputUrlMusic}
                                onClickGoCriarPlayList = {this.onClickGoCriarPlayList}
                                />
                    case "detalhesplaylist":
                        return <DetalhesPlayList
                                state = {this.state}
                                onClickDelete = {this.onClickDelete}
                                detailPlaylist = {this.state.detailPlaylist}
                                currentNameDetail = {this.state.currentNameDetail}
                                onClickLogin = {this.onClickLogin}
                                listTracks = {listTracks}
                                onClickGoCriarPlayList = {this.onClickGoCriarPlayList}
                                onClickAddMusic = {this.onClickAddMusic}
                                />
                    case "addmusic":
                        return <AddMusic
                                onClickLogin = {this.onClickLogin}
                                state = {this.state}
                                onChangeInputNomeMusic = {this.onChangeInputNomeMusic}
                                onChangeInputArtistMusic = {this.onChangeInputArtistMusic}
                                onChangeInputUrlMusic = {this.onChangeInputUrlMusic}
                                onClickAddMusic = {this.onClickAddMusic}
                                onClickGoDetalhePlayList = {this.onClickGoDetalhePlayList}
                                />           
                    default:
                        (<div><p>Erro de tela</p></div>)
                        break;
                    }
                })()}
        </MainContent>
        );
    } }
    
    export default TelaInicial;