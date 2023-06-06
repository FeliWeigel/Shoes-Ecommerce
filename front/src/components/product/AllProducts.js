import React from "react";
import Nav from "../Nav.js"
import "../../index.css"
import "./Products.css"
import axios from "axios";
import { apiUrlBase } from "../../services/apiUrlBase.js";
import Search from "./Search.js";
import { getLoggedState } from "../../services/authService.js";
import { Navigate } from "react-router-dom";
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
                {getLoggedState() !== 'true' ? <Navigate to="/login"/> : null}
                <Nav/>
                <div className="products">
                    <h2>All Sneakers</h2>
                    <Search products={this.state.products}/>
                </div>
            </div>
        )
    }
}