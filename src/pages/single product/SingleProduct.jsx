import React, { useState } from "react";
import "./SingleProduct.css";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import { allProducts } from "../../data";
import Footer from "../../components/footer/Footer";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

function SingleProduct() {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const { id } = useParams();
  const product = allProducts.find((product) => product.id === parseInt(id));

  const colors = ["red", "green", "purple", "black", "teal"];
  const [selectedColor, setSelectedColor] = useState(null);
  const handleSelectedColor = (color) => {
    setSelectedColor(color);
  };

  const sizes = ["XS", "S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState(null);
  const handleSelectedSize = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="singleProduct-container">
      <Navbar />
      <div className="singleProduct-wrapper">
        <div className="singleProduct-imageSection">
          <img src={product.img} alt="" className="singleProduct-image" />
        </div>
        <div className="singleProduct-infoSection">
          <h2 className="singleProduct-title">{product.title}</h2>
          <p className="singleProduct-nymber">{product.price}</p>
          <h4 className="description-title">Description</h4>
          <p className="singleProduct-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            reiciendis officiis unde totam quia impedit consequuntur tempore
            nobis nesciunt nisi. Iusto quod quaerat pariatur distinctio in
            doloribus molestias sed enim?
          </p>
          <div className="singleProduct-options">
            <div className="colors-section">
              <h4>Colors</h4>
              <div className="colors">
                {colors.map((color) => (
                  <div
                    key={color}
                    className="color-circle"
                    style={{
                      backgroundColor: color,
                      outline:
                        selectedColor === color ? `3px solid ${color}` : "",
                    }}
                    onClick={() => handleSelectedColor(color)}
                  ></div>
                ))}
              </div>
            </div>

            <div className="sizes-section">
              <h4>Size</h4>
              <div className="sizes">
                {sizes.map((size) => (
                  <span
                    key={size}
                    style={{
                      border: selectedSize === size ? "1px solid #ccc" : "",
                    }}
                    onClick={() => handleSelectedSize(size)}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="addToCart">
            <button onClick={() => handleAddToCart(product)}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleProduct;
