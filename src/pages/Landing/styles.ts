import styled, { keyframes } from 'styled-components';

export const Logo = styled.img`
    max-width: 200px;
    height: 60px;
`;

const colorCycle = keyframes`
    0%,
    55% {
        filter: brightness(0.3) invert(1);
    }
        11%, 33% {
            filter: brightness(0.3) invert(1);
    }
`;
export const PageInfo = styled.section`
    padding: 58px 24px;
    h1 {
        font-size: 160px;
        color: #000000;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 960px;
        margin-top: 40px;
        line-height: 128px; // espaçamento entre linhas
        letter-spacing: -12.4px;
        text-align: center;

        @media (max-width: 500px) {
            font-size: 80px;
            line-height: 80px;
        }
        span {
            padding: 0 6.7px;

            filter: brightness(1) invert(0);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: ${colorCycle} 8s ease-in-out infinite;
        }

        span:nth-child(1) {
            background-image: linear-gradient(90deg, #007cf0, #00dfd8);
        }
        span:nth-child(2) {
            background-image: linear-gradient(90deg, #7928ca, #ff0080);
            animation-delay: 3.33s;
        }
        span:nth-child(3) {
            background-image: linear-gradient(90deg, #ff4d4d, #f9cb28);
            animation-delay: 6.66s;
        }
    }
    div {
        margin: 64px 0px 8px;
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        a {
            background-color: #fff;
            color: #000000;
            border-radius: 0.4rem;

            margin: 12px;
            padding: 15px 45px;
            border: 1px solid gray;

            font-size: 16px;
            font-weight: 500;
            text-decoration: none;
            cursor: pointer;
            transition: 0.2s ease-in;

            &.inlined {
                color: gray;
                &:hover {
                    border: 1px solid black;
                    color: black;
                }
            }
            &.outlined {
                background: #000000;
                color: #fff;
                border: 1px solid black;
            }
            &:hover {
                background: #fff;
                color: #000000;
            }
        }
    }
    h2 {
        color: #666666;
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
        vertical-align: baseline;
        letter-spacing: -0.4px;
        word-spacing: 0px;
        margin: 64px 0px 8px;
        padding: 0px;
        text-align: center;
        text-decoration: none solid #666666;
    }
`;
