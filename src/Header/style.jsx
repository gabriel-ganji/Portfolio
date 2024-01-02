import { styled } from "styled-components";



export const HeaderStyled = styled.div `

    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 8rem;
    display: flex;

`

export const OptionsStyled = styled.div `

    justify-content: center;
    align-items: center;
    font-size: 1rem;
    display: flex;
    gap: 1.5rem;

    a {
        text-decoration: none;
        color: black;
    }

    a:hover {
        font-weight: 500;
    }

`

export const ButtonStyled = styled.button`

    background-color: var(--main-green);
    padding: 0.5rem 1rem;
    color: var(--white);
    border-radius: 8px;
    font-size: 1rem;
    border: none;

    &:hover {
        background-color: var(--light-main-green);
    }

`

export const NameStyled = styled.h2`

    padding: 0;
    margin: 0;

`