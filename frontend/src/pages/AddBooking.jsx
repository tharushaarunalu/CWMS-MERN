import React, { useState } from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import './AddBooking.css';

const AddBooking = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    packageType: '',
    washingPoint: '',
    fullName: '',
    mobileNo: '',
    washDate: '',
    washTime: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
  };

  return (
    <div>
      <Navbar />
      <main className="add-booking">
        <h1>Add Booking</h1>
        <form onSubmit={handleSubmit}>
          {/* Add Input Fields */}
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default AddBooking;
