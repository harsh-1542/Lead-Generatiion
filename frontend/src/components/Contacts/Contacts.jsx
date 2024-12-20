import React from 'react'
import './Contacts.css'

const Contacts = () => {
    return (
        <>
            <section id="contact">
                <div>
                    <h2>Contact Us</h2>
                    <p>Have questions? Reach out to us and we’ll be happy to assist you.</p>
                    <form action="/api/contact" method="post" className="contact-form">
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" placeholder="Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contacts