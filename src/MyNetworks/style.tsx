import styled from "styled-components";

export const NetworksStyled = styled.div`
    
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20vh;
    align-items: center;
    background-color: var(--gray);

    div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 70%;
    }

    .network {
        width: 100px;
        padding: 2rem;
        background-color: var(--white);
        border-radius: 3rem;
        border: none;

    }

    .network:hover{
        transform: scale(1.2);
    }

`