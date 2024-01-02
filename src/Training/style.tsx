import styled from "styled-components";

export const TrainingStyled = styled.div`
    
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .flag {
        width: 240px;
        height: 150px;
    }

    #languages-only {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 3rem 0;
    }

    #flags {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 60%;
    }

    #training-only {
        background-color: var(--soft-green);
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 3rem 0;
    }

    #training {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 2rem;
        width: 45.5%;
    }

`