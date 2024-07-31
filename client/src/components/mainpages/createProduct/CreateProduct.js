import React,{useState , useContext, useEffect} from 'react'
import axios from "axios";
import {GlobalState} from "../../../GlobalState"
import Loading from "../utils/Loading/Loading"
import "./CreateProduct.css"
import {useHistory, useParams} from "react-router-dom"

const initialState = {
    product_id:'',
    title:'',
    price:0,
    description:'How to write code . heh he he he he he hee h  e e he e',
    content:'lorem ipsum is athe dummy text invented to write the nonsense to avoid writing the nonsense like i am writing at that point. Just Avoid it',
    category:'',
    _id: ''
}

function CreateProduct(){
    const [product, setProduct] = useState(initialState)
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories
    const [images, setImages] = useState(false)
    const [loading, setLoading] = useState(false)
    const [isAdmin] = state.userAPI.isAdmin

    const styleUpload = {
        display: images ? 'block' : 'none'
    }
    const handleUpload = async (e) =>{
        e.preventDefault()
        try{
            if(!isAdmin) return alert("You are not an admin")
            const file = e.target.files[0]
        } catch(err){
            alert(err.response.data.msg)
        }
    }
    return (
        <div className= "create_product">
            <div className = "upload">
                <div>upload</div>
                <div>type </div>
                <input type ="file" name = "file" id = "file_up"></input>
                <div id = "file_img">
                    <img src = "" alt = ""/>
                    <span>x</span>
                </div>
            </div>
            <form>
                <div className="row">
                    <label htmlFor="product_id">Product_id</label>
                    <input type="text" name="product_id" id="product_id"
                    required value={product.product_id} />
                </div>
                <div className="row">
                    <label htmlFor="Title">Title</label>
                    <input type="text" name="title" id="title"
                    required value={product.title} />
                </div>
                <div className="row">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price"
                    required value={product.price} />
                </div>
                <div className="row">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description"
                     required value={product.description} />
                </div>
                <div className="row">
                    <label htmlFor="content">Content</label>
                    <input type="text" name="content" id="content"
                     required value={product.content} />
                </div>
                <div className="row">
                    <label htmlFor="category">Category</label>
                    <select name="category" id="category"
                     value={product.content}>
                        <option value =""> Please Select a category</option>
                        {
                            categories.map(category=>(
                                <option value = {category._id}>
                                    {category.name}
                                </option>
                            ))
                        }
                     </select>
                </div>
                <button type="submit">Create Product</button>
            </form>
            
        </div>
    )
}

export default CreateProduct
