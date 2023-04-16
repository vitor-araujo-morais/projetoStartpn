import React, { useState } from 'react';
import style from "../styles/home/estiloPageHome.css"
import styleLateral from "../styles/home/estiloHomePrincipal.css"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LateralImagem from "../images/lateral.png"
import Lateral from "../layouts/lateralMobile"
import Logo from "../images/logo.png"


function App(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
<img src={LateralImagem} onClick={handleShow} ></img>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title ><img src={Logo} /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <Lateral/>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
    )
}

export default App