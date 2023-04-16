import { Link } from 'react-router-dom';
import { useState } from 'react';
import style from "../styles/botao.css"

function App(props){

 const [aviso, setAviso] = useState("")

 function defineAviso(){setAviso("Número de caracteres insuficiente ou inválido");}

 let contas = []
 let contador = 0

 let checkbox = props.checkbox % 2

 function inserirConta(){
  contas[contador] = {nome: props.nome, email: props.email, senha: props.senha};
  contador += 1}
 
if(props.nome.length <= 4 || props.senha.length <= 4 || props.email.indexOf("@") == -1 || props.senha != props.confirmasenha || checkbox == 0){

  
    return(<div><button className='botaocadastro' onClick={defineAviso}> Cadastrar </button>
    <div style={{color: "red"}} >{aviso}</div>
    </div>
    )
}
  else{return(<><Link  to="/home"><button className='botaocadastro' onClick={inserirConta}>Cadastrar</button></Link></>
  )}

}

export default App 