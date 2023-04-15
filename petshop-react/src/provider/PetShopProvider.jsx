import axios from "axios"
import { createContext, useEffect, useState } from "react"

const PetShopContext = createContext()

const PetShopProvider = ({ children }) => {
    const [productsPet, setProductsPet] = useState([])
    const [productsCarrito, setProductsCarrito] = useState([])
    const [productsPetLoaded, setProductsPetLoaded] = useState(false)

    useEffect(() => {
        const peticionApi = async () => {
            try {
                const { data } = await axios.get(import.meta.env.VITE_API)
                setProductsPet(data)
                setProductsPetLoaded(true)
            } catch (error) {
                console.log(error)
            }
        }
        peticionApi()
    }, [])

    const handleCart = product => {
        setProductsCarrito([...productsCarrito, product])
    }

    return (
        <PetShopContext.Provider value={{
            productsPet,
            productsCarrito,
            productsPetLoaded,
            handleCart
        }}>
            {children}
        </PetShopContext.Provider>
    )
}

export { PetShopProvider }

export default PetShopContext