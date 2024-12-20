import React from 'react'
import './Faqs.css'

const Faqs = () => {
    return (
        <>
            <section id="faqs">
                <div>
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-item">
                        <h3>What services do you offer?</h3>
                        <p>
                            We offer a wide range of services tailored to help your business succeed,
                            including marketing, consulting, and technical support.
                        </p>
                    </div>
                    <div className="faq-item">
                        <h3>How can I get started?</h3>
                        <p>
                            Simply fill out the form in the hero section, and our team will contact
                            you promptly to discuss your needs.
                        </p>
                    </div>
                    <div className="faq-item">
                        <h3>Do you offer customer support?</h3>
                        <p>
                            Yes, we provide 24/7 customer support to assist you with any queries or
                            concerns.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqs