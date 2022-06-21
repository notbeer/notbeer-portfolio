import {
    useState,
    useRef,
    useEffect
} from 'react';
import {
    useLocation,
    useNavigate
} from 'react-router-dom';

import {
    NavbarContainer,
    NavbarItems,
    NavbarItem,
    NavbarIndicator
} from './navbarElements';

import useEventListener from '../../hooks/useEventListener';
import useScrollData from '../../hooks/useScrollData';

const navbarItems = [
    { path: 'HeroSection', className: 'HeroSection', text: 'Home', icon: 'bx-home', ignoreOffset: true },
    { path: 'AboutSection', className: 'AboutSection', text: 'About', icon: 'bx-user' },
    { path: 'ExperienceSection', className: 'ExperienceSection', text: 'Experience', icon: 'bx-brain' },
    { path: 'ServiceSection', className: 'ServiceSection', text: 'Service', icon: 'bx-shopping-bag' },
    { path: 'PortfolioSection', className: 'PortfolioSection TestimonialSection', text: 'Portfolio', icon: 'bx-book' },
    { path: 'FooterSection', className: 'FooterSection', text: 'Contact', icon: 'bx-message-detail' }
];

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate()
    const [sections, setSections] = useState<NodeListOf<HTMLElement>>();
    const [currentNavigation, setCurrentNavigatioon] = useState('HomeSection');
    const scrollData = useScrollData();
    const navbarRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        setSections(document.querySelectorAll("section"));
    }, []);

    useEventListener('scroll', () => {
        sections?.forEach((section) => {
            if(window.innerHeight + window.scrollY + 400 >= document.body.offsetHeight) setCurrentNavigatioon('FooterSection');
            else if(window.scrollY >= section.offsetTop - section.clientHeight / 3) setCurrentNavigatioon(section.getAttribute("id")!);
        });
        if(scrollData.speed.y < 1500 || window.innerHeight + window.scrollY + 400 >= document.body.offsetHeight) {
            for(const item of navbarRef.current?.getElementsByTagName('a')!) {
                item.classList.remove('active');
                if(item.classList.contains(currentNavigation)) item.classList.add('active');
            };
        };
    });

    const onNavClick = () => {
        if(location.pathname !== '/') {
            navigate('/', { replace: true });
            window.location.reload();
        };
    };

    return (
        <NavbarContainer id='NavbarContainer' ref={ navbarRef }>
            <NavbarItems className='active'>
                {navbarItems.map((elm, i) => (
                    <NavbarItem key={ i } text={ elm.text } count={ 65 * i } to={ elm.path } smooth={ true } offset={ elm.ignoreOffset ? 0 : 65 } className={ `${i === 0 ? 'active first' : ''}${i === navbarItems.length - 1 ? 'last' : ''} ${elm.className}` } onClick={ onNavClick }>
                        <i className={`bx ${elm.icon}`}/>
                    </NavbarItem>
                ))}
                <NavbarIndicator className='indicator'/>
            </NavbarItems>
        </NavbarContainer>
    );
};