import { MainStyled } from "./style";


export default function Main() {
    return (
        <MainStyled>
            <img src="/images/backgroundMain.jpg" style={{ width: '100%', position: 'absolute', zIndex: '-1' }} />
            <div className="quote">
                <h3>Loremipsum dolor sitamet, consectetur adipiscing elit.</h3>
                <h2 id='subtitle'>Vivamus viverra miacolam lacinia luctus mauris.</h2>
            </div>
        </MainStyled>
    )
}