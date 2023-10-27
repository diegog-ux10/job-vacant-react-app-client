import { useState } from 'react';
import { vacantApi } from '../../../api/vacant-api';
import { useDispatch } from 'react-redux';
import { authenticate, setUser } from '../../../redux/slices/user-slice';
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '', // Cambié 'userpassword' a 'password'
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await vacantApi.auth(formData);
      dispatch(setUser(response.data.user));
      dispatch(authenticate());
      navigate("/");
    } catch (error) {
      console.error('Error sending data:', error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Iniciar Sesion</h1>
        <p className="text-gray-600 mb-4">Por favor inicie sesión para continuar</p>
        <form onSubmit={handleLoginSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
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
  );
}
