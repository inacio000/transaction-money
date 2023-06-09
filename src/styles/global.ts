import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    :root {
        --bg: #F0F2F5;
        --text: #969CB3;
        --title: #363F5F;
        --main-shape: #FFFFFF;
        --red-color: #E62E4D;
        --green-color: #33CC95;
        --blue-color: #5429CC;
        --blue-light: #6933ff;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size: 16px (Desktop)

    html {
         @media (max-width: 1080px) {
            font-size: 93.75%; // 16 x 0.9375 = 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 16 x 0.875 = 14px
        }

        // rem = 1rem = 16px
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
    }

    body {
        background-color: var(--bg);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    [disable] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);
        
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--bg);
        padding: 3rem;
        position: relative;
        border-radius: .25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        position: filter 0.3s;

        &:hover {
            filter: brightness(0.7);
        }
    }

`;
