import { NetworksStyled } from "./style";


export default function Networks() {
    return (
        <NetworksStyled>
            <h2>MINHAS REDES</h2>
            <div>
                <a href="https://www.instagram.com/gabriel_rodriguesz_/" target="_blank">
                    <img className="network" src='/images/instagramLogo.png'/>
                </a>
                <a href="https://www.linkedin.com/in/gabriel-rodrigues-fernandes-4824011b7/" target="_blank">
                    <img className="network" src='/images/linkedin.png'/>
                </a>
                <a href="https://github.com/gabriel-ganji" target="_blank">
                    <img className="network" src='/images/github.png'/>
                </a>
                <a href="mailto:gabrielganji01011010@gmail.com" target="_blank">
                    <img className="network" src='/images/gmailLogo.png'/>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=5511958279760&text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio,%20podemos%20conversar%20?" target="_blank">
                    <img className="network" src='/images/whatsapp.png'/>
                </a>
            </div>
        </NetworksStyled>
    )
}