import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --light-cyan: hsl(193, 38%, 86%);
        --neon-green: hsl(150, 100%, 66%);
        --grayish-blue: hsl(217, 19%, 38%);
        --dark-grayish-blue: hsl(217, 19%, 24%);
        --dark-blue: hsl(218, 22%, 16%);;
    }

    body {
        font-family: 'Manrope', sans-serif;
        background-color: var(--dark-blue) ;
        display: flex;
        align-items: center;
        justify-content:center;
        min-height: 100vh;
    }
`;
