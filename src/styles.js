import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Goyang';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Goyang.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    input {
      all:unset;
    }
    * {
      box-sizing:border-box;
    }
    body {
        background-color: #c4e6f599;
        font-size: 20px;
        font-family: "Goyang";
        color: rgb(38, 38, 38);
    }
    a {
      text-decoration: none;
      color:inherit;
    }
`;