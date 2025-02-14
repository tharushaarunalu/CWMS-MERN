import React from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <main className="contact">
        <h1>Contact Us</h1>
        <form>
          <label>Your Name:</label>
          <input type="text" placeholder="Enter your name" required />
          <label>Your Email:</label>
          <input type="email" placeholder="Enter your email" required />
          <label>Message:</label>
          <textarea placeholder="Enter your message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
