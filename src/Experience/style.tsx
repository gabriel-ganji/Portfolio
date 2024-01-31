import { styled } from "styled-components";

export const ExpirenceStyled = styled.div`

    z-index: 1;
    width: 100%;
    height: 100vh;
    display: flex;
    color: var(--white);
    align-items: center;
    padding-bottom: 5rem;
    background-size: cover;
    flex-direction: column;
    max-height: max-content;
    justify-content: center;
    image-orientation: 90deg;
    background-color: var(--white);

    .all {
        width: 80%;
        padding: 2rem 2rem;
        display: flex;
        align-items: center;
        border-radius: 0.3rem;
        flex-direction: column;
        justify-content: center;
        background-color: var(--dark);     
    }

    #titleServices {
        width: 90%;
        display: flex;
        margin-bottom: 1rem;
        flex-direction: column;
        align-items: flex-start;
    }

    h2 {
        z-index: 1;
        font-size: 2.5rem;
        border-radius: .5rem;
        margin-bottom: 0;
    }

    #expiriences{
        gap: 1rem;
        z-index: 1;
        width: 90%;
        display: flex;
        font-size: 1rem;
        align-items: center;
        justify-content: space-between;
    }

    .icon {
        margin: 0;
        font-size: 2rem;
    }

    .services {
        width: 45%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
    }

    .work-expirience {
        gap: 0px;
        z-index: 1;
        width: 100%;
        height: 20vh;
        display: flex;
        margin-bottom: 1rem;
        background: var(--dark);
        border-bottom: 2px solid white;
    }

    .workimage {
        z-index: 1;
        width: 7rem;
        margin: 2rem;
        height: 7rem;
        align-self: center;
        border-radius: 0.3rem;
        box-shadow: 0 0 5px #747474;
    }

    .work-text {
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .work-text p {
        color: var(--gray);
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
        border-radius: 0.3rem;
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