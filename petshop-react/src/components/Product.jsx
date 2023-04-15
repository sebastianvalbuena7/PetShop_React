import usePetshop from "../hooks/usePetShop"

export const Product = ({ product }) => {
    const { handleCart } = usePetshop()
    const { producto, categoria, precio, disponibles, imagen } = product

    return (
        <div className="w-72 rounded overflow-hidden shadow-lg mb-8">
            <img className="w-full" src={imagen} alt={producto} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{producto}</div>
                <p className="text-gray-700 text-base">Category: {categoria}</p>
                <p className="text-gray-700 text-base">Precio: ${precio}</p>
                <p className="text-gray-700 text-base">Disponibles: {disponibles}</p>
                <button type="button" className="mt-4 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 text-md font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" onClick={() => handleCart(product)}>Add Cart</button>
            </div>
        </div>
    )
}