import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tomorrow from './components/Tomorrow';
import Offer from './components/Offer';
import Testimonial from './components/Testimonial';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Tomorrow />
        <Offer />
        <Testimonial />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
