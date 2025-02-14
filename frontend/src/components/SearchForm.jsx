import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ onSearch }) => {
  const [mobileNo, setMobileNo] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (mobileNo.trim()) {
      onSearch(mobileNo);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <label htmlFor="mobileNo">Search by Mobile Number:</label>
      <input
        type="text"
        id="mobileNo"
        value={mobileNo}
        onChange={(e) => setMobileNo(e.target.value)}
        placeholder="Enter mobile number"
        required
      />
      <button type="submit" className="btn btn-search">Search</button>
    </form>
  );
};

export default SearchForm;
