import React from "react";
import axios from "axios";
import styled from "styled-components";

const MainContent = styled.div`

`

class TodasPlayLists extends React.Component {
    render(){
  
   
    return (
      <MainContent>
        <div>
            {this.props.playlists}
        </div>
      </MainContent>
    );
  } }
  
  export default TodasPlayLists;