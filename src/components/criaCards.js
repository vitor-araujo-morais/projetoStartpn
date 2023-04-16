import style from '../styles/criaCards.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoBanco from "../images/elementosLaterais/elemento-conta.png"
import Logomore from '../images/more.png'
import { useState } from 'react';
import ModalDefinecont from '../components/modalDefinecont'

function App (props){

    const [modal, setModal] = useState()
    
    return(
    
<>

{modal}
    <div className='card'>
        <div className='modeloPC'>
            
        <div className='container'>

<div className='row'>

   
    <div className='col'>
        <img src={LogoBanco}></img>
    </div>

    <div className='col'> 
        <div className='row'>{props.agencia}</div>
        <div className='row'> {props.banco}</div>
    </div>

    <div className='col'>
        <div className='row'>Chave Pix: {props.chavePix}</div>
    </div>

    <div className='col'></div>

    <div className='col'>Saldo: {props.saldoInicial}</div>

    <div className='col'><ModalDefinecont/> </div>
</div>



</div>

        </div>
  </div>
  </>
)
}
export default App 