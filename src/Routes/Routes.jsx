import React from 'react';
import Roots from '../Pages/Books/Roots/Roots';
import {
  createBrowserRouter,
  
} from "react-router";
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
export const router = createBrowserRouter([
  {
    path: "/",
 Component:Roots,
 errorElement:<ErrorPage></ErrorPage>,
 children:[
    {
        index:true,
        Component:Home,
    }
 ]
  },
]);