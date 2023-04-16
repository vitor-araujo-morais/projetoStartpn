import { Link } from 'react-router-dom';
import { useState } from 'react';


function App(props){

    const [aviso, setAviso] = useState("")

 function defineAviso(){setAviso("Número de caracteres insuficiente ou inválido");}

    if(props.senha.length <= 4 || props.email.indexOf("@") == -1)
{
    return(
    <>
        <button className="botaologin" onClick={defineAviso}>Entrar</button>
        <Link to="/indefinido" style={{textDecoration: "none",color: "#476EE6", cursor: "pointer"}}>Esqueceu a Senha</Link>
        <div style={{color: "red"}} >{aviso}</div>
    </>)
}    else{
    return(
    <>
    <Link to="/home">
        <button className="botaologin">Entrar</button></Link>
        <Link to="/indefinido" style={{textDecoration: "none",color: "#476EE6", cursor: "pointer"}}>Esqueceu a Senha</Link>
    </>)
}
}

export default App