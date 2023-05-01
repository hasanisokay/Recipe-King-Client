import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/login/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Homepage from '../pages/front-homepage/Homepage';
import Blog from '../pages/blog/Blog';

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Home></Home>,
        children:[
            {
                path:"/",
                element: <Homepage></Homepage>
            },
            {
                path:"blog",
                element: <Blog></Blog>
            }

        ]
    },
    {
        path:"login",
        element: <Login></Login>
    },
    {
        path: "register",
        element:<Register></Register>
    }
])

const Routes = () => {

    return (
        <div>
            
        </div>
    );
};

export default Routes;