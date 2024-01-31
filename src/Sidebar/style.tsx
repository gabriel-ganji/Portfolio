import { styled } from "styled-components";

export const SidebarStyled = styled.div`

    width: 0;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #333;
    overflow-x: hidden;
    transition: 0.5s;

    &.open {
        width: 250px;
    }

    .toggle-button {
        position: absolute;
        top: 10px;
        left: 10px;
        background-color: black;
        border: none;
        color: #ff0000;
        cursor: pointer;
    }

`