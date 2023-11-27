import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/HomePage/Home.jsx'
import AboutPage from './Pages/AboutPage/AboutPage.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Login from './Pages/Login/Login.jsx'
import Product from './Components/Product/Product.jsx'
import Customer from './Components/Customer/Customer.jsx'
import Order from './Components/Order/Order.jsx'
import Inventory from './Components/Inventory/Inventory.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage/>,
        children:[
          {
            path:"/about/product",
            element:<Product/>
          },
          {
            path:"/about/customer",
            element:<Customer/>
          },
          {
            path:"/about/order",
            element:<Order/>
          },
          {
            path:"/about/inventory",
            element:<Inventory/>
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
