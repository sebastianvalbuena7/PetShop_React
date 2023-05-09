import usePetshop from "../hooks/usePetShop"
import { Product } from "../components/Product"
import { Spinner } from "../components/Spinner"

const Shop = () => {
    const { productsPet, spinnerLoad } = usePetshop()
    return (
        <>
            {spinnerLoad ? <Spinner /> : <div className="flex flex-wrap justify-center gap-16">{productsPet.map(product => <Product key={product._id} product={product} />)}</div>
            }
        </>
    )
}

export default Shop