import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
import result from './data';
import Header from './component/Header';
import Footer from './component/Footer';
// import ProductList from './component/ProductList';
import Layout from './component/Layout';
// import RegisterForm from './component/RegisterForm';
// import LoginForm from './component/LoginForm';
// import ProductDetail from './component/ProductDeatail';
import ErrorPage from './component/ErrorPage';
import * as firebase from 'firebase';
import * as initFireBase from './fireBaseConfig';

import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

const ProductList = React.lazy(() => import("./component/ProductList"));
const RegisterForm = React.lazy(() => import("./component/RegisterForm"));
const LoginForm = React.lazy(() => import("./component/LoginForm"));
const ProductDetail = React.lazy(() => import("./component/ProductDeatail"));

// function App() {
//   };

const value = [1, 2, 3, 4]
export const AppConText = React.createContext({});


function App() {

  firebase.auth().onAuthStateChanged((user) => console.log(user,'check user login'));
  console.log(!firebase.auth().onAuthStateChange,'onAuthStateChange')

  const [data,setData] = useState(result.data);
  const [text,setText] = useState("Cart here");
  const [URL,setURL] = useState("URL here");
  const [thePrice, setThePrice] = useState("Price here");
  const [theFinalPrice, setTheFinalPrice] = useState("Final Price here");
  const [cart,setCartsArray] = useState([]);
  const [totalPrice,setTotalPrice] = useState(0);
  const [totalIcon,setTotalIcon] = useState(0);
  


  const addCart = function(text, URL, thePrice, theFinalPrice) {
    // console.log('successed ban hien');
    // console.log(text, URL, thePrice, theFinalPrice);
    setText(text);
    setURL(URL);
    setThePrice(thePrice);
    setTheFinalPrice(theFinalPrice);
    // cart = {text,URL, thePrice,theFinalPrice};
    cart.push({text,URL, thePrice,theFinalPrice});
    // setTotalPrice(cart.forEach(elm => {elm.theFinalPrice}).reduce((a,b) => a+b))
    setTotalPrice(cart.map(elm =>elm.theFinalPrice.final_price).reduce((a,b)=> a+b) );
    setTotalIcon(cart.length)
    console.log('cart array',cart); 
    console.log('totalPrice',totalPrice); 
    console.log('totalIcon',totalIcon); 
};


function sortProduct(isLowToHigh, property, e) {
  // e.preventDefault();
  let resultList = [...data];

  // let resultList = sortList;
  if (property ==="number") {
    resultList.sort((a, b) => a[property] - b[property]);
    console.log(resultList,'true');
  } else {
    if (property === "name") {
      resultList.sort();
      resultList.reverse();
    } else {
      resultList.sort((a, b) => b[property] - a[property]);
    }
  }
  
    return setData([...resultList]);
  };

function filterBigSaleProduct(resultList, number) {
  let listSale = [...data]; 
  listSale.filter(elm => elm.promotion_percent >= number);
  
  console.log('filter function',(listSale));
  return setData(listSale);

}

const filterSale = (e) => {
  e.preventDefault();
  let sortedList = [];
   sortedList = data.filter(e => e.promotion_percent >= 20);
  setData(sortedList);
}

  const onClickBtn = e => {
    console.log(e);
  };
  const [selectItem,setSelectItems] = useState();
  const getInfoFromDetails = (value) => {
    // return console.log(value,'getInfoFromDetails');
    const item = data.find(item=> item.product_id === parseInt(value,10))
    setSelectItems(item);
  };

  // $("#filterBigSale").click(function() {
  //   let sortedList = filterBigSaleProduct([...products], 10);
  //   render(sortedList);
  // });

  let props = {data,text,URL,thePrice,theFinalPrice,cart,totalPrice,addCart,sortProduct,filterBigSaleProduct,totalIcon,getInfoFromDetails}
  
  return (
    <Router> 
    <Layout {...props}>
    <React.Suspense fallback={<p> Loading ....</p>}>
    <Switch>
    <Route path="/" exact render={() => ( <ProductList  {...props}  filterSale={filterSale}/>
              )}
          />
          {/* <Route path="/details" component={ItemDetail} /> */}
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          {/* <Route path="/detail" component={ProductDetail} /> */}
          
          <Route  path="/detail/:id" render={(propsOfRouter) => ( <ProductDetail {...props} {...propsOfRouter} selectItem={selectItem}   />)} />
          
          <Route path="/error" component={ErrorPage} />
          
/>
          
    


      {/* <!-- header start --> */}
      {/* <Header/> */}
    {/* < !--header end-- >*/ }

      {/* <!-- ProductList start --> */}
      {/* <AppConText.Provider value={{ text, onClickBtn }}> */}
      
      {/* </AppConText.Provider> */}
      {/* <RegisterForm/> */}
      {/* <LoginForm/> */}
    {/* < !--ProductList end-- >*/ }

    {/* <!-- footer start --> */ }
    {/* <Footer/> */}
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
  </Switch>
  </React.Suspense>
    </Layout>
  </Router>

  );
}

export default App;
