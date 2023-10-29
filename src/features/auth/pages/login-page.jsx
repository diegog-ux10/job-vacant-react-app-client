import { useEffect } from 'react'

import Swal from 'sweetalert2'

import { useAuthStore } from '../../shared/hooks'
import { useForm } from '../../shared/hooks/useForm'

// Estado Inicial del Formulario de Login
const initialState = {
  email: '',
  password: '',
}

export const LoginPage = () => {
  const { startLogin, errorMssg } = useAuthStore()
  const { formState, onInputChange } = useForm(initialState)

  // const dispatch = useDispatch()
  // const navigate = useNavigate()

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    try {
      startLogin(formState)
      // navigate('/admin')
    } catch (error) {
      console.error('Error sending data:', error)
    }
  }

  useEffect(() => {
    if (errorMssg !== undefined) {
      Swal.fire('Error al hacer login', errorMssg, 'error')
    }
  }, [errorMssg])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Iniciar Sesion</h1>
        <p className="text-gray-600 mb-4">
          Por favor inicie sesión para continuar
        </p>
        <form
          onSubmit={handleLoginSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              name="email"
              value={formState.email}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              value={formState.password}
              onChange={onInputChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
