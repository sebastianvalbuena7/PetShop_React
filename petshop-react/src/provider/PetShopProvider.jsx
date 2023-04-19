import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const PetShopContext = createContext()

const PetShopProvider = ({ children }) => {
    const [productsPet, setProductsPet] = useState([])
    const [productsCarrito, setProductsCarrito] = useState(JSON.parse(localStorage.getItem('carrito')) ?? [])
    const [productsRandom, setProductsRandom] = useState([])
    const [spinnerLoad, setSpinnerLoad] = useState(false)

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(productsCarrito) ?? [])
    }, [productsCarrito])

    useEffect(() => {
        const peticionApi = async () => {
            setSpinnerLoad(true)
            const { data } = await axios.get(import.meta.env.VITE_API)
            setProductsPet(data)
            let productArrayRandom = data.sort(() => Math.random() - 0.5).splice(0, 4)
            setProductsRandom(productArrayRandom)
            setSpinnerLoad(false)
        }
        peticionApi()
    }, [])

    const handleCart = product => {
        toast.success('Producto Agregado al Carrito')
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
            handleDeleteCart,
            spinnerLoad
        }}>
            {children}
        </PetShopContext.Provider>
    )
}

export { PetShopProvider }

export default PetShopContext