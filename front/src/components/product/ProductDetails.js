import Nav from "../Nav";
import "./Products.css";
import "../../index.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiUrlBase } from "../../services/apiUrlBase";
import axios from "axios";

export default function ProductDetails(){
    const { productId } = useParams();
    const [product, setProduct] = useState(null)
    
    useEffect(() => {
        const url = apiUrlBase + "products/details/" + productId;
        axios.get(url)
        .then(res => {
            setProduct(res.data)
        })
    }, [productId]);
    console.log(product)

    return (
        <div className="product-details">
            <Nav/>
            <div className="product-content">
                <div className="content-ill">
                    <img src={product != null ? "/uploads/" + product.image : null} alt="error" />
                </div>
                <div className="content-txt">
                    <h4>{product != null ? product.name : null}</h4>
                    <h5>Brand: <span>{product != null ? product.brand : null}</span></h5>
                    <h6>Collection: <span>{product != null ? product.collection : null}</span></h6>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem magnam expedita, architecto incidunt vitae minus consequuntur dolore repellat
                         fuga sed quibusdam dolor deserunt molestias officiis perferendis explicabo libero excepturi aut odit totam corporis. Voluptatibus numquam cupiditate, 
                         error dolorum beatae molestias eligendi iusto ut laboriosam assumenda deserunt, consequatur at sed dolor.
                         Explicabo libero excepturi aut odit totam adipisicing elit deserunt molestias officiis.</p>
                    
                    <div className="content-text-btns">
                        <button className="add-btn"><i className='bx bx-heart add-btn-logo'></i></button>
                        <button className="add-btn"><i className='bx bxs-cart-add add-btn-logo'></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}