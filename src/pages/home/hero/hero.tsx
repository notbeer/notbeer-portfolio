import './hero.scss';
import {
    useState,
    useEffect
} from 'react';
import { Link } from 'react-scroll';

import { ColorText } from '../../../components/others/color';
import { Button2 } from '../../../components/button/button';
import FadeIn from '../../../components/animation/fadeIn';

export default function Home() {
    const [heroActive, setHero] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setHero(true), 400);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section id="HeroSection" className={ heroActive ? 'active' : '' }>
            <div className="content">
                <FadeIn animateFrom={{ y: '300', opacity: '0' }} animateTo={{ y: '0', opacity: '1' }} delay={ 300 } className='information'>
                    <h1>
                        Hello,
                        <br/>
                        I'm <ColorText>notbeer</ColorText>.
                    </h1>
                    <p>I'm an developer located in Buffalo, New York. I specialize in algorithms, machine learning, the frontend and the backend of an website; with experience in multiple frameworks, and applications.</p>
                    <Button2>
                        <Link to='FooterSection' smooth={ true }>CONTACT</Link>
                    </Button2>
                </FadeIn>
                <FadeIn animateFrom={{ scale: '0', rotation: '270' }} animateTo={{ scale: '1', rotation: '360' }} delay={ 800 } transitionDuration={ 900 } transitionFunction='cubic-bezier(0.68, 0, 0.265, 1.55)' className='hero-images'>
                    <img src={ process.env.PUBLIC_URL + 'images/hero-image.png' } alt="Hero Image" className='hero'/>
                </FadeIn>
            </div>
        </section>
    );
};