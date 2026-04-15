import { useEffect, useState } from 'react';
import Button from '../Shared/Button/Button';
import './NavBar.css';

type NavBarProps = {
    onIntro: () => void;
    onExp: () => void;
    onEdu: () => void;
    onProj: () => void;
    onContact: () => void;
}

const NavBar = ({ onIntro, onExp, onEdu, onProj, onContact }: NavBarProps) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect( () => {
        const handleScroll = () => setIsSticky(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
    })

    return(
        <nav className={`navbar ${isSticky ? 'is-sticky' : ''}`}>
            <Button size="big" transparent onClick={onIntro}>
                Introduction
            </Button>
            <Button size="big" transparent onClick={onExp}>
                Experience
            </Button>
            <Button size="big" transparent onClick={onEdu}>
                Education
            </Button>
            <Button size="big" transparent onClick={onProj}>
                Projects
            </Button>
            <Button size="big" transparent onClick={onContact}>
                Contact
            </Button>
        </nav>
    )
}

export default NavBar;