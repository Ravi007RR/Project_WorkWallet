import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './App.css'; // Add appropriate styles
import logo from '../assests/Logo.png' // Adjust the logo path as necessary

const Work = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            setMenuActive(false);
        }
    };

return (
    <div>
    <nav className="navbar">
            <div className="logo">
                <img src={logo} />
            </div>
        <div className={`nav-links ${menuActive ? 'active' : ''}`}>
        <a href="#vision" onClick={(e) => handleSmoothScroll(e, 'vision')}>Vision</a>
        <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact us</a>
        <a href="#team" onClick={(e) => handleSmoothScroll(e, 'team')}>Team</a>
        <a href="#blog" onClick={(e) => handleSmoothScroll(e, 'blog')}>Blogs</a>
        </div>
        <div className="social-icons">
        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>☰</div>
    </nav>

    <section className="hero" id="about">
        <div className="hero-content">
        <h1>A steady salary is a reminder that small, consistent steps can lead to long-term success.</h1>
        <p>Keep track of receivables and payables. Make collections simpler and faster.</p>
        <a href="https://play.google.com/store/games?hl=en&pli=1">
            <img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" 
                alt="Get it on Google Play" height="60" />
        </a>
        </div>
        <div className="hero-image">
                <img className='image' src={logo}/>
        </div>
    </section>
    <section className="intro" id="vision">
        <div className="intro-content">
        <h2>Introducing Work Wallet</h2>
        <ul id='lists'>
            <li>A Work Wallet is a digital platform designed to simplify and enhance workplace management by streamlining processes such as safety compliance, task tracking, and communication.</li>
            <li>It allows organizations to centralize essential information like employee certifications, safety documents, and incident reports, making them easily accessible via mobile devices.</li>
            <li>With features like real-time task updates, digital permits, and automated alerts for expiring credentials, a Work Wallet helps ensure regulatory compliance and boosts efficiency.</li>
            <li>It also fosters better communication between teams, enabling swift sharing of updates and safety alerts.</li>
        </ul>
        </div>
        <div className="intro-image">
        <img src="https://www.veltris.com/wp-content/uploads/2022/10/Who-we-are.png" alt="Team collaboration" />
        </div>
    </section>

    <section className="team" id="team">
        <div className="container">
        <h2>Our Team</h2>
        <div className="team-grid">
            <div className="team-member">
            <img src="https://okcredit.com/img/gaurav.jpg" alt="Team Member" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
            </div>
            <div className="team-member">
            <img src="https://okcredit.com/img/harsh.jpg" alt="Team Member" />
            <h3>Jane Smith</h3>
            <p>CTO</p>
            </div>
            <div className="team-member">
            <img src="https://okcredit.com/img/aditya.jpg" alt="Team Member" />
            <h3>Mike Johnson</h3>
            <p>Head of Operations</p>
            </div>
        </div>
        </div>
    </section>

    <section className="contact" id="contact">
        <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-grid">
            <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            <div className="contact-details">
                <p>Email: contact@workwallet.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Address: 123 Business Street, Suite 100</p>
            </div>
            </div>
            <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="4" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
            </form>
        </div>
        </div>
    </section>
 <section className="blogs" id="blog">
                <div className="container">
                    <h2>Blogs</h2>
                    <div className="blog-grid">
                        {['About Unorganised force in India', 'For Capital Markets and Banking'].map((title, index) => (
                            <div key={index} className="blog-card">
                                <h3>{title}</h3>
                                <p>Understand risk and enhance accuracy across the entire trade life cycle.</p>
                                {/* Use Link for navigation */}
                                <Link to="/first" className="read-more">Read More →</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

    <footer>
        <div className="footer-content">
        <div className="footer-section">
            <h3>About Us</h3>
            <p>Work Wallet is your comprehensive solution for managing work and finances in the digital age.</p>
        </div>
        <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
            <li><a href="#vision">Vision</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#blog">Blog</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h3>Contact</h3>
            <ul>
            <li>Email: contact@workwallet.com</li>
            <li>Phone: (555) 123-4567</li>
            <li>Address: 123 Business St</li>
            </ul>
        </div>
        <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        </div>
        </div>
        <div className="copyright">
        <p>&copy; 2024 Work Wallet. All rights reserved.</p>
        </div>
    </footer>
    </div>
);
};

export default Work;