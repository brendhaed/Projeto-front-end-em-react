
import React from "react";
import Navbar from "./components/navbar/navbar";
import Article from "./components/article/article"
//import { Article } from "./components/article/article";

import "./styles/App.css";

import article1Img from './assets/imgs/article1.jpg'
import article2Img from './assets/imgs/article2.jpg'
import article3Img from './assets/imgs/article3.jpg'
import article4Img from './assets/imgs/article4.jpg'


//Componente em classe que herda a classe Component do react,
//e retorna HTML dentro do método render


//Método responsável por renderizar o conteudo HTML do nosso componente
  //<> </> -> fragment
class App extends React.Component {
  render (){
    return(
      <>
       <Navbar />

       <section id="articles">
       <Article 
       title="Designing Dashboards"
       provider="NASA" 
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto quod odit atque. Non eligendi est doloremque tenetur exercitationem placeat omnis odit obcaecati beatae animi, ipsum quod? Deserunt, architecto eligendi."
       thumbnail={article1Img}
       />
       
       <Article 
       title="Vibrant Portraits of 2020" 
       provider="SpaceNews" 
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto quod odit atque. Non eligendi est doloremque tenetur exercitationem placeat omnis odit obcaecati beatae animi, ipsum quod? Deserunt, architecto eligendi."
       thumbnail={article2Img}
       />
       
       <Article 
       title="36 Days of Malayalam type"
       provider="Spaceflight Now"
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto quod odit atque. Non eligendi est doloremque tenetur exercitationem placeat omnis odit obcaecati beatae animi, ipsum quod? Deserunt, architecto eligendi."
       thumbnail={article3Img}
       />
       <Article 
         title="Designing Dashboards"
         provider="NASA" 
         description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto quod odit atque. Non eligendi est doloremque tenetur exercitationem placeat omnis odit obcaecati beatae animi, ipsum quod? Deserunt, architecto eligendi."
         thumbnail={article4Img}
         />
      

       </section>
      </>
    
    );
    

  }
    
}

 export default App;
