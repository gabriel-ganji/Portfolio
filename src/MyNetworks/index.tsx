import { NetworksStyled } from "./style";


export default function Networks() {
    return (
        <NetworksStyled>
            <h2>MINHAS REDES</h2>
            <div>
                <img className="network" src='/images/instagramLogo.jpeg'/>
                <img className="network" src='/images/linkedin.png'/>
                <img className="network" src='/images/github.png'/>
                <img className="network" src='/images/gmailLogo.png'/>
                <img className="network" src='/images/whatsapp.jpg'/>
            </div>
        </NetworksStyled>
    )
}