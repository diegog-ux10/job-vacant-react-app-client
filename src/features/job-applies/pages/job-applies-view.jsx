import { JobAppliesTable } from '../components'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { deepOrange } from '@mui/material/colors'
import Popover from '@mui/material/Popover'
import { logout } from '../../../redux/slices/user-slice'
import * as React from 'react'
import { useDispatch } from 'react-redux'

export const JobAppliesView = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const dispatch = useDispatch()
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
      <div className="flex justify-between items-center  m-6">
        <h1 className="font-bold text-lg">Todas Los postulaciones</h1>
      </div>
      <JobAppliesTable />
    </div>
  )
}
