import styled from "styled-components";

export const AboutMeStyled = styled.div`
    
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12vh;
    flex-direction: column;

    #aboutme-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    #aboutme{
        width: 25%;
        align-self: flex-start;
        font-size: 1.2rem;
    }

    #me {
        width: 40vh;
        border-radius: 1rem;
        box-shadow: 0px 0px 5px;
        margin: 1rem;
    }

`