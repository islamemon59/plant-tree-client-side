import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Component/Home";
import Login from "../Component/Login";
import Register from "../Component/Register";
import PrivetRoutes from "../Pages/PrivetRoutes";
import AddPlant from "../Pages/AddPlant";
import MyPlants from "../Pages/MyPlants";
import NotFoundPage from "../Component/NotFoundPage";
import AllPlants from "../Pages/AllPlants";
import Loading from "../Component/Loading";
import ViewDetails from "../Pages/ViewDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/allPlants",
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch("http://localhost:3000/plants"),
        Component: AllPlants,
      },
      {
        path: "/viewDetails/:id",
        loader: ({params}) => fetch(`http://localhost:3000/plants/${params.id}`),
        element: (
          <PrivetRoutes>
            <ViewDetails></ViewDetails>
          </PrivetRoutes>
        ),
      },
      {
        path: "/addPlant",
        element: (
          <PrivetRoutes>
            <AddPlant></AddPlant>
          </PrivetRoutes>
        ),
      },
      {
        path: "/myPlants",
        element: (
          <PrivetRoutes>
            <MyPlants></MyPlants>
          </PrivetRoutes>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
  },
]);
