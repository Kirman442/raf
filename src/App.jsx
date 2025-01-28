import React from 'react';
// import { HashRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"
import ScrollToTopButton from "./components/ScrollToTopButton";
import Head from './components/Head';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceBankruptcy from './pages/ourservices/bankruptcy';
import ServiceSubsidiary from './pages/ourservices/subsidiary';
// import About from './pages/About';
// import NotFound from './pages/404';
// import PortfolioKunstkarten from './pages/portfolio/Kunstkarten'
// import PortfolioFlusssystem from './pages/portfolio/Flusssystem'
// import PortfolioUbahn from './pages/portfolio/Ubahn'
// import PortfolioBergbau from './pages/portfolio/Bergbau'
// import PortfolioClustering from './pages/portfolio/Clustering'
// import PortfolioDresden from './pages/portfolio/Dresden'


function App() {
  return (
    <div>
      <Head />
      <ScrollToTop />
      <ScrollToTopButton />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ourservices/bankruptcy" element={<ServiceBankruptcy />} />
        <Route path="/ourservices/subsidiary" element={<ServiceSubsidiary />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/portfolio/Kunstkarten" element={<PortfolioKunstkarten />} />
        <Route path="/portfolio/Flusssystem" element={<PortfolioFlusssystem />} />
        <Route path="/portfolio/Ubahn" element={<PortfolioUbahn />} />
        <Route path="/portfolio/Bergbau" element={<PortfolioBergbau />} />
        <Route path="/portfolio/Clustering" element={<PortfolioClustering />} />
        <Route path="/portfolio/Dresden" element={<PortfolioDresden />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
