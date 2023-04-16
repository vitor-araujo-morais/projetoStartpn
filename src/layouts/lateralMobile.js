import React from 'react';
import styleLateral from "../styles/home/estiloHomeLateral.css"
import style from "../styles/home/estiloPageHome.css"
import Logo from "../images/logo.png"
import elementoConta from "../images/elementosLaterais/elemento-conta.png"
import { Link } from 'react-router-dom';

function App(){
    return(<div className='conteudoLateral'>
       

        <div className='elementos'>
            <img src={elementoConta}></img>
            <div> Contas</div>
             </div>

             <div className='elementos'>
            <img src={elementoConta}></img>
            <div> Exemplo</div>
             </div>

             <div className='elementos'>
            <img src={elementoConta}></img>
            <div> Exemplo</div>
             </div>

             <div className='elementos'>
            <img src={elementoConta}></img>
            <div> Exemplo</div>
             </div>

             <Link to="/login" style={{textDecoration: "none"}}>
            <div className='elementos' id="sairLateral">   
          <img src={elementoConta}></img>
            <div > Sair</div>
              </div> </Link>


    </div>
    )
}

export default App