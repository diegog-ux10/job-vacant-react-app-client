import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { deepOrange } from '@mui/material/colors'
import Popover from '@mui/material/Popover'
import { useState } from 'react'
import { JobVacanciesView } from '../../job-vacancy'
import { JobAppliesView } from '../../job-applies/'
import { useNavigate } from 'react-router'
import { logout } from '../../../redux/slices/user-slice'
import { useDispatch } from 'react-redux'
import LogoutIcon from '@mui/icons-material/Logout';
import HomeAdmin from '../../shared/pages/home-admin'

/* eslint-disable react/prop-types */
export const AdminPage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [adminView, setAdminView] = useState('admin')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleVacancyBtnClick = () => {
    setAdminView('vacancies')
  }

  const handleAppliesBtnClick = () => {
    setAdminView('applies')
  }

  const handleHomeBtnClick = () => {
    navigate('/')
  }
  const handleHomeAdminBtnClick = () => {
    setAdminView('admin')
  }


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const handleLogoutBtnClick = () => {
    dispatch(logout())
    localStorage.clear()
  }

  return (
    <div className="w-screen h-screen flex">
      <aside className="bg-gray-100 p-4">
        <h2 className="text-lg font-semibold mb-4">Menú de Administración</h2>
        <hr className="border-gray-300 my-4" />
        <ul className=' cursor-pointer'>
          <li className="mb-2">
            <a
              onClick={handleHomeAdminBtnClick}
              className="text-blue-500 hover:underline"
            >
              Página Principal
            </a>
          </li>
          <li className="mb-2">
            <a
              onClick={handleVacancyBtnClick}
              className="text-blue-500 hover:underline"
            >
              Ver Vacantes Publicadas
            </a>
          </li>
          <li className="mb-2">
            <a
              onClick={handleAppliesBtnClick}
              className="text-blue-500 hover:underline"
            >
              Ver Postulantes
            </a>
          </li>
          <li className="mb-2">
            <a
              onClick={handleHomeBtnClick}
              className="text-blue-500 hover:underline"
            >
              Regresar al Home
            </a>
          </li>
        </ul>
      </aside>

      <section className='w-screen'>
        <nav className="flex items-center justify-between p-4 bg-blue-500 text-white">
          <h1 className="text-2xl font-bold">Bienvenido Administrador</h1>
          <div className="flex items-center space-x-4">
            <button
              className="p-2 bg-blue-700 hover:bg-blue-600 rounded-full"
              onClick={handleClick}
            >
              <div className="flex items-center space-x-2">
                <div className="bg-orange-500 w-10 h-10 flex items-center justify-center rounded-full">A</div>
              </div>
            </button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <a
                className="block cursor-pointer p-2 text-blue-500 hover:text-blue-700"
                onClick={handleLogoutBtnClick}
              >
                Logout <LogoutIcon />
              </a>
            </Popover>
          </div>
        </nav>

        <div >
          {adminView === 'admin' && <HomeAdmin />}
          {adminView === 'vacancies' && <JobVacanciesView />}
          {adminView === 'applies' && <JobAppliesView />}
        </div>
      </section>
    </div>
  )
}
