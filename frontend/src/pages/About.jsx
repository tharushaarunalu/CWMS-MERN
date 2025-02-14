import React from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  return (
    <div>
      <Navbar />
      <main className="about">
        <h1>About Us</h1>
        <p>
          At Car Wash Management System, we provide top-notch car wash and repair services to keep your vehicle in excellent condition.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
