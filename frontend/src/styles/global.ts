import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
        outline:0;
    }

    body {
        background: #F5F5F5;
        color: #000;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, hanging-punctuation, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }

`;