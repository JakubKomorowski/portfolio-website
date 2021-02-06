import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar{
    width: 1.1vw;
    min-width: 15px;
}

::-webkit-scrollbar-track{
    background-color: white;
    border-left: 3px solid black;
    border-right: 3px solid black;
}

::-webkit-scrollbar-thumb{
    background-color: #e5e5e5;
    border: 3px solid black;
   
}
/* @media (max-width: 700px){
    ::-webkit-scrollbar{
        width: 0.5vw;
    min-width: 1px;
    
}
} */
}

body{
    /* font-family: 'IBM Plex Mono', monospace; */
    font-family: 'Fira Code', monospace;
}


`;

export default GlobalStyle;
