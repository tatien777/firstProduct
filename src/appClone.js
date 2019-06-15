import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import result from './data';

const value = [1,2,3,4]
function App() {
  return (
    <div className="App " >
      <header className="App-header">
      
        <img src="https://media3.scdn.vn/img3/2019/6_3/wZZgp5_simg_b5529c_250x250_maxb.jpg" class="" alt=""/>
        <h1> USB type C</h1>
        <h2> Mo ta: dung abc </h2>
        <div className="row">
          <p className="col-md-6"> gia </p>
          <p className="col-md-6"> 230,000 VND </p>    
        </div>
      
        <button className="btn btn-primary">Click me</button>
        </header>
        {/* /// TEST  */}
        <div className="App">
        {result.data.map((elm, id) => <p key={elm.id}> {elm.name} </p>)}
        </div>
        {/* TEST 2  */}
        <header className="App-header">
        
        <div className="container">
          <div className="row">
            <div className="col-md-3"> 
              <img src="https://media3.scdn.vn/img3/2019/6_3/wZZgp5_simg_b5529c_250x250_maxb.jpg" class="" alt=""/>
              <h1> USB type C</h1>
              <h2> Mo ta: dung abc </h2>
              <div className="row">
                <p className="col-md-6"> gia </p>
                <p className="col-md-6"> 230,000 VND </p>    
              </div>
              <button className="btn btn-primary pl-2 text-center">Click me</button>
            </div>    
            <div className="col-md-3"> 
              <img src={result.data[1].img_url} class="" alt=""/>
              <h1> USB type C</h1>
              <h2>{ result.data[1].name }</h2>
              
              
              <div className="row">
                <p className="col-md-6"> gia </p>
                <p className="col-md-6"> {result.data[1].price} </p>    
              </div> 
            </div> 
            <div className="col-md-3"> <p> abc</p> </div>  
            <div className="col-md-3"> <p> abc</p> </div>     
          </div>      
        </div>
        
        </header>      
          
      
    </div>
    
  );
}

export default App;
