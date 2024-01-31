import { AboutUsStyled } from "./style";
import './styles.css';

export default function AboutUs() {
    return (
        <AboutUsStyled className='aboutUsDiv'>
            <img src="/images/aboutusbackground.jpg" alt="about us background" style={{height: '100vh', position: 'absolute', width: '100%', objectFit: 'cover', opacity: '0.15', zIndex: '1'}} />
            <div id='aboutUs-container'>
                <div id='aboutUs' style={{zIndex: '10'}}>  
                    <h1>Seu problema é nosso problema</h1>
                    <p>
                    Somos uma empresa de desenvolvimento de software das suas mais diversas áreas, 
                    que nasceu para facilitar a vida das empresas. Nosso foco é na solução, 
                    portanto o seu problema se torna nosso problema e não iremos parar até resolver isso.
                    Somos uma empresa de desenvolvimento de software das suas mais diversas áreas, 
                    que nasceu para facilitar a vida das empresas. Nosso foco é na solução.
                    </p>
                </div>
                <img className="aboutUsImage" src="/images/aboutUs.png" alt="Quem somos" style={{zIndex: '10'}}/>
            </div>
        </AboutUsStyled>
    )
}