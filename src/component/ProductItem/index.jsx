import React from "react";
import result from '../../data.json';
var data = result.data;
export default function ProductItem({name,img_url,shop_name,price,final_price} ) {
    return (
        <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="product-wrapper mb-50">
                <div className="product-img mb-25">
                    <a href="#">
                        <img src={img_url}  alt="" />
                        {/* {result.data.map((elm, id) => <img src={elm.img_url} alt=""/> )} */}
                        
                        <img
                            className="secondary-img"
                            src={img_url}
                            alt=""
                        />
                        {/* {result.data.map((elm, id) => <img src={elm.img_url} className="secondary-img" alt=""/> )} */}
                    </a>
                    <div className="product-action text-center">
                        <a href="#" title="Shoppingb Cart">
                            <i className="fas fa-shopping-cart" />
                        </a>
                        <a href="#" title="Quick View">
                            <i className="fas fa-search" />
                        </a>
                    </div>
                    <div className="sale-tag">
                        <span className="sale">sale</span>
                    </div>
                </div>
                <div className="product-content pr-0">
                    <div className="pro-cat mb-10">
                        <a href="#">{shop_name} </a>
                    </div>
                    <h4>
                        <a href="#"> {name}  </a>
                    </h4>
                    <div className="product-meta">
                        <div className="pro-price">
                            <span>{price} VND </span>
                            <span className="old-price">{final_price} VND </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
