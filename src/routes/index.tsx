
import { createBrowserRouter} from "react-router-dom";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import {Home} from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <div>Upas!!! <br/> Pagina não encontrada!!!</div>,
        element: <Home/>,
    },
    {
        path: "/dashboard",
        errorElement: <div>Upas!!! <br/> Pagina não encontrada!!!</div>,
        element: <Dashboard/>,
    },
    {
        path: "/login",
        errorElement: <div>Upas!!! <br/> Pagina não encontrada!!!</div>,
        element: <Login/>,
    },
]);