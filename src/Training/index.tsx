import { TrainingStyled } from "./style";

export default function Training() {
    return (
        <TrainingStyled>
            <div id='training-only'>
                <h2>FORMAÇÃO</h2>
                <div id='training'>
                    <img src="/images/eniac_logo.jpg"></img>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <p>AGO 2020 - CURSANDO</p>
                        <p>Bacharelado em Engenharia da Computação. </p>
                        <p>Devido ao curso ter semestres independentes um do outro, acabei tendo que fazer meu TCC antes do fim do curso. Clique abaixo para baixá-lo.</p>
                        <button>Baixar TCC</button>
                    </div>
                </div>
            </div>
        </TrainingStyled>
    )
}