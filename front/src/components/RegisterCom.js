import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"
import "../index.css"
import { apiUrlBase } from "../services/apiUrlBase"
import Nav from "./Nav"
import "./RegLogCom.css"
export default class RegisterCom extends React.Component {
    
    state = {
        form: {
            "firstname": "",
            "lastname": "",
            "email": "",
            "password": "",
            "repeat_password": ""
        },
        error: false,
        errorMsg: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleChange = async e => {
        await this.setState({
            form: {
              ...this.state.form,
              [e.target.name]: e.target.value  
            }
        })

        console.log(e.target.value)
    }

    handleButton = () => {
        const url = apiUrlBase + "auth/register";
        axios.post(url, this.state.form)
        .then(res => {
            if(res.data !== "fail"){
                this.setState({
                    error: false,
                    errorMsg: "You have Succesfully registered!"
                })
            }else{
                this.setState({
                    error: true,
                    errorMsg: "Invalid email or password, please try again."
                })
            }
            console.log(res.data)
        }).catch(error => {
            console.log(error)
            this.setState({
                error: true,
                errorMsg: "Invalid email or password, please try again."
            })
        })
        
    }

    render(){
        return(
            <div className="register">
                <Nav/>
                <h2>Before you start, register!</h2>
                <form onSubmit={this.handleSubmit} className="register-form">
                    <div>
                        <input type="text" onChange={this.handleChange} className="register-input input-name" name="firstname" placeholder="Firstname"/>
                        <input type="text" onChange={this.handleChange} className="register-input input-lastname"  name="lastname" placeholder="Lastname"/>
                    </div>
                    <input type="email" onChange={this.handleChange} className="register-input input-email" name="email" placeholder="Email"/>
                    
                    <div>
                        <input type="password" onChange={this.handleChange} className="register-input input-password" name="password" placeholder="Password"/>
                        <input type="password" onChange={this.handleChange} className="register-input input-password" name="repeat_password" placeholder="Repeat Password"/>
                    </div>
                    <p className="required-msg">The password must contain at least 6 digits and a capital letter.</p>
                    {
                        this.state.error === true && this.state.errorMsg === "Invalid email or password, please try again." ? <p className="error-msg red">{this.state.errorMsg}</p> : null
                    }
                    {
                        this.state.errorMsg === "You have Succesfully registered!" && this.state.error === false ? <p className="error-msg green">{this.state.errorMsg}</p>  : null
                    }
                    <button onClick={this.handleButton} className="register-btn">Register</button>
                </form>
                <Link to="/login"><button className="redirect-btn">Do you already have an account? Log in here</button></Link>
            </div>
        )
    }
}