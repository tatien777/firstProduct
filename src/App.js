import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
import result from './data';
import Header from './component/Header';
import Footer from './component/Footer';
import ProductList from './component/ProductList';
import Layout from './component/Layout';
import RegisterForm from './component/RegisterForm';
import LoginForm from './component/LoginForm';



const value = [1, 2, 3, 4]
export const AppConText = React.createContext({});


function App() {
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
  let resultList = data;

  if (isLowToHigh) {
    resultList.sort((a, b) => a[property] - b[property]);
    console.log('bug1',resultList[0][property]);
  } else {
    if (property === "name") {
      resultList.sort((a,b)=> 
      a["name"].localeCompare(b["name"], "vi", { sensitivity: "base" }));
      resultList.sort((a,b)=> 
      b["name"].localeCompare(a["name"], "vi", { sensitivity: "base" }));
      console.log('bug2',resultList[0][property]);
    } else {
      resultList.sort((a, b) => b[property] - a[property]);
      console.log('bug3',resultList[0][property]);
    }
  }
  console.log('resultList',data);
  return setData(resultList);
};

function filterBigSaleProduct(resultList, number) {
  return resultList.filter(elm => elm.promotion_percent >= number);
}

  const onClickBtn = e => {
    console.log(e);
  };

  let props = {data,text,URL,thePrice,theFinalPrice,cart,totalPrice,addCart,sortProduct,filterBigSaleProduct,totalIcon}
  return (
    <Layout {...props}>



      {/* <!-- header start --> */}
      {/* <Header/> */}
    {/* < !--header end-- >*/ }

      {/* <!-- ProductList start --> */}
      {/* <AppConText.Provider value={{ text, onClickBtn }}> */}
      <ProductList data={data} {...props}/>
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
    </Layout>

  );
}

export default App;
