import React from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import BookingCard from '../components/BookingCard';
import './SearchResults.css';

const SearchResults = ({ bookings }) => {
  return (
    <div>
      <Navbar />
      <main className="results">
        <h1>Search Results</h1>
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <BookingCard key={booking._id} booking={booking} />
          ))
        ) : (
          <p>No bookings found.</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default SearchResults;
