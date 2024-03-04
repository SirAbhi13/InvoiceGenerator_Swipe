import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isOnProduct = location.pathname.includes('products');

  return (
    <div style={{width:"100vw", background:"#0d6efd", color:"white", display:'flex', justifyContent:"space-around", alignItems:"center", height:"10vh"}}>
    <Link className="navbar-brand" to="/" style={{fontSize:"1.2rem"}}>
      Abhinav's Swipe Assignment
    </Link>
  <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
    <Link className={`nav-link ms-3 fs-5 ${!isOnProduct && 'active'}`} to="/">
               Invoice
    </Link>
  <Link className={`nav-link ms-3 fs-5 ${isOnProduct && 'active'}`} to="/products">
    Product
  </Link>
  </div>
  </div>
  );
};

export default Navbar;
