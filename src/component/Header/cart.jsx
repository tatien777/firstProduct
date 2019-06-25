import React, { useState } from "react";
import ProductItem from '../ProductItem';

function MainComponent(props) {
    // const [state, setState] = useState(props.number);
    // <ProductItem function={sendText}/>
    
  //   const addCart = () => {
  //     setState(state + 1);
  // };
    
  return(
    <span className="cart-count"> {props.number} </span>
    
  );
  
}
// const [value, setValue] = useState('');
function RenderCart(props) {

  // const {name,img_url,price,final_price} = props
  
  // const renderCart = () => {
    let string = [];

    const renderCart = props.cart.map( elm => (
      // elm.URL.img_url
      <li>
    <div className="cart-img">
        <a href="#">
          <img src={elm.URL.img_url} alt="" />
        </a>
      </div>
      <div className="cart-content">
        <h3>
          <a href="#">Black &amp; {elm.text.name} </a>
        </h3>
        <div className="cart-price">
          <span className="new">$ {elm.theFinalPrice.final_price}</span>
          <span>
            <del> {elm.thePrice.price}</del>
          </span>
        </div>
      </div>
      <div className="del-icon">
        <a href="#">
          <i className="far fa-trash-alt" />
        </a>
      </div>
    </li> 
     ));
    //  console.log(a,'test cart.elm');
   
    return (
     <> 
     <ul>
      {renderCart}
     </ul>
      
      {/* <li>
    <div className="cart-img">
        <a href="#">
          <img src={props.URL.img_url} alt="" />
        </a>
      </div>
      <div className="cart-content">
        <h3>
          <a href="#">Black &amp; {props.text.name} </a>
        </h3>
        <div className="cart-price">
          <span className="new">$ {props.theFinalPrice.final_price}</span>
          <span>
            <del> {props.thePrice.price}</del>
          </span>
        </div>
      </div>
      <div className="del-icon">
        <a href="#">
          <i className="far fa-trash-alt" />
        </a>
      </div>
    </li>  */}
    </>
    );
}

export default function CartHeader(props) {
  const number = props.totalIcon; 
  // const {name,img_url,price,final_price} = props
  console.log(props.URL,'test CartHeader');
  
  return (
    <div className="col-xl-2 col-lg-6 col-md-6 col-5 col-sm-7 pl-0">
      <div className="header-right f-right">
      
        <ul>
          <li className="search-btn">
            <a className="search-btn nav-search search-trigger" href="#">
              <i className="fas fa-search" />
            </a>
          </li>
          <li className="login-btn">
            <a href="#">
              <i className="far fa-user" />
            </a>
          </li>
          <li className="d-shop-cart">
            <a href="#">
              <i className="fas fa-shopping-cart" />{" "}
              {/* <span className="cart-count">3</span> */}
              <MainComponent number={number}  />
            </a>
            <ul className="minicart">
              {/* <li>
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
                    <i className="far fa-trash-alt" />
                  </a>
                </div>
                </li>
              
              {/* <renderCart text={props.text} URL={props.URL} thePrice={props.thePrice} theFinalPrice={props.theFinalPrice} addCard={props.addCard} /> */}
              <RenderCart {...props}  />
              <li>
                <div className="checkout-link">
                  <a href="#">Shopping Cart</a>
                  <a className="red-color" href="#">
                    Checkout
                  </a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
