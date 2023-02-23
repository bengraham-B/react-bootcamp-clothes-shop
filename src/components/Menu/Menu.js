import React from 'react'
import { Routes, Route, Link  } from "react-router-dom";
import './menu.styles.css'

export default function Menu() {
  return (
    <div className="menu-container">
        <div className="home route-link-container">
            <Link to="/">Home</Link>
        </div>
        <div className="product route-link-container">
            <Link to="/product-page">Product Page</Link>
        </div>
        <div className="legal route-link-container">
            <Link to="/legal-page">Legal Page</Link>
        </div>
        <div className="user-profile route-link-container">
            <Link to="/intrest-calc">Intrest Calculator</Link>
        </div>
        <div className="user-profile route-link-container">
            <Link to="/user-profile">User Profile</Link>
        </div>
    </div>
  )
}
