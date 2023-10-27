import { useDispatch, useSelector } from 'react-redux'
import { ModalWrapper } from '../../shared'
import { CreateVacancyForm } from '../components'
import { JobVacanciesTable } from '../components'
import { openModal } from '../../../redux/slices/site-slice'

export const JobVacanciesView = () => {
  const { isModalOpen } = useSelector((state) => state.site)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(openModal())
  }
  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-400 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 rounded-md w-[150px]"
      >
        Create Vacant
      </button>
      {isModalOpen && (
        <ModalWrapper>
          <CreateVacancyForm />
        </ModalWrapper>
      )}
      <JobVacanciesTable />
    </div>
  )
}
