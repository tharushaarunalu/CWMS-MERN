import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Statistics from './components/Statistics';
import AIQuestionForm from './components/AIQuestionForm';
import Plans from './components/Plans';

const App = () => {
  const isAdmin = true; // Example condition, replace with real logic

  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Statistics />
              <AIQuestionForm />
              <Plans />
            </>
          }
        />
        {isAdmin && (
          <Route
            path="/admin"
            element={<div>Admin Dashboard Component Goes Here</div>}
          />
        )}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
