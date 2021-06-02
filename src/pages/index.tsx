import { useAuth0 } from "@auth0/auth0-react"

import LoginButton from "@/components/buttons/LoginButton"
import LogoutButton from "@/components/buttons/LogoutButton"
import Spinner from "@/components/spinner/Spinner"
import TodoForm from "@/components/Todo/TodoForm"
import TodoList from "@/components/Todo/TodoList"
import { useEffect } from "react"

const index = () => {
  const { isAuthenticated, user, isLoading } = useAuth0()

  useEffect(() => {
    localStorage.setItem("user", user?.nickname as string)
  }, [user?.nickname])

  return (
    <div className="text-center">
      <h1 className="text-center">Lista de tareas</h1>
      {isAuthenticated && `Hola, ${user?.name}`}
      {isLoading ? (
        <Spinner />
      ) : isAuthenticated ? (
        <LogoutButton />
      ) : (
        <LoginButton />
      )}
      <TodoList />
      <TodoForm />
    </div>
  )
}

export default index
