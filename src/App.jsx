import React from "react"
import Home from "./ui/Home"
import Menu from "./features/menu/Menu"
import Cart from "./features/cart/Cart"
import Order from "./features/order/Order"
import CreateOrder from "./features/order/CreateOrder"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./ui/AppLayout"

export default function App() {
  const routes = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/menu", element: <Menu /> },
        { path: "/cart", element: <Cart /> },
        { path: "/order/new", element: <CreateOrder /> },
        { path: "/order/:orderId", element: <Order /> },
      ],
    },
  ])
  return <RouterProvider router={routes}></RouterProvider>
}
