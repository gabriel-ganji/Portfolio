import { TrainingStyled } from "./style";

export default function Training() {
    return (
        <TrainingStyled>
            <div id='training-only'>
                <h2>FORMAÇÃO</h2>
                <div id='training'>
                    <img style={{ width: '240px' }} src="/images/eniac_logo.jpg"></img>
                    <div>
                        <p>Steve Jobs — Fundador da Apple</p>
                        <p>Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets. Chives. Corn. Endive.</p>
                        <button>Baixar TCC</button>
                    </div>
                </div>
            </div>
            <div id='languages-only'>
                <h2>IDIOMAS</h2>
                <div id='flags'>
                    <div>
                        <img className='flag' src="/images/bandeira_brasil.webp"></img>
                        <p>Português nativo</p>
                    </div>
                    <div>
                        <img className='flag' src="/images/bandeira_england.png"></img>
                        <p>Inglês - B1: Pré-intermediário</p>
                    </div>
                </div>
            </div>

        </TrainingStyled>
    )
}