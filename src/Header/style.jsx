import { styled } from "styled-components";

export const HeaderStyled = styled.div`

    display: flex;
    align-items: center;
    padding: 1.5rem 8rem;
    justify-content: space-between;
    background-color: var(--black);

`

export const OptionsStyled = styled.div`

    justify-content: center;
    align-items: center;
    font-size: 1rem;
    display: flex;
    gap: 1.5rem;

    a {
        text-decoration: none;
        color: #e0e0e0;
    }

    a:hover {
        text-decoration: underline;
    }

    .curriculo {
        background-color: var(--light-main-red);
        padding: 0.5rem 1rem;
        border-radius: 8px;
        font-size: 1rem;
        border: none;
        color: #e0e0e0;
    }

    .curriculo:hover {
        text-decoration: none;
        background-color: var(--main-red);
    }

`

export const NameStyled = styled.h2`

    padding: 0;
    margin: 0;

`