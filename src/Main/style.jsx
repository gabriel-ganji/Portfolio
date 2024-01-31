import { styled } from "styled-components";

export const MainStyled = styled.div`

    width: 100%;
    height: 90vh;
    display: flex;
    color: var(--dark);
    align-items: center;
    object-fit: scale-down;
    flex-direction: column;
    justify-content: center;
    scroll-snap-type: y mandatory;
    -webkit-box-shadow: 0px 25px 0px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 25px 0px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 25px 0px 0px rgba(0,0,0,0.75);

    .quote {
        width: 100%;
        display: flex;
        padding-left: 15rem;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

    #subtitle {
        color: var(--dark-gray); 
    }

    h3 {
        width: 55%;
        font-size: 3rem;
        margin-bottom: 0;
    }

`