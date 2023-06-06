import "../index.css"
import "./About.css"
import Nav from "./Nav"
import about1 from "../assets/images/about.jpg"
import { Navigate } from "react-router-dom"
import { getLoggedState } from "../services/authService"

export default function AboutCom(){
    return(
        
        <div className="about">
            {getLoggedState() !== 'true' ? <Navigate to="/login"/> : null}
            <Nav/>
            <div className="about-content">
                <div className="illustrations">
                    <div className="about-bar bar-left"></div>
                    <img src={about1} alt="error" />
                    <div className="about-bar bar-right"></div>
                </div>
                <div className="texts">
                    <h3>About us</h3>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolore ab et eius cumque expedita voluptate, delectus placeat laudantium quasi! Corrupti, provident. Alias dolor iure illo quisquam vitae pariatur id ex voluptatem quos et a ratione at provident, 
                        molestias cum amet est nesciunt, eligendi asperiores mollitia rerum. Tenetur, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est debitis quisquam odit numquam explicabo eligendi vero modi animi alias! Repudiandae! Lorem, ipsum.
                        Consectetur adipisicing elit et eius cumque expedita. Alias dolor iure illo quisquam vitae pariatur id ex voluptatem quos et a ratione. Dolore ab et eius cumque expedita voluptate mollitia rerum.</p>
                </div>
            </div>
        </div>
    )
}