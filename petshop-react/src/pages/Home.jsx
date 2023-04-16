import usePetshop from "../hooks/usePetShop"
import { Product } from "../components/Product"

export default function Home() {
    const { productsRandom } = usePetshop()

    return (
        <div className="flex flex-wrap justify-center gap-16">{productsRandom.map(product => <Product key={product._id} product={product} />)}</div>
    )
}