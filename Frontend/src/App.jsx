import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Welcome to Trio Vibe</h1>
        <p>Your one-stop solution for all your music needs.</p>
      </div>
    </div>
  );
}