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
}

body{
    font-family: 'Fira Code', monospace;
}


`;

export default GlobalStyle;
