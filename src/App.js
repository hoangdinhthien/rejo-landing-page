import React from "react";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Recommend from "./components/Recommend";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Services from "./components/Services";
import TourGuides from "./components/TourGuides";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      {/* <Testimonials /> */}
      <TourGuides />
      <Footer />
    </>
  );
}
