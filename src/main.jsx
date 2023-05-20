import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Layout from './components/Layout/Layout.jsx';
import Tableitem from './components/Tableitem/Tableitem';
import Add from './components/Add/Add';
import Update from './components/Update/Update';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
       {
        index:true,
        element:<Tableitem></Tableitem>
       },{
        path:'/add',
        element:<Add></Add>
       },{
        path:'/update/:id',
        element:<Update></Update>
       }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
