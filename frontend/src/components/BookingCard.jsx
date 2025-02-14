import React from 'react';
import './BookingCard.css';

const BookingCard = ({ booking }) => {
  return (
    <div className="booking-card">
      <h3>{booking.packageType}</h3>
      <p><b>Washing Point:</b> {booking.washingPoint}</p>
      <p><b>Customer Name:</b> {booking.fullName}</p>
      <p><b>Mobile No:</b> {booking.mobileNo}</p>
      <p><b>Date:</b> {new Date(booking.washDate).toLocaleDateString()}</p>
      <p><b>Time:</b> {booking.washTime}</p>
      <p><b>Status:</b> {booking.status}</p>
      <div className="booking-actions">
        <button className="btn btn-edit">Edit</button>
        <button className="btn btn-delete">Delete</button>
      </div>
    </div>
  );
};

export default BookingCard;
