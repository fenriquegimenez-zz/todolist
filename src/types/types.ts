import React from "react"

export interface LayoutChild {
  children?: React.ReactNode
}

export interface Task {
  task: string
  createdAt: string
  done: boolean
  id?: string
}
