import { useState } from "react"
import "../../index.css"
import Product from "./Product";
import "./Products.css"

const Search = ({products}) => {
    const [search, setSearch] = useState("");

    const searcher = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }
    let results = []

    if(search){
        results = products.filter( (data) => data.name.toLowerCase().includes(search.toLocaleLowerCase()));   
    }
    else{
        results = products
    }

    return(
        <div className="search">
            <div className="searcher">
                <input value={search} type="text" name="search" className="search-input" onChange={searcher} placeholder="Search.." />
                <button className="search-button"><i className='bx bx-search-alt-2 search-logo'></i></button>
            </div>

            <div className="product-cards">
                {results.map( (product) => {
                    return(
                        <Product key={product.id} product={product}/>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Search;