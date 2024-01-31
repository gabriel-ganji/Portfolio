import styled from "styled-components";

export const TrainingStyled = styled.div`
    
    height: 102vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--dark);
    /* font-size: .9rem; */
    color: var(--white);

    .title {
        display: flex;
        width: 40%;
        align-items: flex-start;
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
        justify-content: center;
        width: 80%;
        height: 50vh;
        gap: 2rem;
    }
    
    img {
        width: 20%;
        height: 100%;
        border-radius: 0.3rem;
        box-shadow: 0 0 2px white;
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

    #conquers {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
        width: 100%;
        height: 50%;
    }

    .cardConquers {
        height: calc(25% - 1rem);
        width: calc(50% - 4.7rem);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 0.3rem;
        margin: 10px 10px 0 0;
        padding: 2rem;
        box-shadow: 0 0 2px white;
        background: rgba(8, 8, 8, 1);
    }

    .cardConquers p {
        margin: 0rem;
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