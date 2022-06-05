import * as React from "react";

export type DirectionType = {
    x: string | null;
    y: string | null;
};
  
export type XYType = {
    x: number;
    y: number;
};
  
export type ScrollDataType = {
    scrolling: boolean;
    time: number;
    direction: DirectionType;
    speed: XYType;
    totalDistance: XYType;
    relativeDistance: XYType;
    position: XYType;
};
  
export type OptionsType = {
    onScrollStart?: Function;
    onScrollEnd?: Function;
};

const SCROLL_END_DURATION = 100;

const INITIAL_DATA = {
    scrolling: false,
    time: 0,
    direction: {
        x: null,
        y: null
    },
    speed: {
        x: 0,
        y: 0
    },
    totalDistance: {
        x: 0,
        y: 0
    },
    relativeDistance: {
        x: 0,
        y: 0
    },
    position: {
        x: 0,
        y: 0
    }
};

function getPositionX() {
    return window.pageXOffset || 0;
};

function getPositionY() {
    return window.pageYOffset || 0;
};

function getDirectionX(x: number, frameValues: ScrollDataType): string | null {
    if (x > frameValues.position.x) return "right";
    if (x < frameValues.position.x) return "left";
    return null;
};

function getDirectionY(y: number, frameValues: ScrollDataType): string | null {
    if(y > frameValues.position.y) return "down";
    if(y < frameValues.position.y) return "up";
    return null;
};

function getTotalDistanceX(x: number, frameValues: ScrollDataType): number {
    return frameValues.totalDistance.x + Math.abs(x - frameValues.position.x);
};

function getTotalDistanceY(y: number, frameValues: ScrollDataType): number {
    return frameValues.totalDistance.y + Math.abs(y - frameValues.position.y);
};

function getRelativeDistanceX(x: number, startValues: ScrollDataType): number {
    return Math.abs(x - startValues.position.x);
};

function getRelativeDistanceY(y: number, startValues: ScrollDataType): number {
    return Math.abs(y - startValues.position.y);
};

export default function useScrollData(options: OptionsType = {}): ScrollDataType {
    const [data, setData] = React.useState<ScrollDataType>(INITIAL_DATA);
    const startValues = React.useRef<ScrollDataType>(INITIAL_DATA);
    const frameValues = React.useRef<ScrollDataType>(INITIAL_DATA);
    const startTimestamp = React.useRef<number | null>();
    const frameTimestamp = React.useRef<number | null>();
    const scrollTimeout = React.useRef<any>(null);
    const raf = React.useRef<any>(null);

    function frame(timestamp: number) {
        if (!startTimestamp.current) startTimestamp.current = timestamp;

        const time = timestamp - startTimestamp.current;

        const position = {
            x: getPositionX(),
            y: getPositionY()
        };

        const direction = {
            x: getDirectionX(position.x, frameValues.current),
            y: getDirectionY(position.y, frameValues.current)
        };

        const totalDistance = {
            x: getTotalDistanceX(position.x, frameValues.current),
            y: getTotalDistanceY(position.y, frameValues.current)
        };

        const relativeDistance = {
            x: getRelativeDistanceX(position.x, startValues.current),
            y: getRelativeDistanceY(position.y, startValues.current)
        };

        const timestampDiff = timestamp - (frameTimestamp.current || 0);
        const speed = {
            x: (Math.abs(frameValues.current.position.x - position.x) / Math.max(1, timestampDiff)) * 1000,
            y: (Math.abs(frameValues.current.position.y - position.y) / Math.max(1, timestampDiff)) * 1000
        };

        const nextframeValues = {
            ...frameValues.current,
            scrolling: true,
            time,
            direction,
            speed,
            totalDistance,
            relativeDistance,
            position
        };

        frameValues.current = nextframeValues;

        setData(nextframeValues);

        frameTimestamp.current = timestamp;

        raf.current = requestAnimationFrame(frame);
    };

    function clearAndSetscrollTimeout() {
        if(scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(scrollEnd, SCROLL_END_DURATION);
    };

    function onScroll() {
        if (!frameValues.current.scrolling) {
            scrollStart();
        };
        clearAndSetscrollTimeout();
    };

    function scrollStart() {
        startValues.current = { ...frameValues.current };

        raf.current = requestAnimationFrame(frame);

        if (typeof options.onScrollStart === "function") {
            options.onScrollStart();
        };
    };

    function scrollEnd() {
        frameValues.current = {
            ...frameValues.current,
            scrolling: false,
            time: 0,
            direction: {
                x: null,
                y: null
            },
            speed: {
                x: 0,
                y: 0
            },
            totalDistance: {
                x: 0,
                y: 0
            },
            relativeDistance: {
                x: 0,
                y: 0
            }
        };

        setData(frameValues.current);

        cancelAnimationFrame(raf.current);
        startTimestamp.current = null;
        frameTimestamp.current = null;

        if (typeof options.onScrollEnd === "function") {
            options.onScrollEnd();
        };
    };

    React.useEffect(() => {
        window.addEventListener("scroll", onScroll, true);

        return () => {
            clearTimeout(scrollTimeout.current);
            window.removeEventListener("scroll", onScroll, true);
        };
    }, []);

    return {
        ...data,
        time: Math.round(data.time),
        speed: {
            x: Math.round(data.speed.x),
            y: Math.round(data.speed.y)
        },
        totalDistance: {
            x: Math.round(data.totalDistance.x),
            y: Math.round(data.totalDistance.y)
        },
        relativeDistance: {
            x: Math.round(data.relativeDistance.x),
            y: Math.round(data.relativeDistance.y)
        },
        position: {
            x: Math.round(data.position.x),
            y: Math.round(data.position.y)
        }
    };
};