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
                    <Link to="/"><li className="nav-link">Home</li></Link>
                    <Link to="/about"><li className="nav-link">About</li></Link>
                    <Link to="/products"><li className="nav-link">Product</li></Link>
                    <Link to="/testimonials"><li className="nav-link">Testimonials</li></Link>
                </ul>
                <Link to="/"><i className='bx bx-cart nav-cart'></i></Link>
            </nav>
        )
    }
}