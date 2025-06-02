import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: ${props=>props.theme['gray-100']};
        color:${props=>props.theme['gray-700']};
        -webkit-font-smoothing: antialiased;
    }
    :focus{
        outline:0;
        box-shadow: 0 0 0 2px transparent;
    }

`;