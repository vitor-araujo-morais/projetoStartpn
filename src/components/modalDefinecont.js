import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import React from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Logomore from '../images/more.png'
import style from "../styles/home/estiloPageHome.css"

function App(props){
    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
               Ações
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='modalDefinecont'>

                <div>Editar conta</div>
                <div style={{color: "red"}}>Excluir conta</div>

              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

    const [modalShow, setModalShow] = React.useState(false);
    
    
    return(<div>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

<div style={{color: "black" , fontSize: 40, cursor: "pointer"}}onClick={() => setModalShow(true)}>:</div>
    </div>) 
}

export default App