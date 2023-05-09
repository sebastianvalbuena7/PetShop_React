import { useParams } from "react-router-dom"
import usePetshop from "../hooks/usePetShop"
import { useEffect, useState } from "react"
import { ProductMoreComp } from "../components/ProductMoreComp"

const SeeMore = () => {
    const [productMore, setProductMore] = useState({})
    const { productsPet} = usePetshop()
    const { id } = useParams()

    useEffect(() => {
        const productUpdate = productsPet.find(p => p._id === id)
        setProductMore(productUpdate)
    }, [id])

    return (
        <div className="mx-8">
            <ProductMoreComp productMore={productMore}/>
        </div>
    )
}

export default SeeMore