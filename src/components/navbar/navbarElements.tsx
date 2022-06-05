import { Link } from 'react-scroll';
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const NavbarItems = styled.ul`
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(15px);
    border-radius: 35px;
    position: fixed;
    bottom: 2.5vh;
    padding: 15px 7.1px;
    display: flex;
    z-index: 999;
    transition: bottom 1s ease-in-out;
    &:not(.active) {
        bottom: -140px;
    }
`;
export const NavbarItem = styled(Link)<{ text: string, count: number }>`
    color: #fff;
    text-align: center;
    position: relative;
    width: 65px;
    cursor: pointer;
    transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    &:not(.active):hover {
        transform: translateY(-4px);
    }
    &::before {
        content: ${({ text }) => `'${text}'`};
        text-align: center;
        font-size: 0.7rem;
        text-transform: uppercase;
        color: #fff;
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.1s;
    }
    &.active::before {
        bottom: -5px;
        opacity: 1;
    }
    i {
        font-size: 20px;
        transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    &.active > i {
        transform: translateY(-19.8px);
    }
    &.active.first ~ .indicator::before {
        border-top-right-radius: 0px;
    }
    &.active.last ~ .indicator::after {
        border-top-left-radius: 0px;
    }
    &.active ~ .indicator {
        transform: translateX(${({ count }) => count}px);
    }
`;

export const NavbarIndicator = styled.div`
    background: var(--accent);
    border-radius: 50%;
    position: absolute;
    width: 40px;
    height: 40px;
    top: -14px;
    left: 20px;
    z-index: -1;
    transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;