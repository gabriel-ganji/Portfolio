import styled from "styled-components";

export const ProjectsStyled = styled.div`   

    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: var(--white);    
    padding: 5rem 0;
    color: var(--dark);

    .title {
        display: flex;
        width: calc(70% - 2.5rem);
        align-items: flex-start;
    }

    #allHabs {
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    img {
        height: 4.5rem;
        width: 9rem;
        border-radius: .2rem;
        animation: slowed 1s;
    }

    h1 {
        margin: 0;
        font-size: 2.5rem;
        color: var(--dark);
        margin-bottom: 0;
    }

    h3 {
        color: var(--dark-gray);
    }

    .titleSubtitle {
        width: 100%;
        display: flex;
        align-items: flex-start;
        padding-left: 15rem;
        margin-bottom: 3rem;
    }

    .titleSubtitle div {
        width: 40%;
    }

    #habilities {
        gap: 3rem;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding: 0 1.5rem;
    }

    .cardHab {
        display: flex;
        padding: 4rem;
        height: 20rem;
        font-weight: 100;
        font-size: 1.2rem;
        color: var(--dark);
        align-items: center;
        border-radius: 0.3rem;
        flex-direction: column;
        width: calc(35% - 12rem);
        min-height: max-content;
        justify-content: center;
        box-shadow: 0 0 2px var(--gray);
        background-color: rgba(255, 255, 255, 0.4);  
    }

    p {
        color: var(--dark-gray);
    }

    .logoDown {
        position: relative;
        top: 85%;
        left: 54%;
        width: 2.5rem;
        height: 1rem;
        opacity: 0.1;
    }

    @media only screen and (max-width: 800px){

        &{
            justify-content: space-around;
        }

        #habilities {
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        padding: 0;
    }

        .cardHab {
        width: 18%;
        height: 5.2rem;
        padding: 5%;

    }

    img {
        height: 100%;
        width: 100%;
        border-radius: .5rem;
    }
    }

`