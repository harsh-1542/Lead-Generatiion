import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <>
            <section id="hero">
                <div className="vivek">
                    <h2>Grow Your Business with Us</h2>
                    <p>Your journey to success starts here. Sign up today to learn more.</p>
                    <form action="/api/submit-lead" method="post" className="lead-form">
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <input type="text" name="phone" placeholder="Your Phone Number" />
                        <button type="submit">Get Started</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Hero