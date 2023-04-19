import usePetshop from "../hooks/usePetShop"
import { Product } from "../components/Product"
import { Spinner } from "../components/Spinner"

export default function Home() {
    const { productsRandom, spinnerLoad } = usePetshop()

    return (
        spinnerLoad ? <Spinner/> : <div className="flex flex-wrap justify-center gap-16">{productsRandom.map(product => <Product key={product._id} product={product} />)}</div>
    )
}