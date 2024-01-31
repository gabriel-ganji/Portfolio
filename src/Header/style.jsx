import { styled } from "styled-components";

export const HeaderStyled = styled.div`

    z-index: 10;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    background-color: rgba(0, 0, 0, 0.1);
    
    .logoHeader {
        width: 10rem;
        margin-left: 8rem;
    }

    button {
        color: white;
        padding: 0.5rem;
        margin-right: 8rem;
        border-radius: 0.3rem;
        background: var(--dark);
    }

    button:hover {
        opacity: 0.9;
    }

`

export const OptionsStyled = styled.div`

    justify-content: center;
    align-items: center;
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
        /* font-size: 1rem; */
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