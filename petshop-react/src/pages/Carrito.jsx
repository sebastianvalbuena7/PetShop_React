import usePetshop from "../hooks/usePetShop"
import { ProductCart } from "../components/ProductCart"

export const Carrito = () => {
    const { productsCarrito, handleFinishBuy } = usePetshop()

    return (
        productsCarrito.length == 0 ? <h2 className="text-black font-bold text-xl text-center">No hay productos en el carrito</h2> : <div>
            {productsCarrito.map(product => (
                <div key={product._id} className="flex justify-center">
                    <ProductCart product={product} />
                </div>
            ))}
            <div className="flex justify-center">
                <button onClick={handleFinishBuy} className="rounded relative inline-flex group items-center justify-center font-bold px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-yellow-600 active:shadow-none shadow-lg bg-gradient-to-tr from-yellow-600 to-yellow-500 border-yellow-600 text-white mb-10">
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                    <span className="relative">Terminar compra</span>
                </button>
            </div>
        </div>
    )
}