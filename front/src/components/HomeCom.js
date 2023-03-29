import React from "react"
import Nav from "./Nav"
import "../index.css"
import "./Home.css"
import home1 from "../assets/images/home1.png"
import home2 from "../assets/images/home2.png"
import { Link, Navigate } from "react-router-dom"
import Collections from "./Collections"
import { getLoggedState } from "../services/authService"
export default class HomeCom extends React.Component{
    
    render(){
        return(
            <div className="home">
                {getLoggedState() !== 'true' ? <Navigate to="/login"/> : null}
                <Nav/>
                <div className="header">
                    <div className="header-texts">
                        <h2>Sneakers</h2>
                        <div className="bar"></div>
                        <h4>Find unique sneaker collections just one click away</h4>
                        <Link to="/products"><button className="header-button"><img src={home2} alt="error"/></button></Link>
                    </div>

                    <img src={home1} alt="error" className="header-img" />
                </div>
                <Collections/>
            </div>
        )
    }
}