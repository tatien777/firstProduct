import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import result from './data';

const value = [1, 2, 3, 4]
function App() {
  return (
    <>
      {/* <!-- header start --> */}
      <header>
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
                  <a href="./index.html">Home</a>
                </li>
                <li>
                  <a href="#">Pages</a>
                  <ul className="submenu">
                    <li>
                      <a href="./detail.html">Product Detail</a>
                    </li>
                    <li>
                      <a href="./login.html">login</a>
                    </li>
                    <li>
                      <a href="./register.html">Register</a>
                    </li>
                    <li>
                      <a href="./cart.html">Shoping Cart</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-xl-2 col-lg-6 col-md-6 col-5 col-sm-7 pl-0">
          <div className="header-right f-right">
            <ul>
              <li className="search-btn">
                <a className="search-btn nav-search search-trigger" href="#"><i className="fas fa-search"></i></a>
              </li>
              <li className="login-btn"><a href="#"><i className="far fa-user"></i></a></li>
              <li className="d-shop-cart"><a href="#"><i className="fas fa-shopping-cart"></i> <span className="cart-count">3</span></a>
                <ul className="minicart">
                  <li>
                    <div className="cart-img">
                      <a href="#">
                        <img src="./assets/pro1.jpg" alt="" />
                      </a>
                    </div>
                    <div className="cart-content">
                      <h3>
                        <a href="#">Black &amp; White Shoes</a>
                      </h3>
                      <div className="cart-price">
                        <span className="new">$ 229.9</span>
                        <span>
                          <del>$239.9</del>
                        </span>
                      </div>
                    </div>
                    <div className="del-icon">
                      <a href="#">
                        <i className="far fa-trash-alt"></i>
                      </a>
                    </div>

                    <li>  </li>
                    <div className="cart-img">
                      <a href="#">
                        <img src="./assets/pro2.jpg" alt="" />
                      </a>
                    </div>
                    <div className="cart-content">
                      <h3>
                        <a href="#">Black &amp; White Shoes</a>
                      </h3>
                      <div className="cart-price">
                        <span className="new">$ 229.9</span>
                        <span>
                          <del>$239.9</del>
                        </span>
                      </div>
                    </div>
                    <div className="del-icon">
                      <a href="#">
                        <i className="far fa-trash-alt"></i>
                      </a>
                    </div>

                    <li> </li>
                    <div className="cart-img">
                      <a href="#">
                        <img src="./assets/pro3.jpg" alt="" />
                      </a>
                    </div>
                    <div className="cart-content">
                      <h3>
                        <a href="#">Black &amp; White Shoes</a>
                      </h3>
                      <div className="cart-price">
                        <span className="new">$ 229.9</span>
                        <span>
                          <del>$239.9</del>
                        </span>
                      </div>
                    </div>
                    <div className="del-icon">
                      <a href="#">
                        <i className="far fa-trash-alt"></i>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="total-price">
                      <span className="f-left">Total:</span>
                      <span className="f-right">$300.0</span>
                    </div>
                  </li>
                  <li>
                    <div className="checkout-link">
                      <a href="#">Shopping Cart</a>
                      <a className="red-color" href="#">Checkout</a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 d-xl-none">
          <div className="mobile-menu"></div>
        </div>
      </div>
    </div>
    </div >
</header >

    {/* < !--header end-- >*/ }

    <main>

    {/* <!-- shop-area start --> */ }
    < section className = "shop-area pt-150 pb-100" >
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            {/* <!-- tab filter --> */}
            <div className="row mb-10">
              <div className="col-xl-5 col-lg-6 col-md-6">
                <div className="product-showing mb-40">
                  <p>Showing 1–22 of 32 results</p>
                </div>
              </div>
            </div>
            {/* <!-- tab content --> */}
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="row">
                  {/* <!-- ProductItem --> */}
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="product-wrapper mb-50">
                      <div className="product-img mb-25">
                        <a href="#">
                          <img src="./assets/pro1.jpg" alt="" />
                          <img className="secondary-img" src="./assets/pro2.jpg" alt="" />
                        </a>
                        <div className="product-action text-center">
                          <a href="#" title="Shoppingb Cart">
                            <i className="fas fa-shopping-cart"></i>
                          </a>
                          <a href="#" title="Quick View">
                            <i className="fas fa-search"></i>
                          </a>

                        </div>
                      </div>
                      <div className="product-content pr-0">
                        <div className="pro-cat mb-10">
                          <a href="#">furniture</a>
                        </div>
                        <h4>
                          <a href="#">Minimal Deco Furniture</a>
                        </h4>
                        <div className="product-meta">
                          <div className="pro-price">
                            <span>$119.00 USD</span>
                            <span className="old-price">$230.00 USD</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /ProductItem --> */}
                  {/* <!-- ProductItem --> */}
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="product-wrapper mb-50">
                      <div className="product-img mb-25">
                        <a href="#">
                          <img src="./assets/pro2.jpg" alt="" />
                          <img className="secondary-img" src="./assets/pro3.jpg" alt="" />
                        </a>
                        <div className="product-action text-center">
                          <a href="#" title="Shoppingb Cart">
                            <i className="fas fa-shopping-cart"></i>
                          </a>
                          <a href="#" title="Quick View">
                            <i className="fas fa-search"></i>
                          </a>

                        </div>
                        <div className="sale-tag">
                          <span className="sale">sale</span>
                        </div>
                      </div>
                      <div className="product-content pr-0">
                        <div className="pro-cat mb-10">
                          <a href="#">furniture</a>
                        </div>
                        <h4>
                          <a href="#">Minimal Deco Furniture</a>
                        </h4>
                        <div className="product-meta">
                          <div className="pro-price">
                            <span>$119.00 USD</span>
                            <span className="old-price">$230.00 USD</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /ProductItem --> */}
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="product-wrapper mb-50">
                      <div className="product-img mb-25">
                        <a href="#">
                          <img src="./assets/pro3.jpg" alt="" />
                          <img className="secondary-img" src="./assets/pro4.jpg" alt="" />
                        </a>
                        <div className="product-action text-center">
                          <a href="#" title="Shoppingb Cart">
                            <i className="fas fa-shopping-cart"></i>
                          </a>
                          <a href="#" title="Quick View">
                            <i className="fas fa-search"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content pr-0">
                        <div className="pro-cat mb-10">
                          <a href="#">furniture</a>
                        </div>
                        <h4>
                          <a href="#">Minimal Deco Furniture</a>
                        </h4>
                        <div className="product-meta">
                          <div className="pro-price">
                            <span>$119.00 USD</span>
                            <span className="old-price">$230.00 USD</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="product-wrapper mb-50">
                      <div className="product-img mb-25">
                        <a href="#">
                          <img src="./assets/pro4.jpg" alt="" />
                          <img className="secondary-img" src="./assets/pro5.jpg" alt="" />
                        </a>
                        <div className="product-action text-center">
                          <a href="#" title="Shoppingb Cart">
                            <i className="fas fa-shopping-cart"></i>
                          </a>
                          <a href="#" title="Quick View">
                            <i className="fas fa-search"></i>
                          </a>

                        </div>
                      </div>
                      <div className="product-content pr-0">
                        <div className="pro-cat mb-10">
                          <a href="#">furniture</a>
                        </div>
                        <h4>
                          <a href="#">Minimal Deco Furniture</a>
                        </h4>
                        <div className="product-meta">
                          <div className="pro-price">
                            <span>$119.00 USD</span>
                            <span className="old-price">$230.00 USD</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="product-wrapper mb-50">
                      <div className="product-img mb-25">
                        <a href="#">
                          <img src="./assets/pro5.jpg" alt="" />
                          <img className="secondary-img" src="./assets/pro6.jpg" alt="" />
                        </a>
                        <div className="product-action text-center">
                          <a href="#" title="Shoppingb Cart">
                            <i className="fas fa-shopping-cart"></i>
                          </a>
                          <a href="#" title="Quick View">
                            <i className="fas fa-search"></i>
                          </a>

                        </div>
                      </div>
                      <div className="product-content pr-0">
                        <div className="pro-cat mb-10">
                          <a href="#">furniture</a>
                        </div>
                        <h4>
                          <a href="#">Minimal Deco Furniture</a>
                        </h4>
                        <div className="product-meta">
                          <div className="pro-price">
                            <span>$119.00 USD</span>
                            <span className="old-price">$230.00 USD</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="product-wrapper mb-50">
                      <div className="product-img mb-25">
                        <a href="#">
                          <img src="./assets/pro6.jpg" alt="" />
                          <img className="secondary-img" src="./assets/pro7.jpg" alt="" />
                        </a>
                        <div className="product-action text-center">
                          <a href="#" title="Shoppingb Cart">
                            <i className="fas fa-shopping-cart"></i>
                          </a>
                          <a href="#" title="Quick View">
                            <i className="fas fa-search"></i>
                          </a>

                        </div>
                      </div>
                      <div className="product-content pr-0">
                        <div className="pro-cat mb-10">
                          <a href="#">furniture</a>
                        </div>
                        <h4>
                          <a href="#">Minimal Deco Furniture</a>
                        </h4>
                        <div className="product-meta">
                          <div className="pro-price">
                            <span>$119.00 USD</span>
                            <span className="old-price">$230.00 USD</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="product-wrapper mb-50">
                      <div className="product-img mb-25">
                        <a href="#">
                          <img src="./assets/pro7.jpg" alt="" />
                          <img className="secondary-img" src="./assets/pro8.jpg" alt="" />
                        </a>
                        <div className="product-action text-center">
                          <a href="#" title="Shoppingb Cart">
                            <i className="fas fa-shopping-cart"></i>
                          </a>
                          <a href="#" title="Quick View">
                            <i className="fas fa-search"></i>
                          </a>

                        </div>
                      </div>
                      <div className="product-content pr-0">
                        <div className="pro-cat mb-10">
                          <a href="#">furniture</a>
                        </div>
                        <h4>
                          <a href="#">Minimal Deco Furniture</a>
                        </h4>
                        <div className="product-meta">
                          <div className="pro-price">
                            <span>$119.00 USD</span>
                            <span className="old-price">$230.00 USD</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="product-wrapper mb-50">
                      <div className="product-img mb-25">
                        <a href="#">
                          <img src="./assets/pro8.jpg" alt="" />
                          <img className="secondary-img" src="./assets/pro9.jpg" alt="" />
                        </a>
                        <div className="product-action text-center">
                          <a href="#" title="Shoppingb Cart">
                            <i className="fas fa-shopping-cart"></i>
                          </a>
                          <a href="#" title="Quick View">
                            <i className="fas fa-search"></i>
                          </a>

                        </div>
                        <div className="sale-tag">
                          <span className="sale">sale</span>
                        </div>
                      </div>
                      <div className="product-content pr-0">
                        <div className="pro-cat mb-10">
                          <a href="#">furniture</a>
                        </div>
                        <h4>
                          <a href="#">Minimal Deco Furniture</a>
                        </h4>
                        <div className="product-meta">
                          <div className="pro-price">
                            <span>$119.00 USD</span>
                            <span className="old-price">$230.00 USD</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="product-wrapper mb-50">
                      <div className="product-img mb-25">
                        <a href="#">
                          <img src="./assets/pro9.jpg" alt="" />
                          <img className="secondary-img" src="./assets/pro1.jpg" alt="" />
                        </a>
                        <div className="product-action text-center">
                          <a href="#" title="Shoppingb Cart">
                            <i className="fas fa-shopping-cart"></i>
                          </a>
                          <a href="#" title="Quick View">
                            <i className="fas fa-search"></i>
                          </a>

                        </div>
                      </div>
                      <div className="product-content pr-0">
                        <div className="pro-cat mb-10">
                          <a href="#">furniture</a>
                        </div>
                        <h4>
                          <a href="#">Minimal Deco Furniture</a>
                        </h4>
                        <div className="product-meta">
                          <div className="pro-price">
                            <span>$119.00 USD</span>
                            <span className="old-price">$230.00 USD</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="product-wrapper mb-50">
                      <div className="product-img mb-25">
                        <a href="#">
                          <img src="./assets/pro9.jpg" alt="" />
                          <img className="secondary-img" src="./assets/pro1.jpg" alt="" />
                        </a>
                        <div className="product-action text-center">
                          <a href="#" title="Shoppingb Cart">
                            <i className="fas fa-shopping-cart"></i>
                          </a>
                          <a href="#" title="Quick View">
                            <i className="fas fa-search"></i>
                          </a>

                        </div>
                      </div>
                      <div className="product-content pr-0">
                        <div className="pro-cat mb-10">
                          <a href="#">furniture</a>
                        </div>
                        <h4>
                          <a href="#">Minimal Deco Furniture</a>
                        </h4>
                        <div className="product-meta">
                          <div className="pro-price">
                            <span>$119.00 USD</span>
                            <span className="old-price">$230.00 USD</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="product-wrapper mb-50">
                      <div className="product-img mb-25">
                        <a href="#">
                          <img src="./assets/pro11.jpg" alt="" />
                          <img className="secondary-img" src="./assets/pro12.jpg" alt="" />
                        </a>
                        <div className="product-action text-center">
                          <a href="#" title="Shoppingb Cart">
                            <i className="fas fa-shopping-cart"></i>
                          </a>
                          <a href="#" title="Quick View">
                            <i className="fas fa-search"></i>
                          </a>

                        </div>
                      </div>
                      <div className="product-content pr-0">
                        <div className="pro-cat mb-10">
                          <a href="#">furniture</a>
                        </div>
                        <h4>
                          <a href="#">Minimal Deco Furniture</a>
                        </h4>
                        <div className="product-meta">
                          <div className="pro-price">
                            <span>$119.00 USD</span>
                            <span className="old-price">$230.00 USD</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="product-wrapper mb-50">
                      <div className="product-img mb-25">
                        <a href="#">
                          <img src="./assets/pro10.jpg" alt="" />
                          <img className="secondary-img" src="./assets/pro11.jpg" alt="" />
                        </a>
                        <div className="product-action text-center">
                          <a href="#" title="Shoppingb Cart">
                            <i className="fas fa-shopping-cart"></i>
                          </a>
                          <a href="#" title="Quick View">
                            <i className="fas fa-search"></i>
                          </a>

                        </div>
                        <div className="sale-tag">
                          <span className="sale">sale</span>
                        </div>
                      </div>
                      <div className="product-content pr-0">
                        <div className="pro-cat mb-10">
                          <a href="#">furniture</a>
                        </div>
                        <h4>
                          <a href="#">Minimal Deco Furniture</a>
                        </h4>
                        <div className="product-meta">
                          <div className="pro-price">
                            <span>$119.00 USD</span>
                            <span className="old-price">$230.00 USD</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--SideBar --> */}
          <div className="col-xl-3 col-lg-4">
            <div className="sidebar-shop">
              <div className="shop-widget">
                <h3 className="shop-title">Search by</h3>
                <form action="#" className="shop-search">
                  <input type="text" placeholder="Your keyword...." />
                  <button><i className="fa fa-search"></i></button>
                </form>
              </div>
              {/* <!--
                            <div className="shop-widget">
                                                                    <h3 className="shop-title">Filter selection</h3>
                                                                    <div className="price-filter">
                                                                      <div id="slider-range" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div className="ui-slider-range ui-corner-all ui-widget-header" style="left: 15%; width: 45%;"></div><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style="left: 15%;"></span><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style="left: 60%;"></span></div>
                                                                      <input type="text" id="amount">
                                </div>
                                                                    </div> --> */}

              <div className="shop-widget">
                <h3 className="shop-title">SHOP BY</h3>
                <ul className="shop-link">
                  <li><a href="#">Name: A-Z</a></li>
                  <li><a href="#">Name: Z-A</a></li>
                  <li><a href="#">Price: High to Low</a></li>
                  <li><a href="#">Price: Low to High</a></li>
                  <li><a href="#">Product: Top Sales</a></li>
                </ul>
              </div>

              <div className="shop-widget">
                <h3 className="shop-title">Recent Product</h3>
                <ul className="shop-sidebar-product">
                  <li>
                    <div className="side-pro-img" >
                    <a href="#"><img src="./assets/shop-rsp3.jpg" alt=""/></a>
              </div>
                  <div className="side-pro-content">
                    <div className="side-pro-rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h5><a href="#">Raglan Baseball-Style</a></h5>
                    <div className="side-pro-price">
                      <span>$119.00 USD</span>
                    </div>
                  </div>
                                    </li>
                <li>
                  <div className="side-pro-img" >
                  <a href="#"><img src="./assets/shop-rsp2.jpg" alt="" /></a>
              </div>
                <div className="side-pro-content">
                  <div className="side-pro-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h5><a href="#">Raglan Baseball-Style</a></h5>
                  <div className="side-pro-price">
                    <span>$119.00 USD</span>
                  </div>
                </div>
                                    </li>
              <li>
                <div className="side-pro-img" >
                <a href="#"><img src="./assets/shop-rsp4.jpg" alt="" /></a>
                                        </div>
              <div className="side-pro-content">
                <div className="side-pro-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h5><a href="#">Raglan Baseball-Style</a></h5>
                <div className="side-pro-price">
                  <span>$119.00 USD</span>
                </div>
              </div>
                                    </li>
                                </ul>
        </div>

        <div className="shop-widget">
          <div className="shop-sidebar-banner">
            <a href="#"><img src="./assets/shop-banner.jpg" alt="" /></a>
          </div>
        </div>
      </div>
                    </div >
    {/* <!-- /SideBar --> */ }
                </div >
                                                                    </div >
        </section >
    {/* <!-- shop-area end --> */ }
                                                          
                                                          
        </main >

    {/* <!-- footer start --> */ }
    < footer className = "footer-area pl-100 pr-100" >
      <div className="footer-area box-90 pt-100 pb-60" data-background="img/bg/footer.jpg" style= {{backgroundImage: 'url(&quot;img/bg/footer.jpg&quot;)'}}>
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-6 ">
              <div className="footer-widget mb-40 pr-70">
                <div className="footer-logo">
                  <a href="#"><img src="./assets/logo_shop.png" alt="" /></a>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore mag na
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                                </p>
                <div className="footer-time d-flex mt-30">
                  <div className="time-icon">
                    <img src="./assets/time.png" alt="" />
                  </div>
                  <div className="time-text">
                    <span>Got Questions ? Call us 24/7!</span>
                    <h2>(0600) 874 548</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-3">
              <div className="footer-widget mb-40">
                <h3>Social Media</h3>
                <ul className="footer-link">
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Behance</a></li>
                  <li><a href="#"> Dribbble</a></li>
                  <li><a href="#">Linkedin</a></li>
                  <li><a href="#">Youtube</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-2 col-md-3 d-md-none d-xl-block">
              <div className="footer-widget pl-50 mb-40">
                <h3>Location</h3>
                <ul className="footer-link">
                  <li><a href="#">New York</a></li>
                  <li><a href="#">Tokyo</a></li>
                  <li><a href="#">Dhaka</a></li>
                  <li><a href="#">Chittagong</a></li>
                  <li><a href="#">China</a></li>
                  <li><a href="#">Japan</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-3">
              <div className="footer-widget mb-40">
                <h3>About</h3>
                <ul className="footer-link">
                  <li><a href="#">Terms &amp; Conditions</a></li>
                  <li><a href="#"> Privacy Policy</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Wholesale</a></li>
                  <li><a href="#">Direction</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
        </footer >
    {/* <!-- footer end --> */ }

  {/* <!-- Fullscreen search --> */ }
  <div className="search-wrap">
    <div className="search-inner">
      <i className="fas fa-times search-close" id="search-close"></i>
      <div className="search-cell">
        <form method="get">
          <div className="search-field-holder">
            <input type="search" className="main-search-input" placeholder="Search Entire Store..." />
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* <!-- end fullscreen search --> */ }
    </>

  );
}

export default App;
