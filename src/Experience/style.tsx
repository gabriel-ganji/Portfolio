import { styled } from "styled-components";

export const ExpirenceStyled = styled.div`

    z-index: 1;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("/images/angels.jpg");
    background-size: cover;
    image-orientation: 90deg;

    h2 {
        z-index: 1;
        padding: .5rem 3rem;
        border-radius: .5rem;
    }

    #expiriences{
        z-index: 1;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1.5rem;
    }

    .work-expirience {
        z-index: 1;
        background: linear-gradient(20deg, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.6) 60%);
        box-shadow: 0 0 2px #ffffff;
        width: 50%;
        border-radius: 1rem;
        height: 20vh;
        box-shadow: 0 0 2px var(--dark-gray);
        padding: 1rem 2rem;
        display: flex;
    }

    .workimage {
        z-index: 1;
        width: 7rem;
        border-radius: 1rem;
        height: 7rem;
        align-self: center;
        margin: 2rem;
        box-shadow: 0 0 5px #747474;
    }

    .work-text {
        z-index: 1;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
    }

    @media only screen and (max-width: 800px){

    &{
        height: auto;
        padding: 2rem 0;
    }


    .work-expirience {
        width: 65%;
        height: auto;
        display: flex;
        flex-direction: column;
        overflow: scroll;
    }

    .workimage {
        z-index: 1;
        width: 7rem;
        border-radius: 1rem;
        align-self: center;
        margin: 2rem;
        box-shadow: 0 0 5px #747474;
    }

    .work-text {
        z-index: 1;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
    }

    }

`