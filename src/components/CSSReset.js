import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`

/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*::-webkit-scrollbar{
    width: 12px;
}

*::-webkit-scrollbar-track {
  background: ${({theme}) => theme.backgroundBase};
}
*::-webkit-scrollbar-thumb {
  background-color: ${({theme}) => theme.backgroundLevel2};;
  border-radius: 20px;
}

body {
    font-family: sans-serif;
    background-color: ${({theme}) => theme.backgroundBase};

    color: ${({theme}) => theme.textColorBase};
}

/* NextJS */
html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
}

body {
    display: flex;
    flex: 1;
}

#__next {
    display: flex;
    flex: 1;
    max-width: 100vw;
    overflow: hidden
}

/* Globals */
button,
a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;

    &:hover,
    &:focus {
        opacity: .5;
    }
}

`;