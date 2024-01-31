// Sidebar.tsx

import React, { useState } from 'react';
import "./styles.css";

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className="toggle-button" onClick={toggleSidebar}>
                Entre em contato
            </button>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>

                <button className="toggle-button-exit" onClick={toggleSidebar}>
                    X
                </button>

                {isOpen && (
                    <div className="sidebar-content">
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'start' }}>
                                <h2>Venha tomar um café conosco</h2>
                                <p className='quote'>Ansiedade está a mil para marcarmos um ☕️ e construir um plano de ação para solucionar o seu problema. Envie seus dados abaixo e nós entraremos em contato com você o mais rápido possível.
                                </p>
                                <div className="contactContainer">
                                    <div id='contactUs'>
                                        <form>
                                            <div className="formContainer">
                                                <input placeholder="Nome completo"></input>
                                                <input placeholder="DDD + Número de celular de celular"></input>
                                            </div>
                                            <div id='contactUsLines' className="formContainer">
                                                <input placeholder="Email"></input>
                                                <input placeholder="Assunto"></input>
                                                <input placeholder="Mensagem" style={{ height: '5rem' }}></input>
                                            </div>
                                        </form>
                                        <button>Enviar</button>
                                    </div>
                                    <div id='networks'>
                                        <a href="" target="_blank">
                                            <img className="network" src='/images/instagramLogo.png' />
                                        </a>
                                        <a href="" target="_blank">
                                            <img className="network" src='/images/linkedin.png' />
                                        </a>
                                        <a href="" target="_blank">
                                            <img className="network" src='/images/gmailLogo.png' />
                                        </a>
                                        <a href="https://api.whatsapp.com/send/?phone=5511958279760&text=Oi" target="_blank">
                                            <img className="network" src='/images/whatsapp.png' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
};

export default Sidebar;
