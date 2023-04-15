import { useState, useEffect } from "react"
import usePetshop from "../hooks/usePetShop"
import { Product } from "../components/Product"

export default function Home() {
    const [productsRandom, setProductsRandom] = useState([])
    const { productsPet, productsPetLoaded } = usePetshop()

    useEffect(() => {
        if(productsPetLoaded && productsPet.length > 0) {
            let productArrayRandom = productsPet.sort(() => Math.random() - 0.5).splice(0, 4)
            setProductsRandom(productArrayRandom)        
        }
    }, [productsPetLoaded, productsPet])

    return (
        <div className="flex flex-wrap justify-center gap-16">{productsRandom.map(product => <Product key={product._id} product={product}/>)}</div>
    )
}