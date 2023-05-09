import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PetLayout } from "./layout/PetLayout"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"
import SeeMore from "./pages/SeeMore"
import { Carrito } from "./pages/Carrito"
import { PetShopProvider } from "./provider/PetShopProvider"

function App() {
  return (
    <BrowserRouter>
      <PetShopProvider>
        <Routes>
          <Route path="/" element={<PetLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="shop" element={<Shop />}></Route>
            <Route path="blog" element={<Blog />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="seeMore/:id" element={<SeeMore/>}></Route>
            <Route path="carrito" element={<Carrito />}></Route>
          </Route>
        </Routes>
      </PetShopProvider>
    </BrowserRouter>
  )
}

export default App