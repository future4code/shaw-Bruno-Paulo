import React from "react";
import axios from "axios";
import styled from "styled-components";
import CriarPlayList from "./CriarPlayList";
import TodasPlayLists from "./TodasPlayLists";
import DetalhesPlayList from "./DetalhesPlayList";
import ReactTooltip from "react-tooltip";

const MainContent = styled.div`
`

const PlayPai = styled.div`
`

const ButtonDel = styled.div`

`

class TelaInicial extends React.Component {
    state = {
        tela: "inicial",
        playLists: []
    }

    componentDidMount(){
        this.getAllUser();
    }

    getAllUser = async() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    
        try{
            const res = await axios.get(url, {
                headers:{
                    Authorization: "bruno-siqueira-shaw"
                }
            })
            this.setState({playLists: res.data})
        } catch (err){
            alert("tchau")
        }
    }

    onClickLogin = () => {
        this.setState({tela: "todasplaylists"})
    }
    
    render(){
        const lists = this.state.playLists.map((lists) => {
            return [<PlayPai><div key={lists.id} data-tip="Clique para ver mais informações" onMouseEnter={() => this.onMouseEnterId(lists.id)}  onClick={this.onClickDetail}>{lists.name}</div><ButtonDel><button data-tip="Excluir" onMouseEnter={() => this.onMouseEnterId(lists.id)} onClick={this.onClickDelete}>X</button></ButtonDel><ReactTooltip place="left" type="light" effect="float"/></PlayPai>];
        });
        return (
        <MainContent>
                {(() => {
                    switch (this.state.tela) {
                    case "inicial":
                        return ([<div><input type="text" value="aluno@hotmail.com" />
                        <input type="password" value="123456"/>
                        <button onClick={this.onClickLogin}>Login</button></div>])
                    case "todasplaylists":
                        return <TodasPlayLists
                                state = {this.state}
                                lists = {lists}
                                />
                    case "criarplaylist":
                        return <CriarPlayList
                                state = {this.state}
                                />
                    case "detalhesplaylist":
                        return <DetalhesPlayList
                                state = {this.state}
                                />
                    default:
                        (<div></div>)
                        break;
                    }
                })()}
        </MainContent>
        );
    } }
    
    export default TelaInicial;