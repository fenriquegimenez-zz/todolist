import { useAuth0 } from "@auth0/auth0-react"

const LogoutButton = () => {
  const { logout } = useAuth0()
  return (
    <div className="text-center my-3">
      <button onClick={() => logout()} className="btn btn-outline-primary">
        Cerrar sesión
      </button>
    </div>
  )
}

export default LogoutButton
