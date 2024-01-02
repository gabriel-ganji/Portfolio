import { HeaderStyled } from "./style";
import {OptionsStyled} from "./style";
import { ButtonStyled } from "./style";
import {NameStyled} from "./style";

export default function Header() {
    return(
        <HeaderStyled>
            <NameStyled>Gabriel R Fernandes</NameStyled>
            <OptionsStyled>
                <a href="">Quem sou</a>
                <a href="">Formação</a>
                <a href="">Experiências</a>
                <a href="">Cursos</a>
                <a href="">Projetos</a>
                <a href="">Minhas redes</a>
                <ButtonStyled>Currículo</ButtonStyled>
            </OptionsStyled>
            
        </HeaderStyled>
    )
}