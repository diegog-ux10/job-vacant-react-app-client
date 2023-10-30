import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { deepOrange } from '@mui/material/colors'
import Popover from '@mui/material/Popover'
import { logout } from '../../../redux/slices/user-slice'
import { useDispatch } from 'react-redux'
import vacante from '../../../assets/vacante.png'
import { vacantApi } from '../../../api/vacant-api'
import { useState, useEffect } from 'react'
import trabajadores from '../../../assets/trabajadores.jpg'
import LogoutIcon from '@mui/icons-material/Logout';

export default function HomeAdmin() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [contadorApplieses, setContadorApplieses] = useState(null)
  const [contadorVacanties, setContadorVacanties] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await vacantApi.getApplieses()
        setContadorApplieses(response.data.length)
      } catch {
        console.log('Error fetching data: ')
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await vacantApi.getVacancies()
        setContadorVacanties(response.data.length)
      } catch {
        console.log('Error fetching data: ')
      }
    }
    fetchData()
  }, [])

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
    <div className='w-full'>
      <div className="flex flex-col ">
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
        <section className="self-center flex gap-40 mt-24">
          <div className=" rounded-md ring-2 p-4">
            <h1 className="text-4xl mb-6 font-semibold">Postulantes</h1>
            <div className="flex items-center gap-4">
              <img src={trabajadores} className="h-60 w-70" />
              <h2 className="text-8xl">{contadorApplieses}</h2>
            </div>
          </div>
          <div className=" rounded-md ring-2 p-4">
            <h1 className="text-4xl mb-6 font-semibold">Vacantes</h1>
            <div className="flex items-center gap-8">
              <img className="h-60 w-72" src={vacante} />
              <h2 className="text-8xl">{contadorVacanties}</h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
