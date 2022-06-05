import styled from "styled-components";

export const Btn1 = styled.button<{ defaultColor: string, shadowColor: string, hoverColor: string }>`
    background: ${ props => props.defaultColor };
    border: 1px solid ${ props => props.defaultColor };
    box-shadow: 0 2px 25px ${ props => props.shadowColor };
    border-radius: 5px;
    color: #fff;
    letter-spacing: .5px;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 600;
    height: 30px;
    padding: 8px 18px;
    margin-bottom: 6px;
    line-height: 14px;
    outline: none;
    cursor: pointer;
    transition: background 0.3s, border-color 0.3s;
    &:hover {
        //background: ${ props => props.hoverColor } radial-gradient(circle, transparent 1%, ${ props => props.hoverColor } 1%) center / 15000%;
        background: ${ props => props.hoverColor };
        border-color: ${ props => props.hoverColor };
    }
    &:active {
        transform: scale(0.95);
    }
`;

export const Btn2 = styled.button`
    font-family: inherit;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.05em;
    background: linear-gradient(to right, var(--accent), var(--second-accent));
    color: ghostwhite;
    border-radius: 0.8em;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    &::before, &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
    &::before {
        content: "";
        background: #000;
        width: 120%;
        left: -10%;
        transform: skew(30deg);
        transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
    }
    &:hover::before {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }
    &:active {
        transform: scale(0.95);
    }
    span {
        position: relative;
        padding: 0.55em 1.2em 0.55em 1.05em;
        display: inline-flex;
        align-items: center;
        transition: color 0.4s;
        z-index: 10;
    }
`;