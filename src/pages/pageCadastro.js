import SteveJobs from "../images/steveJobs.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../layouts/cadastroUsuario.js"
import style from "../styles/estiloPageConta.css"
import React from 'react'

function App(){

    return(
        <div className="paginas">

            <img src={SteveJobs} className="steveJobs"></img>
            <div className="formulario"><Layout/></div>
      
            </div>

    )

}

export default App 