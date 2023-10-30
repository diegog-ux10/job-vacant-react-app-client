import { useDispatch, useSelector } from 'react-redux';
import { removeMssg } from '../../../redux/slices/site-slice';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

export const FeedbackMssg = () => {
  const { mssg, mssgStatus } = useSelector((state) => state.site);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeMssg());
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="w-1/3 bg-white shadow-md rounded p-8 text-center">
        {mssgStatus === 'success' && <CheckCircleIcon className="text-green-500 text-6xl mx-auto" />}
        {mssgStatus === 'error' && <ErrorIcon className="text-red-500 text-6xl mx-auto" />}
        <p className="font-bold text-xl mb-4">{mssg}</p>
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
