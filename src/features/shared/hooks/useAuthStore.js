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
      dispatch(login(data.user))
      Swal.fire(
        'Has entrado correctamente',
        `Bienvenido ${data.user.name}`,
        'success'
      )
    } catch (error) {
      Swal.fire('Error', error, 'error')
    }
  }

  return {
    status,
    errorMssg,
    user,
    startLogin,
  }
}
