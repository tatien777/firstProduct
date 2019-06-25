import React , { useState }from "react";
// import result from './data';
import Footer from '../Footer';
import Header from '../Header';


export default function Layout(props) { 
   console.log(props.text,'test layout');
    return(
        <>
            <Header {...props}/>
               
                {props.children}
            <Footer/>
            
        </>
    )
}