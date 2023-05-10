export const ProductMoreComp = ({ productMore }) => {
    return (
        <div>
            <h3 className="font-bold text-xl mb-4">{productMore?.producto}</h3>
            <div className="flex gap-6">
                <img className="w-80 rounded-md" src={productMore?.imagen} alt={productMore?.producto} />
                <p>{productMore?.descripcion}</p>
            </div>
            <div className="flex justify-center gap-4 mt-8">
                <p className="font-bold">{productMore?.categoria}</p>
                <p className="font-bold">Price: ${productMore?.precio}</p>
            </div>
        </div>
    )
}