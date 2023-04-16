import React, { useState } from 'react';
import style from "../styles/home/estiloPageHome.css"
import stylePrincipal from "../styles/home/estiloHomePrincipal.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import BotaoModal from "../styles/botao.css"
import CriaCards from "../components/criaCards"

function App (props){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [banco, setBanco] = useState("")
    const [nomeConta, setNomeConta] = useState("")
    const [saldoInicial, setSaldoInicial] = useState("")
    const [agencia, setAgencia] = useState("")
    const [contaCorrente, setContaCorrente] = useState("")
    const [digito, setDigito] = useState("")
    const [chavePix, setchavePix] = useState("")

  const [conteudo, setConteudo] = useState([])

    const salvar = () => {if(banco != "" && nomeConta != "" && saldoInicial != "" && agencia != "" && contaCorrente != "" && digito != "" && chavePix != ""){
      const novoConteudo = <CriaCards banco={banco} nomeConta={nomeConta} saldoInicial={saldoInicial} agencia={agencia} contaCorrente={contaCorrente} digito={digito} chavePix={chavePix}/>
      setConteudo([...conteudo, novoConteudo])

      setBanco("")
      setNomeConta("")
      setSaldoInicial("")
      setAgencia("")
      setContaCorrente("")
      setDigito("")
      setchavePix("")
      
      setShow(false);
    }
     
    }

    return(
        <>
        <section className={props.pai}>
          <div className='elimina'>
        <input placeholder="Pesquisar" className={props.layout}></input> 
        </div>
       <Button className={props.estilo} onClick={handleShow}>{props.conteudo}</Button>
       
        </section>
    
        <div>{conteudo}</div>
        
    

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Nova Conta</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>

              <Form.Group className="mb-3" controlId="Banco">
                <Form.Label>Banco</Form.Label><br></br>
                

                <select className='selectBancos' placeholder='Selecione um banco' onChange={(e) => {setBanco(e.target.value);}} id="estado" name="estado">
		<option required value="Banco Itaú">Banco Itaú</option>
    <option  value="Banco Bradesco">Banco Bradesco</option>
    <option  value="Banco do Brasil">Banco do Brasil</option>
    <option  value="Nubank">Nubank</option>
    <option  value="Banco Inter">Banco Inter</option>
    <option  value="Banco Votorantim">Banco Votorantim</option>
    <option  value="C6 Bank">C6 Bank</option>
    <option  value="BTG Pactual">BTG Pactual</option>
	</select>
            
              </Form.Group>

              <Form.Group className="mb-3" controlId="Nome da Conta">
                <Form.Label>Nome da Conta</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="insira um nome"
                  autoFocus
                  onChange={(e) => {setNomeConta(e.target.value);}}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Saldo">
                <Form.Label>Saldo inicial</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="R$ 0,00"
                  autoFocus
                  onChange={(e) => {setSaldoInicial(e.target.value);}}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Agência">
                <Form.Label>Agência</Form.Label>
                <Form.Control
                  type="number"
                  autoFocus
                  onChange={(e) => {setAgencia(e.target.value);}}
                />
              </Form.Group>

              <div className='CCeDigito'><div className='b-1'>
              <Form.Group className="mb-3" controlId="Conta Corrente">
                <Form.Label>Conta Corrente</Form.Label>
                <Form.Control
                  type="number"
                  autoFocus
                  onChange={(e) => {setContaCorrente(e.target.value);}}
                />
              </Form.Group>
              </div>
              <div className='b-2'>
              <Form.Group className="mb-3" controlId="Dígito">
                <Form.Label>Dígito</Form.Label>
                <Form.Control
                  type="number"
                  autoFocus
                  onChange={(e) => {setDigito(e.target.value);}}
                />
              </Form.Group>
              </div>
              </div>

              <Form.Group className="mb-3" controlId="Chave Pix">
                <Form.Label>Chave Pix</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  onChange={(e) => {setchavePix(e.target.value);}}
                />
              </Form.Group>

              
            </Form>
          </Modal.Body>

          <Modal.Footer>
         
            <Button variant="primary" onClick={salvar}>
              Criar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default App