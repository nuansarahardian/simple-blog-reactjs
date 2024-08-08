import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Home from '../pages/Index';
import About from "../pages/about";
import SinglePost from "../pages/blogs/_id";
import Blog from "../pages/blogs";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/blog/:id",
                element: <SinglePost />
            },

            {
                path: "/blog",
                element: <Blog />
            }
        ]
    },

])