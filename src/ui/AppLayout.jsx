import React from "react"
import Header from "./Header"
import CartOverview from "./../features/cart/CartOverview"
import { Outlet } from "react-router"

export default function AppLayout() {
  return (
    <div>
      <Header />
      <h1>Content</h1>
      <Outlet />
      <CartOverview />
    </div>
  )
}
