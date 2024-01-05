import styled from "styled-components";

export const AboutMeStyled = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12vh;
    flex-direction: column;
    height: 100vh;

    #aboutme-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }

    #aboutme{
        width: 25%;
        align-self: flex-start;
        font-size: 1.2rem;
    }

    #me {
        width: 40vh;
        border-radius: 1rem;
        box-shadow: 0px 0px 3px gray;
        margin: 1rem;
    }

    @media only screen and (max-width: 800px) {

        &{
            height: auto;
        }

        .aboutmeDiv {
            padding-bottom: 20rem;
        }

        #aboutme-container{
        flex-direction: column;
        }

        #aboutme{
            width: 80%;
            align-self: center;
            font-size: 1rem;
        }

        #me {
            width: 80%;
            border-radius: 1rem;
            box-shadow: 0px 0px 3px gray;
            margin: 1rem;
            margin-bottom: 20vh;
        }
    }
    

`