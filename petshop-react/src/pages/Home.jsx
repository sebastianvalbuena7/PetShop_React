import usePetshop from "../hooks/usePetShop"

export default function Home() {
    const { productsPet } = usePetshop()
    return (
        <div>{productsPet.map(product => <li>pro</li>)}</div>
    )
}