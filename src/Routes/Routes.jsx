import React from 'react';
import Roots from '../Pages/Books/Roots/Roots';
import {
  createBrowserRouter,
  
} from "react-router";
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Components/BookDetails/BookDetails';
import ReadList from '../Pages/ReadList/ReadList';
export const router = createBrowserRouter([
  {
    path: "/",
 Component:Roots,
 errorElement:<ErrorPage></ErrorPage>,
 children:[
    {
        index:true,
        loader:()=>fetch('booksData.json'),
        path:'/',
        Component:Home,
    },
    {
      path:'/about',
      Component:About,
    },
    {
      path:'/bookDetails/:id',
      loader:()=>fetch('booksData.json'),
      Component:BookDetails
    },
    {
      path:'/readList',
      loader:()=>fetch('booksData.json'),
      Component:ReadList,
    }
 ]
  },
]);