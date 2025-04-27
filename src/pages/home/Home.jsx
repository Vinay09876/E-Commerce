import React from "react";
import Announcement from "../../components/announcement/Announcement";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import Categorie from "../../components/categories/Categorie";
import NewArrivals from "../../components/products/NewArrivals";
import Bestsellers from "../../components/products/Bestsellers";
import NewsLetter from "../../components/newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categorie />
      <NewArrivals />
      <Bestsellers />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;
