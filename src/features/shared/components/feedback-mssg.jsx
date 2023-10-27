import { useDispatch, useSelector } from 'react-redux'
import { removeMssg } from '../../../redux/slices/site-slice'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

export const FeedbackMssg = () => {
  const { mssg, mssgStatus } = useSelector((state) => state.site)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(removeMssg())
  }

  return (
    <div
      className={`flex flex-col fixed z-50 top-0 left-0 w-full min-h-screen bg-black bg-opacity-75 justify-center items-center`}
    >
      <div className="flex flex-col w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-center">
        {
          mssgStatus === 'success' && <CheckCircleIcon />
        }
                {
          mssgStatus === 'error' && <ErrorIcon />
        }
        <p className='bold'>{mssg}</p>
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Aceptar
        </button>
      </div>
    </div>
  )
}
