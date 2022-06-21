import './testimonial.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import {
    Swiper,
    SwiperSlide
} from 'swiper/react';

import Category from "../../../components/others/category/category";
import FadeIn from '../../../components/animation/fadeIn';

import { testimonial } from '../../../constants/testimonial';

import useCSSVariable from '../../../hooks/useCSSVariable';

import { adjustHex } from '../../../utils/color';

export default function Testimonial() {
    const accent = useCSSVariable('--accent');
    
    return (
        <section id="TestimonialSection">
            <Category title='Testimonial' description='What do others think?'/>
            <div id="ContentMargin">
                <FadeIn onView={ true } animateFrom={{ x: '-300', opacity: '0' }} animateTo={{ x: '0', opacity: '1' }} delay={ 300 } className="information">
                    <Swiper className="cards" modules={[ Pagination ]} spaceBetween={ 40 } slidesPerView={ 1 } pagination={{ clickable: true }}>
                        {testimonial.map((val, i) => (
                            <SwiperSlide key={ i } className="card" style={{ background: `linear-gradient(180deg, ${adjustHex(accent, -20)} 0%, var(--accent) 100%)` }}>
                                <i className='bx bxs-user-circle'/>
                                <h4>{val.name}</h4>
                                <div className="first-quote">“</div>
                                <small>{val.testimonial}</small>
                                <div className="last-quote">”</div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </FadeIn>
            </div>
        </section>
    );
};