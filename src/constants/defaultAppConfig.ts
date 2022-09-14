const defaultAppConfig = {
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
        name: 'Orange',
        color: 'var(--orange)'
    }
};

export { defaultAppConfig };