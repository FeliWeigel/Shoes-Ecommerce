import React from "react"
import { Link} from "react-router-dom"
import logo from "../assets/images/logo.png"
import "../index.css"
import { getLoggedState, logOut } from "../services/authService"
import "./Nav.css"
export default class Nav extends React.Component{
    
    handleLogOut = () => {
        logOut()
    }

    render(){
        return(
            <nav className="nav">
                <Link to="/"><img src={logo} alt="" /></Link>
                <ul>
                    <Link to="/"><li className="nav-link">Home</li></Link>
                    <Link to="/about"><li className="nav-link">About</li></Link>
                    <Link to="/products"><li className="nav-link">Product</li></Link>
                    <Link to="/testimonials"><li className="nav-link">Testimonials</li></Link>
                </ul> 
                <div className="nav-actions-btns">
                    {getLoggedState() === 'true' ? <button onClick={this.handleLogOut} className="logout-btn"><i className='bx bx-log-out-circle nav-logout'></i></button> : null}
                    <Link to="/user/cart"><i className='bx bx-cart nav-cart'></i></Link>
                </div>
            </nav>
        )
    }
}