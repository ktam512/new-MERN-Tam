import React, {useContext, useEffect} from 'react'
import { GlobalState } from "../../../GlobalState";
import Loading from '../utils/Loading/Loading';
import ProductItem from '../utils/Product_item/ProductItem';
import "./Product.css"
import axios from "axios"
import { set } from 'mongoose';
function Products() {
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart
    const [callback, setCallback] = state.productAPI.callback
  
    return (
        <>
        <div className='products'>
            {
                products.map(product => {
                    return <ProductItem key = {product._id} product = {product}
                    isAdmin={isAdmin} callback = {callback} setCallback={setCallback}/>
                })

            }
        </div>
        {
            products.length === 0 && <Loading/>
        }
        </>
    )
}

export default Products