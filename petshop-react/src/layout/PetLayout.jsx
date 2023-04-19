import { Header } from "../components/Header"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify";

export const PetLayout = () => {
    return (
        <>
            <Header/>
            <Outlet />
            <ToastContainer/>
        </>
    )
}