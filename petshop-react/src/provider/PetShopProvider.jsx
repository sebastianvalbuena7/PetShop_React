import axios from "axios"
import { createContext, useEffect, useState } from "react"

const PetShopContext = createContext()

const PetShopProvider = ({ children }) => {
    const [productsPet, setProductsPet] = useState([])
    const [productsCarrito, setProductsCarrito] = useState([])
    const [productsRandom, setProductsRandom] = useState([])

    useEffect(() => {
        const peticionApi = async () => {
            const { data } = await axios.get(import.meta.env.VITE_API)
            setProductsPet(data)
            let productArrayRandom = data.sort(() => Math.random() - 0.5).splice(0, 4)
            setProductsRandom(productArrayRandom)
        }
        peticionApi()
    }, [])

    const handleCart = product => {
        setProductsCarrito([...productsCarrito, product])
    }

    const handleDeleteCart = id => {
        let productsDeleted = productsCarrito.filter(product => product._id !== id)
        setProductsCarrito(productsDeleted)
    }

    return (
        <PetShopContext.Provider value={{
            productsPet,
            productsCarrito,
            handleCart,
            productsRandom,
            handleDeleteCart
        }}>
            {children}
        </PetShopContext.Provider>
    )
}

export { PetShopProvider }

export default PetShopContext