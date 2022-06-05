import {
    useState,
    useEffect
} from 'react';

export default function useCSSVariable(variable: string, fn?: (param: string) => string) {
    const [entry, setEntry] = useState<string>('');

    useEffect(() => {
        const value = getComputedStyle(document.body).getPropertyValue(variable);
        setEntry(typeof fn === 'function' ? fn(value) : value);
    });

    return entry;
};