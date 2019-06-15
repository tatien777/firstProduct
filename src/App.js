import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import result from './data';
import Header from './component/Header'
import Footer from './component/Footer'
import ProductList from './component/ProductList'

const value = [1, 2, 3, 4]
function App() {
  return (
    <>
      {/* <!-- header start --> */}
      <Header/>
    {/* < !--header end-- >*/ }

      {/* <!-- ProductList start --> */}
      <ProductList/>
    {/* < !--ProductList end-- >*/ }

    {/* <!-- footer start --> */ }
    <Footer/>
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
