import './theme.scss';
import { toast } from 'react-toastify';

import { defaultAppConfig } from '../../constants/defaultAppConfig';

import useToggle from '../../hooks/useToggle';
import useLocalStorage from '../../hooks/useLocalStorage';

const themeColors = [
    { name: "Green", variable: "--green" },
    { name: "Teal", variable: "--teal" },
    { name: "Blue", variable: "--blue" },
    { name: "Indigo", variable: "--indigo" },
    { name: "Purple", variable: "--purple" },
    { name: "Yellow", variable: "--yellow" },
    { name: "Orange", variable: "--orange" },
    { name: "Pink", variable: "--pink" }
];

export default function Theme() {
    const [open, setOpen] = useToggle(false);
    const [appConfig, setAppConfig] = useLocalStorage('app-configuration', defaultAppConfig);
    const themeIcons = [
        {
            name: "System theme",
            match: /System \(Dark\)|System \(Light\)/,
            iconClass: "bx-desktop",
            onClick: () => window.matchMedia('(prefers-color-scheme: dark)')?.matches ? switchTheme('dark', 'System (Dark)') : switchTheme('light', 'System (Light)')
        },
        {
            name: "Light mode",
            match: /Light/,
            iconClass: "bx-sun",
            onClick: () => switchTheme('light', 'Light')
        },
        {
            name: "Dark mode",
            match: /^Dark$/,
            iconClass: "bxs-cloud",
            onClick: () => switchTheme('dark', 'Dark')
        }
    ];

    const switchTheme = (theme: string, themeName: string) => {
        if(themeName === appConfig.theme.name) return;
        toast.error('Background themes are temporarily disabled.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });
        /*
        setAppConfig({
            theme: {
                name: themeName,
                type: theme
            },
            accent: appConfig.accent,
            'second-accent': appConfig['second-accent']
        });
        */
    };

    const switchAccent = (color: string, colorName: string) => {
        if(colorName === appConfig.accent.name) return;
        setAppConfig({
            theme: appConfig.theme,
            accent: {
                name: colorName,
                color: color
            },
            'second-accent': appConfig['second-accent']
        });
        window.location.reload();
    };

    const switchSecondAccent = (color: string, colorName: string) => {
        if(colorName === appConfig['second-accent'].name) return;
        setAppConfig({
            theme: appConfig.theme,
            accent: appConfig.accent,
            'second-accent': {
                name: colorName,
                color: color
            }
        });
        window.location.reload();
    };

    return (
        <div id="ThemeContainer" className={ open ? 'active' : '' }>
            <div className='toggle-theme'>
                <button onClick={() => setOpen()}>
                    <i className="bx bx-cog"/>
                </button>
            </div>
            <div className="container">
                <h3 className='title'>Set website to your preference</h3>
                <div className="content">
                    <h4 className='category'>Background</h4>
                    <h4 className="status">{ appConfig.theme.name }</h4>
                    <div className="themes">
                        {themeIcons.map((val, i) => (
                            <i key={ i } className={ `bx ${val.iconClass} ${appConfig.theme.name?.match(val.match) ? 'active' : ''}` } onClick={ val.onClick }/>
                        ))}
                    </div>
                    <h4 className="category">Accent</h4>
                    <h4 className="status">{appConfig.accent.name}</h4>
                    <div className="themes">
                        {themeColors.map((val, i) => (
                            <div key={ i } className={ `accents ${val.name === appConfig.accent.name ? ' active' : ''}` } onClick={() => switchAccent(`var(${val.variable})`, val.name)}>
                                <span style={{ backgroundColor: `var(${val.variable})` }}/>
                            </div>
                        ))}
                    </div>
                    <h4 className="category">Second Accent</h4>
                    <h4 className="status">{appConfig['second-accent'].name}</h4>
                    <div className="themes">
                        {themeColors.map((val, i) => (
                            <div key={ i } className={ `accents ${val.name === appConfig['second-accent'].name ? ' active' : ''}` } onClick={() => switchSecondAccent(`var(${val.variable})`, val.name)}>
                                <span style={{ backgroundColor: `var(${val.variable})` }}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};