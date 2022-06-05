import './hoc.scss';
import {
    useRef,
    useEffect,
    useState
    
} from 'react';
import useInView from '../../../hooks/useInView';

interface HOCProps {
    rotateTo: 'right' | 'left',
    delay?: number,
    onView?: boolean,
    leftColor?: string,
    rightColor?: string,
    className?: string
};

export default function Hoc(props: HOCProps) {
    const wrapperRef = useRef(null), wrapperInView = useInView(wrapperRef)?.isIntersecting;
    const [delayFinished, setFinishDelay] = useState(false);
    const delay = typeof props.delay === "number" ? props.delay : 50;

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if(props.onView) {
            if(wrapperInView) timeout = setTimeout(() => {
                setFinishDelay(true);
            }, delay);
        } else timeout = setTimeout(() => {
            setFinishDelay(true);
        }, delay);
        return () => clearTimeout(timeout);
    }, [delay, wrapperInView]);

    return (
        <div ref={ wrapperRef } className={ `hoc ${delayFinished ? props.rotateTo === 'right' ? 'rotateRight' : 'rotateLeft' : ''} ${props.className ? props.className : ''}` }>
            <svg width="171" height="85" viewBox="0 0 171 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M136.383 84.9115C136.383 56.7746 113.574 33.9652 85.4369 33.9652C57.3001 33.9652 34.4907 56.7746 34.4907 84.9114L0.526486 84.9114C0.526488 38.0167 38.5422 0.000970801 85.4369 0.000972851C132.332 0.000974901 170.347 38.0167 170.347 84.9115L136.383 84.9115Z" fill="url(#paint0_linear_403_1949)"/>
                <defs>
                    <linearGradient id="paint0_linear_403_1949" x1="25.9675" y1="-2.18032" x2="123.614" y2="128.493" gradientUnits="userSpaceOnUse">
                        <stop stopColor={ props.leftColor ? props.leftColor : 'var(--accent)' }/>
                        <stop offset="1" stopColor={ props.rightColor ? props.rightColor : 'var(--second-accent)' } stopOpacity="0.4"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};