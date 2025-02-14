import React, { useState } from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import './EditBooking.css';

const EditBooking = ({ booking, onSave }) => {
  const [formData, setFormData] = useState({ ...booking });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div>
      <Navbar />
      <main className="edit-booking">
        <h1>Edit Booking</h1>
        <form onSubmit={handleSubmit}>
          {/* Add Input Fields */}
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default EditBooking;
