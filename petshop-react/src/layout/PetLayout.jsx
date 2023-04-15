import { Header } from "../components/Header"
import { Outlet } from "react-router-dom"

export const PetLayout = () => {
    return (
        <>
            <Header/>
            <Outlet />
        </>
    )
}