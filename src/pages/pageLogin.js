import SteveJobs from "../images/steveJobs.png"
import Layout from "../layouts/loginUsuario"
import style from "../styles/home/estiloPageHome.css"

function App(){
    return(
        <div className="paginas">

        <img src={SteveJobs} className="steveJobs"></img>
        <div className="formulario"><Layout/></div>
  
        </div>

    )
}

export default App