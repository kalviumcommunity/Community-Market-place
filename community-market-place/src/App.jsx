import React from "react";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <HomeScreen />
    </div>
  );
}

export default App;