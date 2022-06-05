//! Currently not used anywhere
import './loading.scss';

import useCSSVariable from '../../hooks/useCSSVariable';

export default function Loading() {
    const accent = useCSSVariable('--accent'), secondAccent = useCSSVariable('--second-accent');

    return (
        <div id="LoadingContainer">
            <div className="loading">
                <span><i style={{ background: `linear-gradient(${accent}, ${secondAccent})` }}/></span>
                <i className='bx bxs-rocket'/>
            </div>
            <div className="loading-bar"/>
        </div>
    );
};