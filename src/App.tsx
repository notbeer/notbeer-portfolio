import {
    useEffect,
    useLayoutEffect,
} from 'react';

import useReadLocalStorage from './hooks/useReadLocalStorage';

import Router from './router';

export default function App() {
    const appConfig = useReadLocalStorage<any>('app-configuration') || {
        theme: {
            // name: window.matchMedia('(prefers-color-scheme: dark)')?.matches ? 'System (Dark)' : 'System (Light)',
            // type: window.matchMedia('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light'
            name: 'Light',
            type: 'light'
        },
        accent: {
            name: 'Purple',
            color: 'var(--purple)'
        },
        'second-accent': {
            name: 'Green',
            color: 'var(--green)'
        }
    };

    useEffect(() => {
        window.history.scrollRestoration = 'manual';
    }, []);

    useLayoutEffect(() => {
        document.documentElement.setAttribute('app-theme', appConfig.theme.type);
        document.documentElement.style.setProperty('--accent', appConfig.accent.color);
        document.documentElement.style.setProperty('--second-accent', appConfig['second-accent'].color);
    }, [appConfig]);
    
    return <Router/>;
};
