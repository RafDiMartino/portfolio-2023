"use client"
import React, { useState, ChangeEvent, FormEvent, useRef, useLayoutEffect } from 'react';
import classes from "./ContactForm.module.css"
import gsap from 'gsap'

interface FormData {
    name: string;
    email: string;
    message: string;
    access_key: string;
}

export const ContactForm: React.FC = () => {

    const formRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {
            gsap.fromTo(
                ".fadeInAnimation",
                {
                    autoAlpha: 0,
                    y: 100
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.inOut",
                }
            )
        }, formRef)
        return () => ctx.revert();
    }, [])

    // State to handle the success message
    const [success, setSuccess] = useState(false);

    // State to handle the form data
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
        access_key: '8f7cd656-fec0-4e74-8279-c70496d238cf'
    });

    // Function that handles the onchange event
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    // Function that handles the form submit
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Connecting to Web3Form API for handling submission email to my email address
        const data = JSON.stringify(formData);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: data
            });

            const responseData = await response.json();

            if (response.ok) {
                setSuccess(true);
                setFormData({
                    ...formData,
                    name: '',
                    email: '',
                    message: ''
                });

                setTimeout(() => {
                    setSuccess(false);
                }, 2000);
            } else {
                console.log(responseData);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div ref={formRef} className={`${classes.contactFormContainer}`}>
            <div className={`${classes.contactFormWrapper} fadeInAnimation`}>
                <form onSubmit={handleSubmit}>
                    <input name='name' value={formData.name} onChange={handleChange} type='text' placeholder='Enter your full name' aria-label='Name' required />
                    <input name='email' value={formData.email} onChange={handleChange} type='text' placeholder='Enter your email address' aria-label='Email' required />
                    <textarea name='message' value={formData.message} onChange={handleChange} placeholder='Type your message here' cols={30} rows={5} aria-label='Message' required></textarea>
                    <button className='button' type='submit'>Send message</button>
                </form>
                <p className={!success ? classes.successMessageInactive : classes.successMessageActive}>Message sent successfully. Thank you!</p>
            </div>
        </div>
    )
}