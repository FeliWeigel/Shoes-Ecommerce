import React from "react";
import Nav from "../Nav.js"
import "../../index.css"
import "./Products.css"
import axios from "axios";
import { apiUrlBase } from "../../services/apiUrlBase.js";
import Search from "./Search.js";
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
                    <Search products={this.state.products}/>
                </div>
            </div>
        )
    }
}