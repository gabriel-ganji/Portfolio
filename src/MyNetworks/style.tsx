import styled from "styled-components";

export const NetworksStyled = styled.div`
    
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
    align-items: center;

    div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 70%;
    }

    .network {
        width: 5rem;
        padding: 2rem;
        background-color: #ffffff1a;
        background: linear-gradient(45deg, rgba(255, 255, 255, 0.06) 40%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.06) 60%);
        border-radius: 1rem;
        border: none;
        box-shadow: 0px 0px 3px white;

    }

    .network:hover{
        transform: scale(1.1);
    }

    @media only screen and (max-width: 800px) {
        div {
        flex-direction: column;
        gap: 1rem;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .network {
        width: 10%;

    }

    }

`