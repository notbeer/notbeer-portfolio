import { PropsWithChildren } from "react";

import {
    Btn1,
    Btn2
} from "./buttonElements";

import useCSSVariable from "../../hooks/useCSSVariable";

import { adjustHex } from "../../utils/color";

interface Button1Props {
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
};

export function Button1(props: PropsWithChildren<Button1Props>) {
    const accent = useCSSVariable('--accent');

    return (
        <Btn1 defaultColor={ accent } shadowColor={ adjustHex(accent, 20) + '7f' } hoverColor={ adjustHex(accent, -20) } onClick={ props.onClick }>
            {props.children}
        </Btn1>
    );
};

interface Button2Props {
    style?: React.CSSProperties,
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
};

export function Button2(props: PropsWithChildren<Button2Props>) {
    return (
        <Btn2 { ...(props.style ? { style: props.style } : {}) } onClick={ props.onClick }>
            <span>{props.children}</span>
        </Btn2>
    );
};