import './footer.scss';
import React, { useRef } from 'react';
import { Link } from 'react-scroll';
import { toast } from 'react-toastify';

import FadeIn from '../../../components/animation/fadeIn';
import Hoc from '../../../components/animation/svg/hoc';
import { Button1 } from '../../../components/button/button';

interface embedField {
    name: string,
    value: FormDataEntryValue,
    inline: boolean
};

export default function Footer() {
    const formRef = useRef<HTMLFormElement>(null);
    const formInputRef = useRef(null);

    const onContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const formData = new FormData(event.currentTarget);

        const webhookRequest = new XMLHttpRequest();
        webhookRequest.open("POST", process.env.REACT_APP_DISCORD_WEBHOOK!);
        webhookRequest.setRequestHeader('Content-type', 'application/json');
        
        const fields: Array<embedField> = [];
        formData.forEach((key, value) => {
            fields.push({
                name: value,
                value: key,
                inline: true
            });
        });
        
        webhookRequest.send(JSON.stringify({
            "embeds": [
                {
                    "color": Math.floor(Math.random() * 16777215),
                    "title": "Contact Information",
                    "description": "Hey, notbeer! Someone has contacted you through your portfolio website.",
                    fields
                }
            ]
        }));

        (event.target as HTMLFormElement).reset();

        webhookRequest.onreadystatechange = () => {
            if(webhookRequest.readyState === 4) {
                webhookRequest.status !== 204
                ? toast.error('An error occured while trying to message notbeer...', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                })
                : toast.success('Successfully sent message to notbeer!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
            };
        };
    };

    return (
        <section id="FooterSection">
            <div id="ContentMargin">
                <FadeIn onView={ true } animateFrom={{ y: '-80', opacity: '0' }} animateTo={{ y: '0', opacity: '1' }} delay={ 230 } wrapperTag='footer' className='footer-content' onComplete={() => {
                    toast('Have any questions? Feel free to contact me.', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined
                    });
                }}>
                    <div className="footer-information">
                        <Link to='root' smooth={ true } className='logo'>NOTBEER</Link>
                        <div className='description'>“<br/>Experience is<br/>based on mistakes.<br/>”</div>
                    </div>
                    <div><div className="svg-1"><Hoc onView={ true } delay={ 400 } rotateTo='left'/></div></div>
                    <FadeIn onView={ true } animateFrom={{ y: '-80', opacity: '0' }} animateTo={{ y: '0', opacity: '1' }} delay={ 130 } transitionDuration={ 600 } wrapperTag='ul' className='footer-items'>
                        <li>
                            <Link to='HeroSection' smooth={ true }>Home</Link>
                        </li>
                        <li>
                            <Link to='AboutSection' smooth={ true }>About</Link>
                        </li>
                        <li>
                            <Link to='ExperienceSection' smooth={ true }>Experience</Link>
                        </li>
                        <li>
                            <Link to='ServiceSection' smooth={ true }>Service</Link>
                        </li>
                        <li>
                            <Link to='PortfolioSection' smooth={ true }>Portfolio</Link>
                        </li>
                        <li>
                            <a onClick={ () => (formInputRef.current as unknown as HTMLInputElement).focus() }>Contact</a>
                        </li>
                        <li className='footer-socials'>
                            <a href="https://github.com/notbeer" target='_blank'><i className='bx bxl-github'/></a>
                            <a href="#" target='_blank'><i className='bx bxl-instagram'/></a>
                            <a href="https://twitter.com/notbeer1" target='_blank'><i className='bx bxl-twitter'/></a>
                        </li>
                    </FadeIn>
                    <div className="footer-contact">
                        <div className="title">
                            Contact notbeer<br/>through the website
                        </div>
                        <form ref={ formRef } onSubmit={ onContactSubmit }>
                            <div className="input-box">
                                <label htmlFor="name">
                                    <i className='bx bx-user'/>
                                </label>
                                <input ref={ formInputRef } id="name" type="text" name="Name" placeholder="NAME" spellCheck={ false } required/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="email">
                                    <i className='bx bx-envelope'/>
                                </label>
                                <input id="email" type="email" name="Email" placeholder="EMAIL" required spellCheck={ false }/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="message">
                                    <i className='bx bx-chat'/>
                                </label>
                                <textarea id='message' name="Message" placeholder="MESSAGE" required/>
                            </div>
                            <Button1>Send</Button1>
                        </form>
                    </div>
                </FadeIn>
                <FadeIn onView={ true } animateFrom={{ y: '-80', opacity: '0' }} animateTo={{ y: '0', opacity: '1' }} delay={ 1100 }>
                    <div className="footer-copyright">
                        © 2021 - {new Date().getFullYear()} notbeer.dev - All Rights Reserved.
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};