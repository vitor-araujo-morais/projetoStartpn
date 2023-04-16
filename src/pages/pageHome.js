import React from "react"
import estiloPageHome from "../styles/home/estiloPageHome.css"
import Lateral  from "../layouts/lateral"
import Principal  from "../layouts/principal"

function App(){
    return(<div className="paginas">

    <div className="lateral"><Lateral/></div>
    <div className="principal"><Principal/></div>       
    </div>)
}

export default App