import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactSection() {
    const [state, handleSubmit] = useForm("xvojagdj");

    if (state.succeeded) {
        return <p>Thank you for contacting us!</p>;
    }

    return (
        <div className="contact-section">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-description">Please reach out if you have any questions.</p>

            <div className="contact-section-content">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" className="contact-input" placeholder="Your Name" required />
                    <ValidationError field="name" prefix="Name" errors={state.errors} />
                    
                    <input type="email" name="email" className="contact-input" placeholder="Your Email" required />
                    <ValidationError field="email" prefix="Email" errors={state.errors} />
                    
                    <textarea name="message" className="contact-textarea" placeholder="Your Message" required></textarea>
                    <ValidationError field="message" prefix="Message" errors={state.errors} />
                    
                    <button type="submit" className="contact-button" disabled={state.submitting}>Send Message</button>
                </form>

                <div className="contact-details">
                    <h3 className="contact-details-title">Nexus Luxury Car Rental</h3>
                    <p>1234 Street Name, City, ZIP</p>
                    <p>Email: <a href="mailto:example@example.com">example@example.com</a></p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;
