import { forwardRef } from 'react';
import { useRef } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegFilePdf } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Input from '../Shared/Input/Input';
import Button from '../Shared/Button/Button';
import './Contact.css';


const Contact = forwardRef<HTMLElement, {}>((props, ref) => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!formRef.current) return;
        formRef.current.time.value = new Date().toString();
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            formRef.current,
            {publicKey: import.meta.env.VITE_PUBLIC_KEY})
        .then((result) => {
            console.log(result.text);
            formRef.current?.reset();
        }, (error) => {
            console.log(error);
        });
    }


    return (
        <section ref={ref} className="contact-box">
            <h2 className="contact-heading">Contact</h2>

            <div className='contact-info'>

                <p> <MdOutlineEmail /> anniv.mustonen@gmail.com</p>
                <p> <PiPhone /> +358 451 244 064 </p>
                <p> <IoLocationOutline /> Tampere, Suomi </p>
                <a
                    href="https://www.linkedin.com/in/anni-mustonen-316118295/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <BsLinkedin />
                    LinkedIn
                </a>
                <a
                    href="https://github.com/annivm"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaGithub />
                    Github
                </a>
                <br/>
                <br/>
                <a href="/CV2026_kevat.pdf" target="_blank" rel="noopener noreferrer"> <FaRegFilePdf /> Open CV (Finnish)</a>
                <br/>
                <a href="/CV2026_kevat.pdf" download> <FaRegFilePdf /> Download CV (Finnish)</a>
            </div>

            <form ref={formRef} className='contact-form' onSubmit={handleSubmit}>
                <h3 className='form-label'>Send me an email:</h3>
                <input type="hidden" name="time" value="Mar 10 2025 08:46"></input>
                <Input id="name" name="name" type="text" label="Name" required={true} placeholder="Enter name"/>
                <Input id="topic" name="topic" type="text" label="Topic" required={true} placeholder="Enter topic"/>
                <Input id="email" name="email" type="email" label="Email" required={true} placeholder="Enter email"/>
                <Input id="message" name="message" type="text" label="Message" rows={5} required={true} placeholder="Enter message"/>
                <Button inverse transparent type="submit">Send Email</Button>
            </form>

        </section>
    )
});

export default Contact;