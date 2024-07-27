import axios from 'axios'
import React, {useState, useContext} from "react"
import { GlobalState } from "../../../GlobalState"
import "./Categories.css"
function Categories() {
    const state = useContext(GlobalState)
    const [categories, setCategories] = state.categoriesAPI.categories
    const [category, setCategory] = useState('')
    const [token] = state.token
    const [callback, setCallback] = state.categoriesAPI.callback
    const [onEdit, setOnEdit] = useState(false)
    const [id, setID] = useState('')
    
    const createCategory = async (e) => {
        e.preventDefault()
        try {
                const res = await axios.post(`/api/category/`, {name: category},{
                    headers: {Authorization : token}
                })
                setCategory(' ')
                setCallback(!callback)
                alert(res.data.msg) 
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    const editCategory = async (id, name) => {
        setID(id)
        setCategory(name)
        setOnEdit(true)
}
    return (
        <div className="categories">
        <form onSubmit={createCategory}>
            <label htmlFor="category">Category</label>
            <input type="text" name="category" value={category} required onChange={e => setCategory(e.target.value)}/>

            <button type="submit">{onEdit ? " Update" : "Save"} </button>
        </form>
        <div className="col">
            {
                categories.map(category =>(
                    <div className="row" key={category._id}>
                        <p>{category.name}</p>
                        <div>
                        <button onClick={()=>editCategory(category._id, category.name)}>Edit</button>
                        <button>Delete</button>
                        </div>
                        </div>
                ))
            }

        </div>    
        </div>
    )
}

export default Categories