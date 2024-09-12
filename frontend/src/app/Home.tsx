// src/pages/Home.js
import React from 'react'
import { Link } from "react-router-dom"
import '../css/home.css'

export const Home = () => {
  return (
    <div className="homepage-div">
      <p className="animated-text">Welcome to Stylo<span className="dots">...</span></p>
      <div className="btn-container">
        <Link to="/" className="button">Home</Link>
        <Link to="/content" className="button">Content</Link>
        <Link to="/about" className="button">About</Link>
      </div>
    </div>
  );
};
