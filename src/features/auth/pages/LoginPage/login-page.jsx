/* eslint-disable no-empty-pattern */
// import PropTypes from 'prop-types';

import { useState } from 'react'
import { vacantApi } from '../../../../api/vacant-api'
import { useDispatch } from 'react-redux';
import { authenticate, setUser } from '../../../../redux/slices/user-slice';
import { useNavigate } from "react-router-dom";

export const LoginPage = ({}) => {
  const [formData, setFormData] = useState({
    email: '',
    userpassword: '',
  })

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleLoginSubmit = async (e) => {
	e.preventDefault();
    try {
      const response = await vacantApi.auth(formData)
      dispatch(setUser(response.data.user))
      dispatch(authenticate())
      navigate("/");
    } catch (error) {
      console.error('Error sending data:', error)
    }
  }

  return (
    <div className="bg-blue-500 h-full w-11">
      <form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">login</button>
      </form>
    </div>
  )
}

// LoginPage.propTypes = {};
