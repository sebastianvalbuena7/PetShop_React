import usePetshop from "../hooks/usePetShop"
import { ProductCart } from "../components/ProductCart"

export const Carrito = () => {
    const { productsCarrito } = usePetshop()

    return (
        productsCarrito.length == 0 ? <h2 className="text-black font-bold text-xl text-center">No hay productos en el carrito</h2> : <div>{productsCarrito.map(product => <ProductCart key={product._id} product={product}/>)}</div>
    )
}