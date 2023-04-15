import { useContext } from "react"
import PetShopContext from "../provider/PetShopProvider"

const usePetshop = () => {
    return useContext(PetShopContext)
}

export default usePetshop