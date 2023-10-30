import { useDispatch, useSelector } from 'react-redux'
import { ModalWrapper } from '../../shared'
import { CreateVacancyForm } from '../components'
import { JobVacanciesTable } from '../components'
import { openModalVacancyForn } from '../../../redux/slices/site-slice'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { deepOrange } from '@mui/material/colors'
import Popover from '@mui/material/Popover'
import { logout } from '../../../redux/slices/user-slice'
import * as React from 'react'

export const JobVacanciesView = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const { isModalVacancyFormOpen } = useSelector((state) => state.site)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(openModalVacancyForn())
  }
  const handleClickToggle = (event) => {
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
    <div className="w-full">
      <nav className="flex justify-between bg-slate-400 h-20 items-center mb-4">
        <h1 className="text-3xl font-bold ml-4">Bienvenido Adminitrador</h1>
        <div>
          <button variant="contained" onClick={handleClickToggle}>
            <Stack direction="row" spacing={2} className="mr-6">
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
            <a className="px-3 cursor-pointer" onClick={handleLogoutBtnClick}>
              Logout
            </a>
          </Popover>
        </div>
      </nav>
      <div className="flex justify-between items-center m-6">
        <h1 className="font-bold text-lg">Vacantes Publicadas</h1>
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          + Crear Vacante
        </button>
      </div>

      {isModalVacancyFormOpen && (
        <ModalWrapper>
          <CreateVacancyForm />
        </ModalWrapper>
      )}
      <JobVacanciesTable />
    </div>
  )
}
