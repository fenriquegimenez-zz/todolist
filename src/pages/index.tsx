import { useAuth0 } from "@auth0/auth0-react"

import LoginButton from "@/components/buttons/LoginButton"
import LogoutButton from "@/components/buttons/LogoutButton"
import Spinner from "@/components/spinner/Spinner"
import TodoForm from "@/components/Todo/TodoForm"
import TodoList from "@/components/Todo/TodoList"

const index = () => {
  const { isAuthenticated, user, isLoading } = useAuth0()

  return (
    <div className="text-center">
      <h1 className="text-center">Lista de tareas</h1>
      {isAuthenticated && `Hola, ${user?.nickname}`}
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
