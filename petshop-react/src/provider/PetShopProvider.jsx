import axios from "axios"
import { createContext, useEffect, useState } from "react"

const PetShopContext = createContext()

const PetShopProvider = ({ children }) => {
    const [productsPet, setProductsPet] = useState([])
    const [productsCarrito, setProductsCarrito] = useState([])

    useEffect(() => {
        const peticionApi = async () => {
            const {data} = await axios.get(import.meta.env.VITE_API)
            setProductsPet(data)
        }
        peticionApi()
    }, [])

    return (
        <PetShopContext.Provider value={{
            productsPet,
            productsCarrito
        }}>
            {children}
        </PetShopContext.Provider>
    )
}

export { PetShopProvider }

export default PetShopContext