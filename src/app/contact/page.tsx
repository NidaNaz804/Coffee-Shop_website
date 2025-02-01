import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='contact-section'>
            <div className='contact-form-container'>
                <div className='contact-header'>
                    <h1>Contact Us</h1>
                    <p>We would love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.</p>
                </div>

                <form className='contact-form space-y-6'>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' name='name' placeholder='Your Name' />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name='email' placeholder='Your Email' />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" placeholder='Your Message' rows= {5}></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>

                <div className='contact-footer'>
                    <p>Or reach us directly:</p>
                    <p className='contact-details'>+92 333-3255677</p>
                    <p className='contact-details'>info@beanbliss.com</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
