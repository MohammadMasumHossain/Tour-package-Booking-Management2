
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
import Updated from "../pages/Updated";
import PrivateRoute from "../route/PrivateRoute";
import TermsandCondition from "../components/TermsandCondition";
import PrivacyPage from "../components/PrivacyPage";



const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
        {
            index:true,
            loader:()=>fetch('https://tour-package-server.vercel.app/tours'),
            Component:Home
        },
        {
           path:'/tours/:id',
           element:<PrivateRoute><PackagesDetails></PackagesDetails></PrivateRoute>,
           loader :({params})=> fetch(`https://tour-package-server.vercel.app/tours/${params.id}`)
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
          loader:()=>fetch('https://tour-package-server.vercel.app/tours'),
          element:<AllPackages></AllPackages>
        },
        
        {
          path:'/aboutus',
          Component:AboutUs
        },
        {
          path:'/mybooking',
          
          element:<PrivateRoute><MyBooking></MyBooking></PrivateRoute>
        },
        {
          path:'/addpackage',
          element:<PrivateRoute><AddPackage></AddPackage></PrivateRoute>
        },
        {
          path:'/managemypackages',
          element:<PrivateRoute><Managemypackages></Managemypackages></PrivateRoute>
        },
        {
          path:'/page',
          element:<PrivacyPage></PrivacyPage>
        },
        {
          path:'/terms',
          element:<TermsandCondition></TermsandCondition>
        },
        
        {
          path:'/booknow',
           
          Component:BookNow
          
        },
        {
        path:"/update/:id",
         loader: async ({ params }) => {
        return fetch(`https://tour-package-server.vercel.app/tours/${params.id}`);
        },
        element:<Updated></Updated>
      },
      
        {
           path:'*',
           Component:Error
        }
    ]
  },
]);

export default router;