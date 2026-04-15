import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import '../Button/Button.css';
import './ImageCarousel.css';

type ImageCarouselProps = {
    project: string, // Name of the project, used to determine the image source
    button?: string // Additional class for the navigation buttons
}

const ImageCarousel = ({project, button=""}: ImageCarouselProps) => {
    const images = [
        { id: 1, src: `/images/${project}1.png` },
        { id: 2, src: `/images/${project}2.png` },
        { id: 3, src: `/images/${project}3.png` },
        { id: 4, src: `/images/${project}4.png` },
    ];


    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePreviousClick = () => {
        setCurrentImageIndex(
            currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };


    return (
        <section className='image-container'>
            <button className={`nav-button left ${button}`} onClick={ (event) => { event.stopPropagation(); handlePreviousClick() }}><IoIosArrowBack size={20}/></button>
            {images.map((image, index) => (
                <img
                    src={image.src}
                    alt="images"
                    className={ currentImageIndex === index ? 'block' : 'hidden'}
                    key={image.id}
                />
            ))}
            <button className={`nav-button right ${button}`} onClick={ (event) => { event.stopPropagation(); handleNextClick() }}><IoIosArrowForward size={20}/></button>
        </section>
    )
}

export default ImageCarousel;