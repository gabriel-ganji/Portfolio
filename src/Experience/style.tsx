import { styled } from "styled-components";

export const ExpirenceStyled = styled.div`

    background-color: var(--soft-green);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    #expiriences{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1.5rem;
    }

    .work-expirience {
        background-color: white;
        width: 70%;
        border-radius: 1rem;
        height: 22vh;
        box-shadow: 0 0 5px var(--dark-gray);
        display: flex;
    }

    .workimage {
        width: 7rem;
        border-radius: 10rem;
        height: 7rem;
        align-self: center;
        margin: 2rem;
    }

    .work-text {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
    }

`