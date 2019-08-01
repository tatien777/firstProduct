import React, { useState,useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.css';
// import result from "./data";
import Header from "./component/Header";
import Footer from "./component/Footer";
// import ProductList from './component/ProductList';
import Layout from "./component/Layout";
// import RegisterForm from './component/RegisterForm';
// import LoginForm from './component/LoginForm';
// import ProductDetail from './component/ProductDeatail';
import ErrorPage from "./component/ErrorPage";
import * as firebase from "firebase";
import * as initFireBase from "./fireBaseConfig";
import * as $ from 'jquery';


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const ProductList = React.lazy(() => import("./component/ProductList"));
const RegisterForm = React.lazy(() => import("./component/RegisterForm/RegisterContainer"));
const LoginForm = React.lazy(() =>
  import("./component/LoginForm/LoginFormContainer")
);
const ProductDetail = React.lazy(() => import("./component/ProductDetail"));

// function App() {
//   };

const value = [1, 2, 3, 4];
const urlAPI =  'https://mapi.sendo.vn/mob/product/cat/usb/?p=1';
export const AppConText = React.createContext({});

function App() {
  
  firebase
    .auth()
    .onAuthStateChanged(user => console.log(user, "check user login"));
  console.log(!firebase.auth().onAuthStateChange, "onAuthStateChange");
  
  const [data, setData] = useState([]);
  const [text, setText] = useState("Cart here");
  const [URL, setURL] = useState("URL here");
  const [thePrice, setThePrice] = useState("Price here");
  const [theFinalPrice, setTheFinalPrice] = useState("Final Price here");
  const [cart, setCartsArray] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalIcon, setTotalIcon] = useState(0);
  const [totalQuanlity,setTotalQuanlity] = useState(1);

  const [selectedItem, setSelectedItem] = useState([]);
  const [isShowSearchModal, setSearchModal] = useState(true);
  const [productId,setProductId] = useState("");
  const [itemInCart,setItemInCart] = useState([]);

  const getData = (url)=>{
    $.ajax({
      url: url,
      method: "GET"
    }).done(result =>{
      setData(result.data);
      
    }).catch(error=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    // const getProduct = category => {
      getData(urlAPI);
   
    // }
    
  },[])



  const findSelectedItem = productId => {
    const item = data.find(
      item => item.product_id === parseInt(productId, 10)
    );
 
    setSelectedItem(item);
  };

  const onShowSearch = () => {
    setSearchModal(state => !state);
  };

  const addCart = function(text, URL, thePrice, theFinalPrice,productId) {
    // console.log('successed ban hien');
    // console.log(text, URL, thePrice, theFinalPrice);
    setText(text);
    setURL(URL);
    setThePrice(thePrice);
    setTheFinalPrice(theFinalPrice);
    setProductId(productId);
    // cart = {text,URL, thePrice,theFinalPrice};
    cart.push({ text, URL, thePrice, theFinalPrice,productId });
    // setTotalPrice(cart.forEach(elm => {elm.theFinalPrice}).reduce((a,b) => a+b))
    setTotalPrice(
      cart.map(elm => elm.theFinalPrice.final_price).reduce((a, b) => a + b)
    );
    setTotalIcon(cart.length);
  // setTotlaQuality   
       if (!itemInCart.length) {
        setItemInCart(state => ([...state, { ...cart, so_luong: 1 }]))
        // itemInCart.push({ ...props, so_luong: 1 });
      } else {
        console.log(props.productId,'props.product_id')
        const existProductInCart = itemInCart.find(product => product.product_id === props.productId)
        // Bị trùng sản phẩm trong giỏ hàng => cập nhật số lương
        if (existProductInCart) {
          const newCart = itemInCart.map(product => {
            if (product.product_id === props.product_id) {
              return {
                ...product,
                so_luong: product.so_luong + 1
              }
            }
            return product
          })
          setItemInCart(newCart)
        } else {
          // chưa có sản phẩm này trong giỏ hàng => thêm mới vào
          setItemInCart(state => ([...state, { ...cart, so_luong: 1 }]))
        }
      }
    
  };
  
  
  function sortProduct(isLowToHigh, property, data) {
    // e.preventDefault();
    let resultList = data;
    
    // let resultList = sortList;
    if (property === "number" && isLowToHigh) {
      console.log(resultList,'data number')
      resultList.sort((a, b) => a['final_price'] - b['final_price']);
      console.log(resultList, "true");
    } else {
      if (property === "name") {
        resultList.sort();
        resultList.reverse();
      } else {
        resultList.sort((a, b) => b['final_price'] - a['final_price']);
      }
    }

    return setData([...resultList]);
  }

  function filterBigSaleProduct(resultList, number) {
    let listSale = [...data];
    listSale.filter(elm => elm.promotion_percent >= number);

    console.log("filter function", listSale);
    return setData(listSale);
  }

  const filterSale = e => {
    e.preventDefault();
    let sortedList = [];
    sortedList = data.filter(e => e.promotion_percent >= 20);
    setData(sortedList);
  };

  const onClickBtn = e => {
    console.log(e);
  };
  const [selectItem, setSelectItem] = useState([]);
  const getInfoFromDetails = value => {
    // return console.log(value,'getInfoFromDetails');
    console.log(value,'value')
    console.log(data,'result')
    let item = [];
    item = data.find(item => item.product_id === parseInt(value, 10));
    console.log(item,'item');
    return setSelectItem(item);
     
  };



  let props = {
    data,
    text,
    URL,
    thePrice,
    theFinalPrice,
    cart,
    totalPrice,
    addCart,
    sortProduct,
    filterBigSaleProduct,
    totalIcon,
    getInfoFromDetails,totalQuanlity,productId
  };
  console.log(itemInCart,'setItemInCart ');
  console.log(selectItem,'selectItem');
  return (
    
    <Router>
      <Layout {...props} onShowSearch={onShowSearch}>
        <React.Suspense fallback={<p> Loading ....</p>}>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <ProductList {...props}  filterSale={filterSale} 
              getInfoFromDetails={getInfoFromDetails}/>}
            />
            {/* <Route path="/details" component={ItemDetail} /> */}
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            {/* <Route path="/detail" component={ProductDetail} /> */}
            <Route
              path="/detail/:id"
              render={propsOfRouter => (
                <ProductDetail
                  {...props}
                  {...propsOfRouter}
                  selectItem={selectItem}
                  findSelectedItem={findSelectedItem}
                  
                />
              )}
            />
            <Route path="/error" component={ErrorPage} />
            />
           
            {isShowSearchModal && (
              <div className="search-wrap" onClick={onShowSearch}>
                <div className="search-inner">
                  <i className="fas fa-times search-close" id="search-close" />
                  <div className="search-cell">
                    <form method="get">
                      <div className="search-field-holder">
                        <input
                          type="search"
                          className="main-search-input"
                          placeholder="Search Entire Store..."
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
            {/* <!-- end fullscreen search --> */}
          </Switch>
        </React.Suspense>
      </Layout>
    </Router>
  );
}

export default App;
