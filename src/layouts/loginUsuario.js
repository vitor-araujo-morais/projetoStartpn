import logo from "../images/logo.png"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from "react";
import BotaoLogin from "../components/botaoLogin"
import style from "../styles/estiloConta.css"

function App(){
    
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")


    return(
        <div className="conteudo-pai">
            <div className="conteudo"> 

<div className="logoImage">
    <img src={logo} className="image"></img></div>    

<div className="title">Dados de Acesso</div>

<form id="formularioLogin">

    <div className="inputs">

    <div>E-mail</div>
    <input className="inputConta" type="email" onChange={(e) => setEmail(e.target.value)}></input> 
    </div>

    <div className="inputs">

    <div>Senha</div>
    <input className="inputConta" type="password" onChange={(e) => setSenha(e.target.value)}></input>
    </div>

    </form>

<br></br>

<div className="interage">    <BotaoLogin email={email} senha={senha}/>
</div>

</div>
        </div>
        

    )
}

export default App