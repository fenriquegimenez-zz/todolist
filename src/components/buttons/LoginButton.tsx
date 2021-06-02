import { useAuth0 } from "@auth0/auth0-react"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <div className="text-center my-3">
      <button onClick={() => loginWithRedirect()} className="btn btn-primary">
        Iniciar sesión
      </button>
    </div>
  )
}

export default LoginButton
