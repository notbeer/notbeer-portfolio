import './portfolio.scss';
import {
    useState,
    useRef
} from 'react';
import Category from '../../../components/others/category/category';
import FadeIn from '../../../components/animation/fadeIn';
import { Button1 } from '../../../components/button/button';

import {
    portfolio,
    portfolioExtendIndex
} from '../../../constants/portfolio';

const portfolioCategories = [
    'UI/UX',
    'React JS',
    'Library',
    'Package',
    'All'
];

export default function Portfolio() {
    const portfolioRef = useRef<HTMLElement>(null);
    const [portfolioCategory, setPortfolioCategory] = useState('All');
    const [filteredPortfolio, setFilteredPortfolio] = useState(portfolio)
    const [animateTo, setAnimateTo] = useState({ y: '0', opacity: '1' });

    const onPortfolioCategoryClick = (category: string) => {
        if(portfolioCategory === category) return;
        setPortfolioCategory(category);
        setAnimateTo({ y: '300', opacity: '0' });
        setTimeout(() => {
            category === 'All' ? setFilteredPortfolio(portfolio) : setFilteredPortfolio(portfolio.filter(val => val.category?.includes(category.toLowerCase().replace(/\s+/g, ''))));
            setAnimateTo({ y: '0', opacity: '1' });
        }, 600);
    };

    return (
        <section id="PortfolioSection" ref={ portfolioRef }>
            <Category title='Portfolio' description='What have I worked on?'/>
            <div className="portfolio-categories">
                {portfolioCategories.map((val, i) => (
                    <button key={ i } className={ `category${val === portfolioCategory ? ' active' : ''}` } onClick={() => onPortfolioCategoryClick(val)}>
                        {val}
                    </button>
                ))}
            </div>
            <FadeIn animateFrom={{ y: '300', opacity: '0' }} animateTo={ animateTo } onView={ true } delay={ 100 } transitionDuration={ 800 } className='cards'>
                {filteredPortfolio.map((val, i) => (
                    <div key={ i } className={ `card${portfolioExtendIndex.includes(i) ? ` column-2` : ''}` }>
                        <div className="image">
                            <img src={ `${process.env.PUBLIC_URL}/images/portfolio/${val.title.toLowerCase().replace(/\s+/g, '-')}.png` } alt=""/>
                            <div className="overlay-color"/>
                        </div>
                        <div className="information">
                            <h4>{val.title}</h4>
                            <p>{val.description}</p>
                            <span className="buttons">
                                {
                                    val?.github
                                    ?   <a href={ val.github } target='_blank'>
                                            <Button1>Github</Button1>
                                        </a>
                                    :   null
                                }
                                {
                                    val?.demo
                                    ?   <a href={ val.demo } target='_blank'>
                                            <Button1>View Demo</Button1>
                                        </a>
                                    : null
                                }
                                {
                                    val?.npm
                                    ?   <a href={ val.npm } target='_blank'>
                                            <Button1>NPM</Button1>
                                        </a>
                                    : null
                                }
                            </span>
                        </div>
                    </div>
                ))}
            </FadeIn>
        </section>
    );
};