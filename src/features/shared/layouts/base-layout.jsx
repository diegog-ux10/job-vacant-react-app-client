import { useNavigate } from 'react-router'
import logo from './../../../assets/logo.png'

// eslint-disable-next-line react/prop-types
export const BaseLayout = ({ children }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/login')
  }
  return (
    <div className="w-screen bg-gray-100">
      <nav className=" bg-slate-700 p-4 text-white flex items-center justify-between">
        <img src={logo} className="w-12 h-12 rounded-full" alt="Logo" />
        <h1 className="text-2xl font-bold">Encuentra o Publica Empleos</h1>
        <a
          onClick={handleClick}
          className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-200 hover:text-black"
        >
          Publicar Vacantes
        </a>
      </nav>
      {children}
    </div>
  )
}
