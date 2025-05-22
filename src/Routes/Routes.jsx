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
import UpdatePlant from "../Pages/UpdatePlant";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch("http://localhost:3000/plant"),
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
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/plants/${params.id}`),
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
        path: "/myPlants/:email",
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({params}) => fetch(`http://localhost:3000/plant/${params.email}`),
        element: (
          <PrivetRoutes>
            <MyPlants></MyPlants>
          </PrivetRoutes>
        ),
      },
      {
        path: "/updatePlant/:id",
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/plants/${params.id}`),
        Component: UpdatePlant,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
  },
]);
