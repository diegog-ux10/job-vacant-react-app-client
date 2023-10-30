import { useDispatch, useSelector } from 'react-redux'
import { vacantApi } from '../../../api/vacant-api'
import {
  checking,
  login,
} from '../../../redux/slices/user-slice'
import Swal from 'sweetalert2'

export const useAuthStore = () => {
  const { status, user, errorMssg } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const startLogin = async (formData) => {
    dispatch(checking())
    try {
      const { data } = await vacantApi.auth(formData)
      dispatch(login(data))
      Swal.fire(
        '¡Inicio de sesión exitoso!',
        `Bienvenido ${data.user.name}. Has iniciado sesión con éxito.`,
        'success'
      )
    } catch (error) {
      console.log(error);
      Swal.fire('Error en el inicio de sesión', error.message, 'error')
    }
  }

  return {
    status,
    errorMssg,
    user,
    startLogin,
  }
}
