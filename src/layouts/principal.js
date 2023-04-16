import style from "../styles/home/estiloPageHome.css"
import stylePrincipal from "../styles/home/estiloHomePrincipal.css"
import BotaoNovaConta from "../components/botaoNovaConta"
import Logo from "../images/logo.png"
import React, { useState } from 'react';
import FuncaoLateral from "../components/offCanvasLateral"
import Pesquisar from '../images/pesquisar.png'
import CriaCards from "../components/criaCards"
import ModalFormulario from "../components/modalFormulario"
import SetaBaixo from "../images/setaBaixo.png"


function App() {



    const [modalForm, setModalForm] = useState([])


    function ativaCards() {
        const novoConteudo = <div>ola mundoooo</div>
        setModalForm([...modalForm, novoConteudo])
    }

    function ativaModal() {

    }


    return (

        <div className="principal">

            <div className="conteudoHome">

                <header className="principalPT1">
                    <div className="titleConta">Contas</div>
                    <div className="configUsuarioDesktop">
                        <div className="elementoImagem"></div>
                        <div >Vitor Araujo</div>
                        <img src={SetaBaixo}></img>
                    </div>
                </header>
                
                <header className="displayMobile">
                    <div className="layoutsMobile">
                        <FuncaoLateral />
                        <div className='imgLogoLateral'><img src={Logo}></img></div>
                        <div className="elementoImagem"></div>
                    </div>
                </header>

                <section className="displayMobile">
                    <div className="layoutsMobile">
                        <div className="titleConta">Contas</div>
                        <img src={Pesquisar}></img>
                    </div>
                </section>


                <ModalFormulario estilo="botaologin" conteudo="Novaconta" pai="principalPT2" layout="pesquisar" />

                <div className="displayMobile"><ModalFormulario estilo="botaoMobile" conteudo="+" pai="" layout="pesquisar" /></div>



            </div>
        </div>

    )
}

export default App 