import './app.scss';
import {
    useEffect,
    useLayoutEffect,
} from 'react';

import { defaultAppConfig } from './constants/defaultAppConfig';

import useReadLocalStorage from './hooks/useReadLocalStorage';

import Router from './router';

export default function App() {
    const appConfig = useReadLocalStorage<any>('app-configuration') || defaultAppConfig;

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
