import React from 'react';
import './App.css';
import { CardPequenos } from './components/Style/Style';
import CardPequenob from './components/Style/Style';
import { CardGrandes } from './components/Style/Style';
import CardGrandeb from './components/Style/Style';
import { ImagemButtons } from './components/Style/Style';
import ImagemButtonb from './components/Style/Style';
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrandes>
          <CardGrandeb 
            imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
            nome="Bruno Siqueira de Paulo" 
            descricao="Oi, eu sou o Bruno. Amo tecnologia e estou sempre procurando conhecimento de novas possibilidades na area."
          />
        </CardGrandes>
        
        <ImagemButtons>
          <ImagemButtonb
            imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
            texto="Ver mais"
          />
        </ImagemButtons>

        <CardPequenos>
          <CardPequenob
            imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvre27d9sgAylyhkFBG8qn2S_ZMEmq8jR-aw&usqp=CAU"
            nome="Email:"
            descricao="brunosp48@hotmail.com"
          />
        </CardPequenos>

        <CardPequenos>
          <CardPequenob
            imagem="https://i.pinimg.com/736x/f0/c7/b9/f0c7b9489446715cae72085a470f0ed9.jpg"
            nome="Endereço:"
            descricao="Rua aviãozinho, 123 Parque das galinhas-Sp"
          />
        </CardPequenos>

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        
        <CardGrandes>
          <CardGrandeb 
            imagem="https://pbs.twimg.com/profile_images/1615549584/logo_centauro_400x400.jpg" 
            nome="Centauro" 
            descricao="Trabalhei na area de logística, ajudando a optimizar os processos por lá" 
          />
        </CardGrandes>
        
        <CardGrandes>
          <CardGrandeb 
            imagem="https://seeklogo.com/images/D/drogaquinze-vetorizada-logo-8A3A9D189E-seeklogo.com.gif" 
            nome="Droga 15" 
            descricao="Também na area de logística, mas dessa vez trabalhando na area de checagem de materiais" 
          />
        </CardGrandes>
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButtons>
          <ImagemButtonb 
            imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
            texto="Facebook" 
          /> 
        </ImagemButtons>       

        <ImagemButtons>
          <ImagemButtonb 
            imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
            texto="Twitter" 
          />
        </ImagemButtons>      
      </div>
    </div>
  );
}

export default App;
