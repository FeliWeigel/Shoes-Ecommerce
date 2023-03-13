import React from "react"
import Nav from "./Nav"
import "../index.css"
import "./Home.css"
import home1 from "../assets/images/home1.png"
import home2 from "../assets/images/home2.png"
import { Link } from "react-router-dom"
import Collections from "./Collections"
export default class HomeCom extends React.Component{
    render(){
        return(
            <div className="home">
                <Nav/>
                <div className="header">
                    <div className="header-texts">
                        <h2>Sneakers</h2>
                        <div className="bar"></div>
                        <h4>Find unique sneaker collections just one click away</h4>
                        <button className="header-button"><img src={home2} alt="error"/></button>
                    </div>

                    <img src={home1} alt="error" className="header-img" />
                </div>
                <Collections/>
            </div>
        )
    }
}