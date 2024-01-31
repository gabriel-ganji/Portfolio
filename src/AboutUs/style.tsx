import styled from "styled-components";

export const AboutUsStyled = styled.div`
    
    width: 100%;
    height: 100vh;
    display: flex;
    color: var(--white);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--white);

    h1 {
        font-size: 2.5rem;
    }

    p {
        font-size: 1.75rem;
    }

    #aboutUs-container{
        gap: 6rem;
        width: 80%;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: var(--dark);
        justify-content: space-between;
    }

    #aboutUs{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .aboutUsImage {
        width: 50vh;
        margin: 1rem;
        filter: gray;
        border-radius: 0.3rem;
        filter: grayscale(100%);
        -webkit-filter: grayscale(100%);
    }

    @media only screen and (max-width: 800px) {

        &{
            height: auto;
        }

        .aboutUsDiv {
            padding-bottom: 20rem;
        }

        #aboutUs-container{
        flex-direction: column;
        }

        #me {
            width: 80%;
            border-radius: 0.3rem;
            box-shadow: 0px 0px 3px gray;
            margin: 1rem;
            margin-bottom: 20vh;
        }
    }
    

`