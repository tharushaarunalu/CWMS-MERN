import React from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import './WashingPoints.css';

const WashingPoints = () => {
  return (
    <div>
      <Navbar />
      <main className="points">
        <h1>Washing Points</h1>
        <div className="locations">
          {/* Add Washing Point Locations */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WashingPoints;
