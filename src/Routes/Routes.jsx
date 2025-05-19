import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Component/Home";
import Login from "../Component/Login";
import Register from "../Component/Register";
import PrivetRoutes from "../Pages/PrivetRoutes";
import AddPlant from "../Pages/AddPlant";
import MyPlants from "../Pages/MyPlants";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path:"/login",
                Component: Login,
            },
            {
                path:"/register",
                Component: Register,
            },
            {
                path: "/addPlant",
                element: <PrivetRoutes>
                    <AddPlant></AddPlant>
                </PrivetRoutes>
            },
            {
                path: "/myPlants",
                element: <PrivetRoutes>
                    <MyPlants></MyPlants>
                </PrivetRoutes>
            }
        ]
    }
])