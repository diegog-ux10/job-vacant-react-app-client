import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import {
  openModalApplyForn,
  setSelectedVacancy,
} from '../../../redux/slices/site-slice'

export const VacancyCard = ({ title, description, salary, id, user }) => {
  console.log(user)
  const dispatch = useDispatch()

  const handleApplyClick = () => {
    dispatch(setSelectedVacancy(id))
    dispatch(openModalApplyForn())
  }

  return (
    <section className="bg-white rounded-lg shadow-md p-4">
      <header className="mb-2">
        <h2 className="text-2xl font-semibold text-blue-500">{title}</h2>
        <span className="text-gray-600">{user.company}</span>
        <p className="text-gray-600">{user.city}</p>
      </header>
      <main className="mb-4">
        <p className="text-gray-800">{description}</p>
        <h4 className="text-lg font-semibold text-blue-500 mt-2">
          Salario: ${salary}
        </h4>
      </main>
      <footer className="flex justify-between">
        <a href="#" className="text-blue-500 hover:underline">
          Más detalles
        </a>
        <a
          onClick={handleApplyClick}
          className=" cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Aplicar ahora
        </a>
      </footer>
    </section>
  )
}

VacancyCard.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
}
