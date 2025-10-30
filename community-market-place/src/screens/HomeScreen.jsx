import React from "react";
import "./HomeScreen.css";
import ProductCard from "../components/ProductCard";

import chairImg from "../assets/chair.jpg";
import mugImg from "../assets/mug.jpg";
import lampImg from "../assets/lamp.jpg";
import teaImg from "../assets/tea.jpg";

function HomeScreen() {
  const products = [
    { id: 1, image: chairImg, title: "Wooden Chair", price: 1200, seller: "Aarav's Decor", category: "Furniture" },
    { id: 2, image: mugImg, title: "Ceramic Coffee Mug", price: 350, seller: "Maya's Store", category: "Kitchen" },
    { id: 3, image: lampImg, title: "Modern Lamp", price: 999, seller: "Urban Light", category: "Home Decor" },
    { id: 4, image: teaImg, title: "Green Tea Pack", price: 450, seller: "Nature's Blend", category: "Grocery" },
    
  ];

  return (
    <div className="home-container">
      <h2 className="home-title">Featured Products</h2>
      <div className="product-grid">
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;