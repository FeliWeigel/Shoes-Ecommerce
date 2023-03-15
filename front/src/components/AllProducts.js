import React from "react";
import Nav from "./Nav.js"
import "../index.css"
import "./Products.css"
import axios from "axios";
import { apiUrlBase } from "../services/apiUrlBase.js";
export default class AllProducts extends React.Component{
    state={
        products: [],
    }

    componentDidMount(){
        const url = apiUrlBase + "products";
        axios.get(url)
        .then(res => {
            this.setState({
                products: res.data,
            })
        })

    }

    render(){
        return(
            <div className="products-main">
                <Nav/>
                <div className="products">
                    <h2>All Sneakers</h2>
                    <div className="product-cards">
                        {this.state.products.map( product => {
                            return(
                                <div className="product">
                                    <h3>{product.name}</h3>
                                    <h4>{product.brand}</h4>
                                    <div>
                                        <img src={"/uploads/" + product.image} alt="" />
                                    </div>
                                    <h5>{product.collection}</h5>
                                    <p>$ {product.price}</p>

                                    <div className="product-btns">
                                        <button className="product-btn fav-btn"><i className='bx bx-heart product-btn-logo'></i></button>
                                        <button className="product-btn cart-btn"><i className='bx bxs-cart-add product-btn-logo'></i></button>
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        )
    }
}