import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Products from './products/Products'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import DetailProduct from './products/detailProducts/DetailProduct'

function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detail/:id" exact component={DetailProduct}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Pages