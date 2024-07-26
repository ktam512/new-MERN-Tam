import React , {useContext} from 'react'
import {GlobalState} from "../../../GlobalState"
import {Link} from "react-router-dom"

function Cart() {
    const state = useContext(GlobalState)
    const [cart] = state.userAPI.cart
    if(cart.length === 0) return <h2 style={{textAlign:'center' , fontSize:"5rem"}}>Cart Empty</h2>
    return (
        <div>
        {
            cart.map(product => (
                <div className="detail cart">
                <img src={product.images.url} alt="" className="img_container"/>
                <div className="box-detail">
                    
                <h2>{product.title}</h2>
                       
                    
                <h5>${product.price * product.quantity}</h5>
                    <p> <h4 style={{textDecoration:'underline' , color:'whitesmoke'}}>Content : </h4>{product.content}</p>
                    <p> <h4 style={{textDecoration:'underline' , color:'whitesmoke'}}>Description : </h4>{product.description}</p>
                    <div className="amount">
                        <button > - </button>
                        <span>{product.quantity}</span>
                        <button> + </button>
                    </div>
                 <div className="delete"> x </div>
                
            </div>
            </div>
            ))
        }
        <div className="total">
            <h3>Total : $ 0 </h3>
            <Link to="#"> Payment</Link>
        </div>
        </div>
    )
}

export default Cart