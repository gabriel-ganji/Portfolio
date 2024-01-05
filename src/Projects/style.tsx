import styled from "styled-components";

export const ProjectsStyled = styled.div`   

    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0);

    #allHabs {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        height: 5rem;
        width: 5.5rem;
        border-radius: .5rem;
    }

    h2 {
        margin: 0;
    }

    #habilities {
        gap: 1rem;
        width: 70%;
        display: flex;
        padding: 5rem;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    .cardHab {
        width: 10rem;
        display: flex;
        height: 10rem;
        align-items: center;
        border-radius: 1rem;
        flex-direction: column;
        justify-content: center;
        box-shadow: 0 0 2px #ffffff;
        background-color: rgba(0, 0, 0, 0.4);  
        background: linear-gradient(45deg, rgba(0, 0, 0, 0.6) 40%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.6) 60%);
    }

    .cardHab:hover{
        transform: scale(1.05);
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
        font-size: 0.7rem;
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