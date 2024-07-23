import React, {createContext, useState, useEffect} from 'react'
import ProductsAPI from "./api/ProductsAPI"


export const GlobalState = createContext()

export const DataProvider = ({children}) =>{
    ProductsAPI()
    return (
        <GlobalState.Provider value={"value in Global"}>
            {children}
        </GlobalState.Provider>
    )
}