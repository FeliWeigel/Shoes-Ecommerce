import axios from "axios"
import React from "react"
import { Link, Navigate } from "react-router-dom"
import "../index.css"
import { apiUrlBase } from "../services/apiUrlBase"
import Nav from "./Nav"
import "./RegLogCom.css"
export default class LoginCom extends React.Component {
    
    state = {
        form: {
            "email": "",
            "password": ""
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
        const url = apiUrlBase + "auth/login";
        axios.post(url, this.state.form)
        .then(res => {
            if(res.data.token !== null){
                let token = res.data.token;
                localStorage.setItem("token", token)
                this.setState({
                    error: false,
                    errorMsg: "You have succesfull logged!"
                })

                console.log(token)
            }
               
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
                <h2>Sign in and start exploring!!</h2>
                <form onSubmit={this.handleSubmit} className="register-form">
                    <input type="email" onChange={this.handleChange} className="register-input log-input-email" name="email" placeholder="Email"/>
                    <input type="password" onChange={this.handleChange} className="register-input log-input-password" name="password" placeholder="Password"/>
                    {
                        this.state.error === true && this.state.errorMsg === "Invalid email or password, please try again." ? <p className="error-msg red">{this.state.errorMsg}</p> : null
                    }
                    {
                        this.state.errorMsg === "You have succesfull logged!" && this.state.error === false ? <Navigate to="/"/>  : null
                    }
                    <button onClick={this.handleButton} className="register-btn">Log in</button>
                </form>
                <Link to="/register"><button className="redirect-btn">You still do not have an account? Sign up here!</button></Link>
            </div>
        )
    }
}