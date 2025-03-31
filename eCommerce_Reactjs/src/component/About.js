import React from 'react';
import './About.css';

const About = () => {
  const heroStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${process.env.PUBLIC_URL}/resources/img/banner-voucher.jfif)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    marginBottom: '60px'
  };

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section style={heroStyle}>
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>Your Trusted Partner in Online Shopping</p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>To provide exceptional online shopping experiences by offering high-quality products, competitive prices, and outstanding customer service.</p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>To become the leading e-commerce platform, setting new standards in customer satisfaction and digital retail innovation.</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-image">
              <img src={`${process.env.PUBLIC_URL}/resources/img/b1.jpg`} alt="CEO" />
            </div>
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src={`${process.env.PUBLIC_URL}/resources/img/b2.jpg`} alt="Head of Operations" />
            </div>
            <h3>Jane Smith</h3>
            <p>Head of Operations</p>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src={`${process.env.PUBLIC_URL}/resources/img/b3.jpg`} alt="Technical Director" />
            </div>
            <h3>Mike Johnson</h3>
            <p>Technical Director</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <i className="fas fa-heart"></i>
            <h3>Customer First</h3>
            <p>We prioritize our customers' needs and satisfaction above everything else.</p>
          </div>
          <div className="value-card">
            <i className="fas fa-star"></i>
            <h3>Quality</h3>
            <p>We maintain the highest standards in everything we do.</p>
          </div>
          <div className="value-card">
            <i className="fas fa-handshake"></i>
            <h3>Integrity</h3>
            <p>We operate with honesty and transparency in all our dealings.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>123 E-commerce Street, Digital City, 12345</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>contact@ecommerce.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 