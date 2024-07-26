import React from "react"
import {Link} from "react-router-dom"
import "./ProductItem.css"

function ProductItem({product}){
    return (
        <div className="product-card">
            <img src={product.images.url} alt = ""/>
            <div className="product_box">
                <h2>{product.title}</h2>

                <span>${product.price}</span>
                <p>{product.description}</p>

            </div>
            <div className="row_btn">
                <Link id = "btn_buy" to= "#!">
                    BUY
                </Link>
                <Link id = "btn_view" to= {`detail/${product._id}`}>
                    View
                </Link>

            </div>
        </div>
    )
}

export default ProductItem