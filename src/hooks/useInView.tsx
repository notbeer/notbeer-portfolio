import {
    RefObject,
    useEffect,
    useState
} from 'react';

interface Options extends IntersectionObserverInit {
    freezeOnceVisible?: boolean
};

export default function useInView(ref: RefObject<Element> | Element, { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false }: Options = {}): IntersectionObserverEntry | undefined {
    const [entry, setEntry] = useState<IntersectionObserverEntry>();

    const frozen = entry?.isIntersecting && freezeOnceVisible;

    const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
        setEntry(entry);
    };

    useEffect(() => {
        const node = ref instanceof Element ? ref : ref?.current;
        const hasIOSupport = !!window.IntersectionObserver;

        if(!hasIOSupport || frozen || !node) return;

        const observerParams = { threshold, root, rootMargin };
        const observer = new IntersectionObserver(updateEntry, observerParams);

        observer.observe(node);

        return () => observer.disconnect();

    }, [ref, JSON.stringify(threshold), root, rootMargin, frozen]);

    return entry;
};