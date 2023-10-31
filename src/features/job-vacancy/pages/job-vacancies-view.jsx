import { useDispatch, useSelector } from 'react-redux'
import { ModalWrapper } from '../../shared'
import { CreateVacancyForm } from '../components'
import { JobVacanciesTable } from '../components'
import { openModalVacancyForn } from '../../../redux/slices/site-slice'

export const JobVacanciesView = () => {
  const { isModalVacancyFormOpen } = useSelector((state) => state.site)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(openModalVacancyForn())
  }

  return (
    <div className="w-full">
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
