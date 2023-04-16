import usePetshop from "../hooks/usePetShop"
import { Product } from "../components/Product"

const Shop = () => {
    const { productsPet } = usePetshop()
    return (
        <div className="flex flex-wrap justify-center gap-16">{productsPet.map(product => <Product key={product._id} product={product} />)}</div>
    )
}

export default Shop