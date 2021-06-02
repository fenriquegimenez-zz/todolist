import React, { FormEvent, useState } from "react"
import { db } from "@/services/firestore"
import { useAuth0 } from "@auth0/auth0-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { isDay } from "utils/utils"
import Spinner from "../spinner/Spinner"

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useAuth0()

  const formSubmit = (event: FormEvent) => {
    event.preventDefault()
    const createdDate = new Date().toLocaleString("es")
    createTask(newTodo, user?.nickname as string, createdDate)
    setIsLoading(true)
    setNewTodo("")
  }

  const createTask = async (task: string, user: string, date: string) => {
    await db
      .collection(user)
      .doc()
      .set({ task, date, done: false })
      .then(() => setIsLoading(false))
  }

  return (
    <form onSubmit={formSubmit} style={{ maxWidth: "90%" }}>
      <div className="input-group text-center">
        <input
          type="text"
          className={`form-control ${
            isDay ? "bg-light text-dark" : "bg-dark text-light"
          }`}
          placeholder="Ingrese su tarea"
          onChange={e => setNewTodo(e.target.value)}
          value={newTodo}
        />
        <button
          style={{ minWidth: "75px", maxHeight: "40px" }}
          className="btn btn-success"
        >
          {isLoading ? <Spinner /> : "Cargar"}
        </button>
      </div>
    </form>
  )
}

export default TodoForm
