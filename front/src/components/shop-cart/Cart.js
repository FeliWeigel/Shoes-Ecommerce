import {useEffect, useState } from "react";
import Nav from "../Nav";
import "../../index.css"
import "./Cart.css"
import img from "../../assets/images/home1.png"
import { createSale, deleteToCart, getCartList, getSalesList } from "../../services/cartService";

function Cart(){
    const [productList, setProductList] = useState([])
    const [salesList, setSalesList] = useState([])
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    //Lists
    const getProductList = () => {
        getCartList({ setProductList });
    }
    const getSales = () => {
        getSalesList({ setSalesList })
    }

    useEffect(() => {
        getProductList()
        getSales()
    }, []);

    //Products
    const deleteProduct = ({productId}) => {
        deleteToCart({productId})
        .then(() => {
            let number = parseInt(localStorage.getItem("number")) -1
            localStorage.setItem("number", number.toString())
            window.dispatchEvent(new Event('storage'))
            getCartList({ setProductList })
        })
    }
    const calculateTotal = (products) => {
        let total = 0;
        products.forEach(product => {
            total = total + (product.amount + product.product.price)
        })
        return total
    }
    //Sales
    const getDate = date => {
        return new Date(date).toLocaleDateString();
    }

    const confirmSale = () => {
        setLoading(true)
        createSale().then(() => {
            getSales()
            getCartList()
            let number = 0;
            localStorage.setItem("number", number.toString())
            window.dispatchEvent(new Event('storage'))
            setLoading(false)
        })
    }

    return(
        <div className="cart">
            <div className="cart-content">
                <div className="cart-sale">
                    <h3>Your Cart:</h3>
                    <div className="cart-sale-list">
                        <ul className="cart-sale-registers">
                            {productList.map( cart => {
                                <li className="cart-sale-reg">
                                <div className="item-left">
                                    <img src={cart.product.image} alt="error" />
                                    <h4>{cart.product.name}</h4>
                                </div>
                                <div className="item-right">
                                    <h5>{cart.amount}</h5>
                                    <p>${cart.product.price}</p>
                                </div>
                            </li>
                            })}
                            
                            <li className="cart-sale-reg">
                                <div className="item-left">
                                    <img src={img} alt="error" />
                                    <h4>NMD Ultra</h4>
                                </div>
                                <div className="item-right">
                                    <h5>x1</h5>
                                    <p>$110.00</p>
                                </div>
                            </li>
                        </ul>
                        <h4 className="cart-sale-total">Total: $500.50</h4>
                        <button className="cart-sale-pay">Pay</button>
                    </div>
                </div>    
                <div className="cart-history">
                    <h3>Shopping history</h3>
                    <div className="bar"></div>
                    <ul className="history-list">
                        <li className="history-item">
                            <h5>Date: 19/10/22</h5>                          
                            <p>Total: $345.00</p>
                        </li>
                        <li className="history-item">
                            <h5>Date: 19/10/22</h5>                          
                            <p>Total: $345.00</p>
                        </li>
                        <li className="history-item">
                            <h5>Date: 19/10/22</h5>                          
                            <p>Total: $345.00</p>
                        </li>
                        <li className="history-item">
                            <h5>Date: 19/10/22</h5>                          
                            <p>Total: $345.00</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cart;