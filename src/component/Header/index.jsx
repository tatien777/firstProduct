import React from 'react';
import CartHeader from './cart';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import RegisterForm from '../RegisterForm';
import LoginForm from '../LoginForm';
// import ProducList from '../ProductList';

export default function Header(props) {
  // console.log(props.thePrice,'test header');
    return (
        // <header>
       
        
        <div id="header-sticky" className="header-area box-90 sticky-header" >
        <div className="container-fluid" >
        <div className="row align-items-center" >
        <div className="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-5 d-flex align-items-center pos-relative">
          <div className="logo">
            <a href="#" ><img src="./assets/logo_shop.png" alt="" /></a>
          </div>

          <div className="category-menu">
            <h4>Category</h4>
            <ul>
              <li><a href="#"><i className="fas fa-shopping-cart"></i> Table lamp</a></li>
              <li><a href="#"><i className="fas fa-shopping-cart"></i> Furniture</a></li>
              <li><a href="#"><i className="fas fa-shopping-cart"></i> Chair</a></li>
              <li><a href="#"><i className="fas fa-shopping-cart"></i> Men</a></li>
              <li><a href="#"><i className="fas fa-shopping-cart"></i> Women</a></li>
              <li><a href="#"><i className="fas fa-shopping-cart"></i> Cloth</a></li>
              <li><a href="#"><i className="fas fa-shopping-cart"></i> Trend</a></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-8 col-lg-6 col-md-8 col-8 d-none d-xl-block">
          <div className="main-menu text-center">
            <nav id="mobile-menu" style= {{display: 'block'}}>
              <ul>
             
                <li>
                <Link to={`./`}>Home</Link>
                  {/* <a href="./index.html">Home</a> */}
                </li>
                <li>
                  <a href="#">Pages</a>
                  <ul className="submenu">
                    <li>
                    <Link to={`./detail`}>Product Detail</Link>
                      {/* <a href="./detail.html">Product Detail</a> */}
                    </li>
                    <li>
                    {/* <Route path="./login" component={LoginForm} /> */}
                    
                    <Link to={`./login`}>login</Link>
                      {/* <a href="./login.html">login</a> */}
                    </li>
                    <li>
                    <Link to={`./register`}>Register</Link>
                    
                      {/* <a href="./register.html">Register</a> */}
                    </li>
                    <li>
                    <Link to={`./shooping`}>Shoping</Link>
                      {/* <a href="./cart.html">Shoping Cart</a> */}
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <CartHeader {...props}/>
       <div className="col-12 d-xl-none">
          <div className="mobile-menu"></div>
        </div>
      </div>
    </div>
    </div >
    )    
    

}