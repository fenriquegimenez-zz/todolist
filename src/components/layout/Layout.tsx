import React from "react"
import { LayoutChild } from "@/types/types"
import { isDay } from "utils/utils"

const Layout = ({ children }: LayoutChild) => {
  return (
    <div
      className={`container ${
        isDay ? "bg-light text-dark" : "bg-dark text-light "
      }`}
      style={{
        height: "90vh",
      }}
    >
      {children}
    </div>
  )
}

export default Layout
