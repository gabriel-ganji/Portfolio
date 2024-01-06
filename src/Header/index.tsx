import { HeaderStyled } from "./style";
import { OptionsStyled } from "./style";
import { NameStyled } from "./style";
import "./styles.css";

export default function Header() {

    console.log(window.innerWidth);

    return (
        window.innerWidth < 800 ?
            <nav>
                <div className="navbar">
                    
                    <div className="container nav-container">
                    <h3 style={{width: '200%', position: 'relative', top: '10px'}}>Gabriel R. Fernandes</h3>
                        <input className="checkbox" type="checkbox" name="" id="" />
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>
                        <div className="menu-items">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">about</a></li>
                            <li><a href="#">blogs</a></li>
                            <li><a href="#">portfolio</a></li>
                            <li><a href="#">contact</a></li>
                        </div>
                    </div>
                </div>
            </nav>
            :
            <HeaderStyled>
                <NameStyled>Gabriel R Fernandes</NameStyled>
                <OptionsStyled>
                    <a href="/#sobre-min">Quem sou</a>
                    <a href="/#experiencias">Experiências</a>
                    <a href="/#formação">Formação</a>
                    <a href="/#habilidades">Habilidades</a>
                    <a href="https://github.com/gabriel-ganji" target="_blank">Projetos</a>
                    <a href="/#minhas-redes">Minhas redes</a>
                    <a className="curriculo" href="/pdfs/curriculo.pdf" download>Currículo</a>
                </OptionsStyled>

            </HeaderStyled>
    )

}