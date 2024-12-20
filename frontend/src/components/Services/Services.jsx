import React from 'react'
import './Services.css'

const Services = () => {
    return (
        <>
            <section id="services">
                <div>
                    <h2>Our Services</h2>
                    <div className="services-list">
                        <div className="service-item">
                            <h3>Lead Capture Optimization</h3>
                            <p>Optimize your website forms and CTAs to maximize lead capture rates.</p>
                        </div>
                        <div className="service-item">
                            <h3>Email Marketing Campaigns</h3>
                            <p>Create targeted email campaigns to nurture leads and convert them into customers.</p>
                        </div>
                        <div className="service-item">
                            <h3>Social Media Advertising</h3>
                            <p>Leverage social media platforms to run ads and generate quality leads.</p>
                        </div>
                        <div className="service-item">
                            <h3>Landing Page Design</h3>
                            <p>Design and optimize landing pages specifically crafted to capture leads.</p>
                        </div>
                        <div className="service-item">
                            <h3>CRM Integration</h3>
                            <p>Integrate lead data seamlessly into your CRM for efficient management and follow-up.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services