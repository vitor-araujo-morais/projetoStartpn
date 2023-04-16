import botao from "../styles/botao.css"
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'



function App(props){

    return(
        <>
        <Button className={props.estilo}>{props.conteudo}</Button>
        </>
        

    )
}

export default App
