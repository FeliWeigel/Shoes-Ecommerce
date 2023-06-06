import axios from "axios"
import { apiUrlBase } from "./apiUrlBase"

export const addToCart = ({amountAdd, productAdd}) => {
    const addUrl = apiUrlBase + "cart/add"
    const userDetailsUrl = apiUrlBase + "v1/auth/user_details"

    axios.get(userDetailsUrl)
    .then(userDetails => {
        let cartObject = {
            client: userDetails.data,
            product: productAdd,
            amount: amountAdd
        }
        console.log(userDetails.data)
        axios.post(addUrl, cartObject)
        .then(res => {
            console.log(res);
        })
    }).catch(error => {
        console.log(error)
    })
}

export const deleteToCart = ({productId}) => {
    const deleteUrl = apiUrlBase + `cart/delete/${productId}`;
    return axios.delete(deleteUrl);
}

export const getCartList = ({setProductList}) => {
    const getCartListUrl = apiUrlBase + "cart";
    axios.get(getCartListUrl)
    .then(res => {
        setProductList(res.data)
    })
}

export const createSale = () => {
    const createSaleUrl = apiUrlBase + "sales/create";
    return axios.post(createSaleUrl)
}

export const getSalesList = ({setSalesList}) => {
    const getSalesListUrl = apiUrlBase + "sales/all";
    axios.get(getSalesListUrl)
    .then(res => {
        setSalesList(res.data)
    })
}