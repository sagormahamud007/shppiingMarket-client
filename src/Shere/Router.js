import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/Signup/SignUp";
import ProductList from "../Components/ProductList/ProductList.jsx";
import Cart from "../Pages/Cart/Cart";
import Dashboard from "../Pages/DashBoard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ProductsCategory from "../Pages/ProductsCategory/ProductsCategory";
import { async } from "@firebase/util";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
            path:'/*',
            element:<ErrorPage></ErrorPage>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },

            {
                 path:"/productList",
                 element:<ProductList></ProductList>
            },
            {
                path:"/cart",
                element:<PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path:"/productCategory/:id",
                element:<ProductsCategory></ProductsCategory>,
                loader:async ({ params }) => {
                    return fetch(`https://shopping-market-server.vercel.app/features/${params.id}`);
                  }
            }
        ])
    },
    {
        path:"/dashBoard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
])
