import { ProjectsStyled } from "./style";


export default function Projects() {
    return (
        <ProjectsStyled>
            <img src="/images/church.jpg" style={{objectFit: 'cover', position: 'absolute', height: '100vh', width: '100%', background: 'rgba(0, 0, 0, 0.2)', zIndex: '-1'}}></img>
            <h2>HABILIDADES</h2>
            <div id='allHabs' style={{zIndex: '1', fontWeight: '700'}}>
                <div id='habilities'>
                    <div className="cardHab">
                        <img src="/images/JavaScript-logo.png"></img>
                        <p>JAVASCRIPT</p>
                    </div>
                    <div className="cardHab">
                        <img src="/images/bandeira-estados-unidos.webp"></img>
                        <p>INGLÊS</p>
                    </div>
                    <div className="cardHab">
                        <img src="/images/typescriptlogo.png"></img>
                        <p>TYPESCRIPT</p>
                    </div>
                    <div className="cardHab">
                        <img src="/images/reactLogo.png"></img>
                        <p>REACT</p>
                    </div>
                    <div className="cardHab">
                        <img src="/images/NodeJs.png"></img>
                        <p>NODE</p>
                    </div>
                    <div className="cardHab">
                        <img src="/images/html5Logo.jpg"></img>
                        <p>HTML5</p>
                    </div>
                    <div className="cardHab">
                        <img src="/images/css3.jpg"></img>
                        <p>CSS3</p>
                    </div>
                    <div className="cardHab">
                        <img src="/images/sqlLogo.png"></img>
                        <p>SQL</p>
                    </div>
                    <div className="cardHab">
                        <img src="/images/jestLogo.png"></img>
                        <p>JEST</p>
                    </div>
                    <div className="cardHab">
                        <img src="/images/Git-Icon.png"></img>
                        <p>GIT</p>
                    </div>
                    <div className="cardHab">
                        <img src="/images/comunication.jpg"></img>
                        <p>COMUNICAÇÃO</p>
                    </div>
                    <div className="cardHab">
                        <img src="/images/logic.jpg"></img>
                        <p>LÓGICA</p>
                    </div>
                    <div className="cardHab">
                        <img src="/images/interpersonal.png"></img>
                        <p>INTERPESSOAL</p>
                    </div>
                    <div className="cardHab">
                        <img src="/images/adaptation.jpg"></img>
                        <p>ADAPTATIVO</p>
                    </div>
                </div>
            </div>
        </ProjectsStyled>
    )
}