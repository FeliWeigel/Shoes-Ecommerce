import "./Products.css"
import "../../index.css"
import { Link } from "react-router-dom"
import { addToCart } from "../../services/cartService"
export default function Product({product}){
    
    return(
        <div className="product">
            <h3>{product.name}</h3>
            <h4>{product.brand}</h4>
            <Link to={"details/" + product.id}>
                <div className="img-main">
                    <img src={"/uploads/" + product.image} alt="" />
                </div>
            </Link>
            <div className="bar product-bar"></div>
            <h5>{product.collection}</h5>
            <p>$ {product.price}</p>
            <div className="product-btns">
                <button className="product-btn fav-btn"><i className='bx bx-heart product-btn-logo'></i></button>
                <button onClick={addToCart(1, product)} className="product-btn cart-btn"><i className='bx bxs-cart-add product-btn-logo'></i></button>
            </div>
        </div>
    )
}