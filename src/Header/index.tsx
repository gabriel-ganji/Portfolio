import Sidebar from "../Sidebar";
import { HeaderStyled } from "./style";
import { OptionsStyled } from "./style";
import { NameStyled } from "./style";
import "./styles.css";

export default function Header() {

    return (
        window.innerWidth < 800 ?
            <nav>
                <div className="navbar">
                    
                    <div className="container nav-container">
                    <h3 style={{width: '200%', position: 'relative', top: '10px'}}></h3>
                        <input className="checkbox" type="checkbox" name="" id="" />
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>
                        <div className="menu-items">
                            <Sidebar />
                            {/* <button>Entrar em contato</button> */}
                        </div>
                    </div>
                </div>
            </nav>
            :
            <HeaderStyled>
                <img className='logoHeader' alt='Logo' src='/images/sqadLogoPreta.png' />
                <Sidebar />
            </HeaderStyled>
    )

}