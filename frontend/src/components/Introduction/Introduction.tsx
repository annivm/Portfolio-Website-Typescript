import { forwardRef } from 'react';
import FadeInText from '../Shared/FadeInText/FadeInText';
import './Introduction.css';


const Introduction = forwardRef<HTMLElement, {}>((props, ref) => {
    return (
    <section ref={ref} className="introduction">
        <section className='introduction-section'>
            <FadeInText component='h1' className='heading fade-in' delay={1000}>Anni Mustonen</FadeInText>
            {/* <img src="/images/Mustonen_Anni_sq.png" alt="Anni Mustonen" className="introduction-image" /> */}
        </section>
        <FadeInText component='p' className="introduction-text fade-in" delay={1700}>
            ICT student graduating in 2026 with a background in biomedical laboratory science.
            I have hands-on experience from healthcare IT operations and practical coding experience gained through studies and projects, focusing on web development with React, Node.js, and SQL databases.
            <br />
            <br />
           I'm seeking a junior or entry-level software developer role.
        </FadeInText>
    </section>
    )
});

export default Introduction;