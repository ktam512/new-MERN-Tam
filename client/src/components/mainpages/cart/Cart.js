import React , {useContext} from 'react'
import {GlobalState} from "../../../GlobalState"
import {Link} from "react-router-dom"

function Cart() {
    const state = useContext(GlobalState)
    const [cart] = state.userAPI.cart
    if(cart.length === 0) 
        return <h2 style={{textAlign:'center' , fontSize:"5rem"}}>Cart Empty</h2>
    return (
        <div>
        {
            cart.map(product =>{
                <div className="detail">
            <img src={product.images.url} alt=""/>
            <div className="box-detail">
                <div className="row">
                    <h2>{product.title}</h2>
                    <h6>ID: {product.product_id}</h6>
                </div>
                <h5>${product.price}</h5>
                <p> <h4 style={{textDecoration:'underline' , color:'whitesmoke'}}>Content:</h4> {product.content}</p>
                <p><h4 style={{textDecoration:'underline' , color:'whitesmoke'}}>Description : </h4>{product.description}</p>
                <p>SOLD:  {product.sold}</p>
                <Link to="/cart" className="cart">BUY NOW</Link>
            </div>
        </div>
            })
        }
        </div>
    )
}

export default Cart