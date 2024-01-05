import { styled } from "styled-components";

export const MainStyled = styled.div`

    object-fit: scale-down;
    height: calc(100vh - 2rem);
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
    scroll-snap-type: y mandatory;
    

    #quote {
        font-size: 5.5rem;
        text-align: center;
        width: 80%;
        color: #e0e0e0;
    }

    span {
        font-weight: 700;
        color: #e0e0e0;
    }

    @media only screen and (max-width: 800px){
        #quote {
            font-size: 2rem;
        }
    }

`