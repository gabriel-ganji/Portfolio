import { ExpirenceStyled } from "./style";

export default function Expirence() {
    return (
        <ExpirenceStyled>
            <h2>EXPERIÊNCIAS</h2>
            {/* <img src="/images/angels.jpg" style={{objectFit: 'cover', opacity: '1', position: 'absolute', height: '200vh', width: '100%', background: 'rgba(0, 0, 0, 0.2)', zIndex: '0'}}></img> */}
            <div id="expiriences">
                <div className='work-expirience' data-aos='zoom-in'>
                    <img src="/images/banckero_logo.jpg" className="workimage"></img>
                    <div className="work-text"><p>JAN 2022 - JUN 2021</p>
                        <p>Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets. Chives. Corn. Endive. Escarole, which, we swear, we’re vendors of organic produce, but if you asked us to describe what escaroles are...</p></div>
                </div>
                <div className='work-expirience' data-aos='zoom-in'>
                    <img src="/images/evermart.jpg" className="workimage"></img>
                    <div className="work-text"><p>AGO 2022 - FEV 2023</p>
                        <p>Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets. Chives. Corn. Endive. Escarole, which, we swear, we’re vendors of organic produce, but if you asked us to describe what escaroles are...</p></div>
                </div>
                <div className='work-expirience' data-aos='zoom-in'>
                    <img src="/images/sqad.jpg" className="workimage"></img>
                    <div className="work-text"><p>JUN 2023 -  ATUAL</p>
                        <p>Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets. Chives. Corn. Endive. Escarole, which, we swear, we’re vendors of organic produce, but if you asked us to describe what escaroles are...</p></div>
                </div>
            </div>
        </ExpirenceStyled>
    )
}