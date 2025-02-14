import React from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <header className="hero">
        <h1>Welcome to Car Wash Management System</h1>
        <p>Your one-stop solution for car washing and repairs.</p>
        <a href="/plans" className="btn btn-primary">Explore Plans</a>
      </header>
      <section className="services">
        <h2>Our Services</h2>
        {/* Add Service Cards */}
      </section>
      <Footer />
    </div>
  );
};

export default Home;
