import axios from "axios";
import React from "react";
import { apiUrlBase } from "../services/apiUrlBase";

export default class DemoCom extends React.Component{

    state={
        form:{
            "name": "",
            "brand": "",
            "collection": "",
            "price": 0.0,
            "image": "",
        }
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
        const url = apiUrlBase + "products/save";
            
        axios.post(url, this.state.form, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        .then(res => {
            console.log(res.data)
               
        }).catch(error => {
            console.log(error)
        })
        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data">
                    <input onChange={this.handleChange} type="text" name="name" placeholder="name" />
                    <input onChange={this.handleChange} type="text" name="brand" placeholder="brand" />
                    <input onChange={this.handleChange} type="text" name="collection" placeholder="collection" />
                    <input onChange={this.handleChange} type="number" name="price" placeholder="price" />
                    <input onChange={this.handleChange} type="file" name="file" placeholder="file" />
                    <button onClick={this.handleButton} type="submit">save</button>
                </form>
            </div>
        )
    }
}