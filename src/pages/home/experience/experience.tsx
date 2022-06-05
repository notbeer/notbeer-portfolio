import './experience.scss';

import { useState } from 'react';

import Category from '../../../components/others/category/category';
import FadeIn from '../../../components/animation/fadeIn';

import {
    contentTyping,
    frontend,
    backend,
    librariesNframeworks,
    softwareNtools
} from '../../../constants/skills';

import useCSSVariable from '../../../hooks/useCSSVariable';
import useEventListener from '../../../hooks/useEventListener';

import { adjustHex } from '../../../utils/color';

export default function Experience() {
    const accent = useCSSVariable('--accent'), secondAccent = useCSSVariable('--second-accent');
    const [large, setLarge] = useState(false);

    useEventListener('resize', () => {
        window.innerWidth <= 960 ? setLarge(true) : setLarge(false);
    });

    const card = (title: string, content: Array<contentTyping>, color: string, iconColor: string) => (
        <div className="card" style={{ background: `linear-gradient(180deg, ${adjustHex(color, -20)} 0%, ${color} 100%)` }}>
            <h3>{title}</h3>
            <div className="content">
                {content.map((elm, i) => (
                    <div key={ i } className="detail">
                        <i className='bx bxs-badge-check' style={{ color: iconColor }}/>
                        <div>
                            <h4>{elm.content}</h4>
                            <small>{elm.skill}</small>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    
    return (
        <section id="ExperienceSection">
            <Category title='Experince' description='What am I experienced in?'/>
            <FadeIn onView={ true } animateFrom={{ y: '300', opacity: '0' }} animateTo={{ y: '0', opacity: '1' }} delay={ 300 } className='cards'>
                {card('Frontend Development', frontend, accent, secondAccent)}
                {card('Backend Development', backend, secondAccent, accent)}
                {card('Libraries & Frameworks', librariesNframeworks, large ? accent : secondAccent, large ? secondAccent : accent)}
                {card('Software & Tools', softwareNtools, large ? secondAccent : accent, large ? accent : secondAccent)}
            </FadeIn>
        </section>
    );
};