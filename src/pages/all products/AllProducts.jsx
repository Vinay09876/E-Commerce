import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Products from "../../components/products/Products";
import { allProducts } from "../../data";

function AllProducts() {
  return (
    <>
      <Navbar />
      <Products heading="Products" items={allProducts} />
      <Footer />
    </>
  );
}

export default AllProducts;
