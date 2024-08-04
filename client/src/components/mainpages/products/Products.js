import React, {useContext, useEffect} from 'react'
import { GlobalState } from "../../../GlobalState";
import Loading from '../utils/Loading/Loading';
import ProductItem from '../utils/Product_item/ProductItem';
import "./Product.css"
import axios from "axios"
function Products() {
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart

    const getProducts = async()=>{
        const res = await axios.get('/api/products')
        setProducts(res.data.products)
    }

    useEffect(()=>{
        getProducts()
    },[])

    return (
        <>
        <div className='products'>
            {
                products.map(product => {
                    return <ProductItem key = {product._id} product = {product}
                    isAdmin={isAdmin}/>
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