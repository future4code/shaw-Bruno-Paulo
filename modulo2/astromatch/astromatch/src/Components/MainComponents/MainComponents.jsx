import React, { useEffect, useState } from "react";
import axios from "axios";
import { ContainerInside } from "./MainComponentsStyles";
import { ContainerChoose } from "./MainComponentsStyles";
import Yes from "../../img/yes.png"
import No from "../../img/no.png"
import styled from "styled-components"
import { ContainerInformations } from "./MainComponentsStyles";



function MainScreen(){

const aluno = "bruno-siqueira-shaw"

const GetProfileToChoose = () => {
axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`)
      .then(response => {
        // guarda as infos do pokemon no estado
        setProfiles(response.data.profile);
      })
      .catch(err => {
        alert("Deu ruim getprofilechoose");
      });
  };

const GetMatches = () => {
axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`)
      .then(response => {
            // guarda as infos do pokemon no estado
        setMatches(response.data);
        })
        .catch(err => {
          alert("Deu ruim getmatches");
        });
      };

const ChooseYes = () => {
  let body = {
    id: profiles.id,
    choice: true
  }
  axios
      .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, body)
      .then(response => {
            // guarda as infos do pokemon no estado
        })
        .catch(err => {
          alert("Deu ruim chooseyes");
        });
      };
const ChooseNo = () => {
  let body = {
    id: profiles.id,
    choice: false
  }
  axios
      .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, body)
      .then(response => {
            // guarda as infos do pokemon no estado
        })
        .catch(err => {
          alert("Deu ruim chooseno");
        });
      };

const Clear = () => {
axios
      .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`)
      .then(response => {
            // guarda as infos do pokemon no estado
        alert("Limpo");
        })
        .catch(err => {
          alert("Deu ruim chooseperson");
        });
      };

  const [profiles, setProfiles] = useState({})
  const [matches, setMatches] = useState()
  const [details, setDetails] = useState(false)

const OnclickYes = () =>{
  GetProfileToChoose()
}

const OnclickNo = () =>{
  GetProfileToChoose()
}

useEffect(()=>{
    GetProfileToChoose()
},[])

const changeDetailOn = () =>{
  setDetails(true)
}

const changeDetailOff = () =>{
  setDetails(false)
}
// useEffect(()=>{
//     GetProfileToChoose()
// },[]) 
//didupdate
    return(
        <ContainerInside>
          <ContainerInformations>
            {(() => {
                  switch(details) {
                    case true:
                      return <div onMouseEnter={changeDetailOn} onMouseLeave={changeDetailOff}>
                        <h4>{profiles.name}, {profiles.age}</h4><br/>
                        <p>{profiles.bio}</p>
                      </div>;
                    default:
                      return <img src={profiles.photo} onMouseEnter={changeDetailOn} onMouseLeave={changeDetailOff}/>;
                  }
              })()}
          </ContainerInformations>
          <ContainerChoose>
            <img src={Yes} onClick={OnclickYes}/>
            <img  src={No} onClick={OnclickNo}/>
          </ContainerChoose>
        </ContainerInside>
    )
  }
  
  export default MainScreen