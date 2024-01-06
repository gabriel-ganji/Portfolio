import styled from "styled-components";

export const TrainingStyled = styled.div`
    
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    #training-only {
        background-color: var(--soft-green);
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 3rem 0;
        height: 50vh;
    }

    #training {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        gap: 2rem;
        width: 45.5%;
    }
    
    img {
        width: 15rem;
        border-radius: 1rem;
        box-shadow: 0px 0px 3px white;
    }

    .button {
        width: 12rem;
        height: 3rem;
        border-radius: .5rem;
        border: none;
        background-color: var(--light-main-brown);
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }

    .button:hover{
        background-color: var(--main-brown);
    }

    @media only screen and (max-width: 800px){

        &{
            justify-content: space-around;
        }

        #training-only {
            justify-content: space-around;
        }

        #training {
            flex-direction: column;
            align-items: center;
            width: 80%;
        }

        img {
            width: 70%;
            padding: 0;
        }
    }

`