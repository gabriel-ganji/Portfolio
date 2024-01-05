import styled from "styled-components";

export const CoursesStyled = styled.div`   

    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    #parent-circle {
    position: relative;
    width: 20vw;
    height: 20vw;
    border: 0.4vw solid rgba(219, 219, 219, 0.4);
    border-radius: 80%;
    transform: rotate(0deg);
    transition: transform 0.7s linear;
    animation: rotate 12s infinite linear;

    .circle {
      display: block;
      position: absolute;
      width: 30%;
      height: 30%;
      margin: -8%;
      border-radius: 50%;
      top: 50%; 
      left: 50%;

      &.blue {
        background-color: #416ba9;
        transform: translate(10vw); // parent size/2
      }
      &.pink {
        background-color: #e6427a;
        transform: rotate(72deg) translate(10vw) rotate(-72deg);
      }
      &.lime {
        background-color: #cddb00;
        transform: rotate(72deg * 2) translate(10vw) rotate(-72deg * 2);
      }
      &.orange {
        background-color: #e0592a;
        transform: rotate(72deg * 3) translate(10vw) rotate(-72deg * 3);
      }
      &.teal {
        background-color: #57b6b2;
        transform: rotate(72deg * 4) translate(10vw) rotate(-72deg * 4);
      }
    }
  }


@keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

    
`