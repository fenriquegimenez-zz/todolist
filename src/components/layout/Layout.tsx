import React from "react"
import { LayoutChild } from "@/types/types"

const Layout = ({ children }: LayoutChild) => {
  const time = new Date().getHours()
  const isDay = time > 7 && time < 19
  return (
    <div className={`container ${isDay ? "bg-light" : "bg-dark"}`}>
      {children}
    </div>
  )
}

export default Layout
