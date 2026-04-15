import Button from '../Button/Button'
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from 'react';
import './ScrollToTop.css'

type ScrollToTopProps = {
    onClick: () => void
};

const ScrollToTop = ({ onClick }: ScrollToTopProps) => {

    const [showScrollToTop, setShowScrollToTop] = useState('scrollToTopHidden');

    // Scroll listener
    useEffect(() => {
        // Display handler for ScrollToTop button
        const handleVisibility = () => {
        if (window.pageYOffset > 50) {
            setShowScrollToTop('scrollToTop');
        }
        else{
            setShowScrollToTop('scrollToTopHidden');
        }
        };

        window.addEventListener('scroll', handleVisibility);
        return () => {
            window.removeEventListener('scroll', handleVisibility);
        }
    }, []);

    return(
        <div className={showScrollToTop} >
            <Button round transparent onClick={onClick}>
                <IoIosArrowUp size={20}/>
            </Button>
        </div>
    )
}

export default ScrollToTop;