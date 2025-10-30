import React from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import chairImg from "../assets/chair.jpg";
import mugImg from "../assets/mug.jpg";
import teaImg from "../assets/tea.jpg";
import lampImg from "../assets/lamp.jpg";
import sofaImg from "../assets/sofa.jpg";
import plantImg from "../assets/plant.jpg";
import clockImg from "../assets/clock.jpg";
import basketImg from "../assets/basket.jpg";
import "./HomeScreen.css";

const products = [
  {
    id: 1,
    name: "Vintage Wooden Chair",
    price: "$75.99",
    seller: "Furniture Studio",
    category: "Furniture",
    image: chairImg,
  },
  {
    id: 2,
    name: "Handmade Ceramic Mug",
    price: "$24.50",
    seller: "Pottery Crafts",
    category: "Kitchenware",
    image: mugImg,
  },
  {
    id: 3,
    name: "Classic Table Lamp",
    price: "$40.00",
    seller: "Home Lights",
    category: "Lighting",
    image: lampImg,
  },
  {
    id: 4,
    name: "Green Tea Set",
    price: "$35.00",
    seller: "Nature’s Brew",
    category: "Kitchenware",
    image: teaImg,
  },
  {
    id: 5,
    name: "Modern Fabric Sofa",
    price: "$249.99",
    seller: "Comfort Homes",
    category: "Furniture",
    image: sofaImg,
  },
  {
    id: 6,
    name: "Indoor Potted Plant",
    price: "$18.00",
    seller: "Urban Green",
    category: "Decor",
    image: plantImg,
  },
  {
    id: 7,
    name: "Rustic Wall Clock",
    price: "$45.00",
    seller: "TimeCraft",
    category: "Home Decor",
    image: clockImg,
  },
  {
    id: 8,
    name: "Woven Storage Basket",
    price: "$28.50",
    seller: "Crafty Hands",
    category: "Storage",
    image: basketImg,
  },
];

const HomeScreen = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
