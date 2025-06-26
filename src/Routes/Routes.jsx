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
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import DashboardLayout from "../MainLayout/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch("https://plant-tree-server.vercel.app/plant"),
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
        loader: () => fetch("https://plant-tree-server.vercel.app/plants"),
        Component: AllPlants,
      },
      {
        path: "/viewDetails/:id",
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({ params }) =>
          fetch(`https://plant-tree-server.vercel.app/plants/${params.id}`),
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
          fetch(`https://plant-tree-server.vercel.app/plants/${params.id}`),
        Component: UpdatePlant,
      },
      {
        path: "aboutUs",
        Component: AboutUs,
      },
      {
        path: "contact",
        Component: ContactUs,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivetRoutes>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
  },
]);
