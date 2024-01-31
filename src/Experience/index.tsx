import { FaRobot, FaMobile, FaLaptop } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { CiCloudOn } from "react-icons/ci";
import { ExpirenceStyled } from "./style";
import { TbApi } from "react-icons/tb";



export default function Expirence() {
    return (
        <ExpirenceStyled>
            <div className='all'>
                <div id='titleServices'>
                    <h2>NOSSOS SERVIÇOS</h2>
                    <h3>Uma variedade de soluções para cada tipo de problema</h3>
                </div>
                <div id="expiriences">
                    <div className="services">
                        <div className='work-expirience'>
                            <div className="work-text">
                                <h1>SISTEMAS WEB</h1>
                                <p>Uowww... Sua ideia é sensacional, vamos transformá-la em realidade construindo um projeto do inicio ao fim, back-end e front-end!</p>
                            </div>
                        </div>
                        <div className='work-expirience'>
                            <div className="work-text">
                                <h1>APLICAÇÕES MOBILE</h1>
                                <p>Mobile é imprescindível... realizamos o desenvolvimento de aplicativos nativos intuitivos e performáticos para os mais variados públicos para a plataforma Apple (iOS) e Google (Android).</p>
                            </div>
                        </div>
                        <div className='work-expirience'>
                            <div className="work-text">
                                <h1>AUTOMAÇÕES DE PROCESSOS</h1>
                                <p>Se você possui um sistema legado e precisa automatizar seus processos, temos uma galera que adora criar robôs que trabalham 24h/dia 7d/semana.</p>
                            </div>
                        </div>
                    </div>
                    <div className="services">
                        <div className='work-expirience'>
                            <div className="work-text">
                                <h1>DESENVOLVIMENTO FRONT-END</h1>
                                <p>Utilizamos ferramentas modernas, como React, Vue e NextJs, para o desenvolvimento. Essas ferramentas permitem agilidade no desenvolvimento e manutenção e fornece performance para o usuário final</p>
                            </div>
                        </div>
                        <div className='work-expirience'>
                            <div className="work-text">
                                <h1>DESENVOLVIMENTO DE API'S</h1>
                                <p>Opaaa... Ai é nossa praia! Somos ótimos no desenvolvimento de API's rest de alta performance que são fáceis de consumir, sempre bem documentadas que te permitem escala e segurança.</p>
                            </div>
                        </div>
                        <div className='work-expirience'>
                            <div className="work-text">
                                <h1>DEVOPS E CLOUD</h1>
                                <p>Se você já possui uma aplicação e só falta colocar no ar, você está no lugar certo. Ajudamos você a preparar todo o ambiente para disponibilizar seu serviço em cloud de forma escalada para seu público.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ExpirenceStyled>
    )
}