import React from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <main className="dashboard">
        <h1>Admin Dashboard</h1>
        {/* Add Dashboard Cards */}
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
