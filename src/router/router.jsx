
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

import PackagesDetails from "../pages/PackagesDetails";
import Error from "../components/Error";
import BookNow from "../components/BookNow";

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
        {
            index:true,
            loader:()=>fetch('http://localhost:3000/tours'),
            Component:Home
        },
        {
           path:'/tours/:id',
           Component:PackagesDetails,
           loader :({params})=> fetch(`http://localhost:3000/tours/${params.id}`)
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
          loader:()=>fetch('http://localhost:3000/tours'),
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
        },
        {
          path:'/booknow',
           
          Component:BookNow
          
        },
        {
           path:'*',
           Component:Error
        }
    ]
  },
]);

export default router;