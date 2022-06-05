import { PropsWithChildren } from "react";

interface Button1Props {
    color?: string
};

export function ColorText(props: PropsWithChildren<Button1Props>) {
    return (
        <span style={{ color: props.color ? props.color : 'var(--accent)' }}>{props.children}</span>
    );
};