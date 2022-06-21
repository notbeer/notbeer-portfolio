import './service.scss';

import Category from "../../../components/others/category/category";
import FadeIn from '../../../components/animation/fadeIn';

import { service } from '../../../constants/service';

export default function Service() {
    return (
        <section id="ServiceSection">
            <Category title='Service' description='What do I offer?'/>
            <div id="ContentMargin">
                <FadeIn onView={ true } animateFrom={{ y: '300', opacity: '0' }} animateTo={{ y: '0', opacity: '1' }} delay={ 200 } className='cards'>
                    {service.map((val, i) => (
                        <div key={ i } className='card'>
                            <h2>{val.title}</h2>
                            <p>{val.description}</p>
                            <i className={ `bx ${val.icon.name}` } style={{ color: val.icon.color }}/>
                        </div>
                    ))}
                </FadeIn>
            </div>
        </section>
    );
};