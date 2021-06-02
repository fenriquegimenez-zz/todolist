import { useAuth0 } from "@auth0/auth0-react"

import LoginButton from "@/components/buttons/LoginButton"

const index = () => {
  const { isAuthenticated, user } = useAuth0()
  return (
    <div className="text-center">
      <h1 className="text-center">Lista de tareas</h1>
      {isAuthenticated ? `Hola, ${user?.name}` : <LoginButton />}
    </div>
  )
}

export default index
