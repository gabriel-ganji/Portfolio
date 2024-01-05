import { MainStyled } from "./style";


export default function Main() {

    const imageToUse = window.innerWidth < 800 ?  '/images/renascenceModern90deg.jpg' : '/images/renascenceModern.jpg'

    return (
        <MainStyled>
            <img src={imageToUse} style={{height: 'calc(100vh - 5rem)', width: '100%', position: 'absolute', right: '0', left: '0', top: '5rem', zIndex: '-1'}} />
            <p id='quote'>“Todas as pessoas deveriam aprender a programar, pois isso ensina a pensar.”</p>
            <p><span>Steve Jobs</span> — Fundador da Apple</p>
        </MainStyled>
    )
}