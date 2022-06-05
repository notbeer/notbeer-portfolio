import React, {
    PropsWithChildren,
    useRef,
    useEffect,
    useState,
} from "react";

import useInView from "../../hooks/useInView";

interface animateProps {
    x?: string,
    y?: string,
    scale?: string,
    rotation?: string,
    opacity?: string
}

interface FadeInProps {
    onView?: boolean,
    delay?: number,
    animateFrom?: animateProps,
    animateTo?: animateProps,
    transitionDuration?: number,
    transitionFunction?: string,
    wrapperTag?: React.ComponentProps<any>,
    className?: string,
    id?: string,
    childTag?: React.ComponentProps<any>,
    childClassName?: string,
    childId?: string,
    onComplete?: () => any
};

export default function FadeIn(props: PropsWithChildren<FadeInProps>) {
    const WrapperTag = props.wrapperTag || "div";
    const wrapperRef = useRef<HTMLDivElement>(null);
    const wrapperInView = useInView(wrapperRef, { freezeOnceVisible: true })?.isIntersecting;
    const ChildTag = props.childTag;
    const [elementVisible, setElementVisibility] = useState(0);
    const delayChildren = typeof props.delay === "number" ? props.delay : 50;
    const transitionDuration = typeof props.transitionDuration === "number" ? props.transitionDuration : 1000;
    const styleFrom = {
        transform: `${props.animateFrom?.x ? `translateX(${props.animateFrom?.x}px) ` : ''}${props.animateFrom?.y ? `translateY(${props.animateFrom?.y}px) ` : ''}${props.animateFrom?.scale ? `scale(${props.animateFrom?.scale}) ` : ''}${props.animateFrom?.rotation ? `rotate(${props.animateFrom?.rotation}deg) ` : ''}`,
        opacity: props.animateFrom?.opacity ?? '1'
    };
    const styleTo = {
        ...(props.animateTo?.x || props.animateTo?.y || props.animateTo?.scale || props.animateTo?.rotation ? { transform: `${props.animateTo?.x ? `translateX(${props.animateTo?.x}px) ` : ''}${props.animateTo?.y ? `translateY(${props.animateTo?.y}px) ` : ''}${props.animateTo?.scale ? `scale(${props.animateTo?.scale}) ` : ''}${props.animateTo?.rotation ? `rotate(${props.animateTo?.rotation}deg) ` : ''}` } : {}),
        ...(props.animateTo?.opacity ? { opacity: props.animateTo?.opacity } : {})
    };

    useEffect(() => {
        setElementVisibility(0);
    }, [props.animateFrom, props.animateTo]);

    useEffect(() => {
        const count = React.Children.count(props.children);
        if(count === elementVisible) {
            const timeout = setTimeout(() => {
                if((props.onView ? wrapperInView : true) && props.onComplete) props.onComplete();
            }, transitionDuration);
            return () => clearTimeout(timeout);
        };
        const increment = count > elementVisible ? 1 : -1;
        const timeout = setTimeout(() => {
            if((props.onView ? wrapperInView : true)) setElementVisibility(elementVisible + increment);
        }, delayChildren);
        return () => clearTimeout(timeout);
    }, [React.Children.count(props.children), delayChildren, elementVisible, transitionDuration, wrapperInView]);

    return (
        <WrapperTag ref={ wrapperRef } className={ props.className } id={ props.id }>
            {React.Children.map(props.children, (child, i) => {
                return props.childTag
                ? <ChildTag
                    className={ props.childClassName }
                    id={ props.childId }
                    style={{
                        ...(elementVisible > i && (props.onView ? wrapperInView : true) ? { ...styleTo } : { ...styleFrom }),
                        transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms${props.transitionFunction ? ` ${props.transitionFunction}` : ''}`
                    }}
                >
                    {child}
                </ChildTag>
                : React.isValidElement(child)
                    ? React.cloneElement(child, {
                        style: {
                            ...(elementVisible > i && (props.onView ? wrapperInView : true) ? { ...styleTo } : { ...styleFrom }),
                            transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms${props.transitionFunction ? ` ${props.transitionFunction}` : ''}`,
                            ...child.props.style
                        }
                    })
                    : child;
            })}
        </WrapperTag>
    );
};