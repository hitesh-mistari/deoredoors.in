import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Reviews from './components/Reviews';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import AboutPage from './components/AboutPage';
import ProductsPage from './components/ProductsPage';
import GalleryPage from './components/GalleryPage';
import ContactPage from './components/ContactPage';
import ContactShortcuts from './components/ContactShortcuts';
import ScrollToTop from './components/ScrollToTop';
import HowToReach from './components/HowToReach';

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Products />
              <Reviews />
              <Features />
              <About />
              <HowToReach />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
      <ContactShortcuts />
    </div>
  );
}

export default App;
