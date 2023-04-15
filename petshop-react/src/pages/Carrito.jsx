import usePetshop from "../hooks/usePetShop"

export const Carrito = () => {
    const { productsCarrito } = usePetshop()

    return (
        <div>{productsCarrito.map(product => <li className="text-white" key={product._id}>{product.producto}</li>)}</div>
    )
}