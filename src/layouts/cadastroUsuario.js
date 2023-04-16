import logo from "../images/logo.png"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from "react";
import ModalTermodeUso from "../components/modalTermodeUso.js"
import BotaoCadastrar from "../components/botaoCadastrar"
import style from "../styles/estiloConta.css"

function App(){
    

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmaSenha, setConfirmaSenha] = useState("")
    const [checkbox, setCheckbox] = useState(0)


    return(
        <div className="conteudo-pai">
          <div className="conteudo"> 

        <img src={logo} className="image"></img><br></br>
        
        <div className="title">Cadastro</div>
        
        <form className="formularioCadastro">
        
        <div className="inputCadastro">
        
        <div>Nome </div>
        <input  className="inputConta" onChange={(e) => {setNome(e.target.value)}} type="text"></input> 
        </div>
        
        <div className="inputCadastro">
        
        <div>E-mail</div>
        <input className="inputConta" type="email" onChange={(e) => setEmail(e.target.value)}></input> <br></br>
        </div>
        
        <div className="inputCadastro">
        
        <div>Senha</div>
        <input className="inputConta" type="password" onChange={(e) => setSenha(e.target.value)}></input>
        </div>
        
        <div className="inputCadastro">
        
        <div>Confirme sua senha</div>
        <input className="inputConta" type="password" onChange={(e) => setConfirmaSenha(e.target.value)}></input> <br></br>
        </div>
        
        </form>
        
        <div className="termosdeuso">
        
        <b> Termos de uso e privacidade</b>
        
        <br></br><br></br>
        
        <input style={{width: "auto", border: '1px solid #476EE6'}}type="checkbox" onChange={(e) => {setCheckbox(checkbox + 1);}}></input> 
        <span> Ao clicar neste botão, eu concordo com os  termos de uso e privacidade da nossa empresa.</span><br></br>
        <br></br>
        <ModalTermodeUso/>
        
        </div>
        <br></br><br></br>
        
        <div className="botaocadastrar">
        <BotaoCadastrar nome={nome} email={email} senha={senha} confirmasenha={confirmaSenha} checkbox={checkbox}/>
        </div>
        
        
        
        <div className="interage">
        <div style={{color: "#727277"}}> Já tem uma conta?</div>
        <Link  to="/login" style={{textDecoration: "none",
        color: "#476EE6", height: "100%"}}>login</Link>
        </div>
       
        </div></div>

       
    )
}

export default App