import './about.scss';
import { useEffect } from 'react';

import Category from '../../../components/others/category/category';
import tagCloud from '../../../components/animation/tagCloud';
import FadeIn from '../../../components/animation/fadeIn';

import {
    info,
    interests
} from '../../../constants/about';

import { allSkills } from '../../../constants/skills';

import useCSSVariable from '../../../hooks/useCSSVariable';

import { adjustHex } from '../../../utils/color';

export default function About() {
    const accent = useCSSVariable('--accent');
    
    useEffect(() => {
        tagCloud('span#skills-sphere', allSkills, {
            radius: window.innerWidth >= 485 ? 250 : 180,
            maxSpeed: 'medium',
            initSpeed: 'normal',
            direction: 135,
            keep: true
        });
        for(const span of (document.querySelector('span#skills-sphere') as HTMLElement)?.getElementsByTagName('span') || []) span.style.color = `hsl(${Math.random() * 360}, 100%, 40%)`;
    }, []);
    
    return (
        <section id="AboutSection">
            <Category title='About Me' description='Who am I?'/>
            <div className='content'>
                <FadeIn onView={ true } animateFrom={{ x: '-300', opacity: '0' }} animateTo={{ x: '0', opacity: '1' }} delay={ 400 } childTag='div' childClassName='skills-sphere'>
                    <span id="skills-sphere"/>
                </FadeIn>
                <FadeIn onView={ true } animateFrom={{ x: '300', opacity: '0' }} animateTo={{ x: '0', opacity: '1' }} delay={ 300 } className="information">
                    <FadeIn onView={ true } animateFrom={{ x: '300', opacity: '0' }} animateTo={{ x: '0', opacity: '1' }} delay={ 350 } className='cards'>
                        {info.map((val, i) => (
                            <div key={ i } className="card" style={{ background: `linear-gradient(180deg, ${adjustHex(accent, -20)} 0%, var(--accent) 100%)` }}>
                                <i className={ `bx ${val.icon}` }/>
                                <h5>{val.title}</h5>
                                <small>{val.description}</small>
                            </div>
                        ))}
                    </FadeIn>
                    <FadeIn onView={ true } animateFrom={{ x: '300', opacity: '0' }} animateTo={{ x: '0', opacity: '1' }} delay={ 300 } childTag='p' childClassName='interest-information'>
                        I'm an developer located in Buffalo, New York. I specialize in algorithms, machine learning, the frontend and the backend of an website; with experience in multiple frameworks, and applications. I took an interest in coding/programming, since the beginning of 2020. Through out that time, I have dedicated myself over the past years to learn multiple languages, frameworks and much more!
                    </FadeIn>
                    <FadeIn onView={ true } animateFrom={{ x: '300', opacity: '0' }} animateTo={{ x: '0', opacity: '1' }} delay={ 200 } className='my-interests'>
                        <h3>My Interests</h3>
                        <FadeIn onView={ true } animateFrom={{ x: '300', opacity: '0' }} animateTo={{ x: '0', opacity: '1' }} delay={ 200 } className='interests'>
                            {interests.map((val, i) => (
                                <div key={ i } className="interest">
                                    <i className={ `bx ${val.icon}` }/>
                                    <h4>{val.title}</h4>
                                </div>
                            ))}
                        </FadeIn>
                    </FadeIn>
                </FadeIn>
            </div>
        </section>
    );
};