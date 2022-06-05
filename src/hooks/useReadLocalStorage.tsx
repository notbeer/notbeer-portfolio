import {
    useEffect,
    useState
} from 'react';

import useEventListener from './useEventListener';

type Value<T> = T | null;

export default function useReadLocalStorage<T>(key: string): Value<T> {
    const readValue = (): Value<T> => {
        if(typeof window === 'undefined') return null;
        try {
            const item = window.localStorage.getItem(key);
            return item ? (JSON.parse(item) as T) : null;
        } catch (error) {
            console.warn(`Error reading localStorage key “${key}”:`, error);
            return null;
        };
    };

    const [storedValue, setStoredValue] = useState<Value<T>>(readValue);

    useEffect(() => {
        setStoredValue(readValue());
    }, []);

    const handleStorageChange = () => setStoredValue(readValue());

    useEventListener('storage', handleStorageChange);
    useEventListener('local-storage', handleStorageChange);

    return storedValue;
};