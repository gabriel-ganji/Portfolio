import { styled } from "styled-components";

export const MainStyled = styled.div`
    background-color: var(--soft-green);
    height: calc(100vh - 5rem);
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;

    #quote {
        font-size: 5.5rem;
        text-align: center;
        width: 80%;
    }

    span {
        font-weight: 700;
    }

`