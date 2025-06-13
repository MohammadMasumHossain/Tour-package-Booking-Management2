
import {
  createBrowserRouter,

} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AllPackages from "../pages/AllPackages";
import AboutUs from "../pages/AboutUs";
import MyBooking from "../pages/MyBooking";
import AddPackage from "../pages/AddPackage";
import Managemypackages from "../pages/Managemypackages";

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'/register',
            Component:Register
        },
        {
            path:'/login',
            Component:Login
        },
        {
          path:'/allpackages',
          Component:AllPackages
        },
        {
          path:'/aboutus',
          Component:AboutUs
        },
        {
          path:'/mybooking',
          Component:MyBooking
        },
        {
          path:'/addpackage',
          Component:AddPackage
        },
        {
          path:'/managemypackages',
          Component:Managemypackages
        }
    ]
  },
]);

export default router;