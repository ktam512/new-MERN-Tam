import React,{useContext} from "react"
import {GlobalState} from "../../../../GlobalState"
import {Link} from "react-router-dom"
import "./ProductItem.css"
import axios from 'axios'

function ProductItem({product, isAdmin, callback, setCallback}){
    const state = useContext(GlobalState)
    const addCart = state.userAPI.addCart
    const [token] = state.token

    
    const deleteProduct =async  () => {
        console.log(product)
        try {
            const destroyImg = axios.post(`/api/destroy`, {public_id: product.images.public_id},{
                headers: {Authorization: token}
            })
            const deleteProdukt = axios.delete(`/api/products/${product._id}`,{
                headers: {Authorization: token}
            })
            await destroyImg
            await deleteProdukt
            setCallback(!callback)

        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    return (
        <div className="product-card">
            {
                isAdmin && <input type="checkbox" checked={product.checked} />
            }
            <img src={product.images.url} alt = ""/>
            <div className="product_box">
                <h2>{product.title}</h2>

                <span>${product.price}</span>
                <p>{product.description}</p>

            </div>
            <div className="row_btn">
            { isAdmin ? <>
                <Link  id="btn_buy" to="#!" >
                    DELETE
                </Link>
                <Link id="btn_view" to={`/edit_product/${product._id}`}>
                    EDIT
                </Link>
                </>:
                <>
                 <Link  id="btn_buy" to="#!"onClick={()=>addCart(product)}>
                    BUY
                </Link>
                <Link id="btn_view" to={`/detail/${product._id}`}>
                    VIEW
                </Link>
                </>
               }

            </div>
        </div>
    )
}

export default ProductItem