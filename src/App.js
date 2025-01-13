import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PopularMenu from './components/PopularMenu';
import PopularDishes from './components/PopularDishes';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <PopularMenu />
      <PopularDishes />
      <Footer />
    </div>
  );
}

export default App;
