import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"
import "../index.css"
import "./Nav.css"
export default class Nav extends React.Component{
    render(){
        return(
            <nav className="nav container">
                <img src={logo} alt="" />
                <ul>
                    <li className="nav-link">Home</li>
                    <li className="nav-link">About</li>
                    <li className="nav-link">Product</li>
                    <li className="nav-link">Testimonials</li>
                </ul>
                <Link to="/"><i className='bx bx-cart nav-cart'></i></Link>
            </nav>
        )
    }
}