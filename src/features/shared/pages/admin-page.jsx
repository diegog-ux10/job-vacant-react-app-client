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
import  HomeAdmin  from '../../shared/pages/home-admin'

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
      <aside className="h-screen w-1/6 bg-black p-4">
        <h2 className="text-white mb-4">Menu de Administracion</h2>
        <hr />
        <ul className="mt-4 w-full">
          <li className="w-full">
          <a
              onClick={handleHomeAdminBtnClick}
              className="text-white inline-block w-full hover:bg-slate-500 py-2 px-4 rounded"
            >
              Página Principal
            </a>
            <a
              onClick={handleVacancyBtnClick}
              className="text-white inline-block w-full hover:bg-slate-500 py-2 px-4 rounded"
            >
              Ver Vacantes Publicadas
            </a>
          </li>
          <li className="w-full">
            <a
              onClick={handleAppliesBtnClick}
              className="text-white inline-block w-full hover:bg-slate-500 py-2 px-4 rounded"
            >
              Ver Postulantes
            </a>
          </li>
          <li className="w-full">
            <a
              onClick={handleHomeBtnClick}
              className="text-white inline-block w-full hover:bg-slate-500 py-2 px-4 rounded"
            >
              Regresar al Home
            </a>
          </li>
          <li className="w-full">
          </li>
        </ul>
      </aside>
      <section className='w-screen'>
      <nav className="flex justify-between bg-slate-400 h-20 items-center">
          <h1 className="text-3xl font-bold ml-4">Bienvenido Adminitrador</h1>
          <div>
            <button variant="contained" onClick={handleClick}>
              <Stack direction="row" spacing={3} className="mr-6">
                <Avatar sx={{ bgcolor: deepOrange[500] }}>A</Avatar>
              </Stack>
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
              <a className="px-3 py-1 cursor-pointer" onClick={handleLogoutBtnClick}>
                Logout <LogoutIcon/>
              </a>
            </Popover>
          </div>
        </nav>
      <div >
        {adminView === 'admin' && <HomeAdmin/>}
        {adminView === 'vacancies' && <JobVacanciesView />}
        {adminView === 'applies' && <JobAppliesView />}
      </div>
      </section>
    </div>
  )
}
