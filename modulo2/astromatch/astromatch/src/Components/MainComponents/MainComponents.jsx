import React, { useEffect, useState } from "react";

const [profile, setProfile] = useState()
const [matches, setMatches] = useState()

useEffect(()=>{
    GetProfileToChoose()
},[])

useEffect(()=>{
    GetProfileToChoose()
},[]) 
//didupdate

const aluno = "bruno-siqueira-shaw"

GetProfileToChoose = () => {
axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`)
      .then(response => {
        // guarda as infos do pokemon no estado
        setProfile(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

GetMatches = () => {
axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`)
      .then(response => {
            // guarda as infos do pokemon no estado
        setMatches(response.data);
        })
        .catch(err => {
          console.log(err);
        });
      };

function MainScreen(){
    return(
        <div></div>
    )
}

export default MainScreen