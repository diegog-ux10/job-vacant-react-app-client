import { useState } from 'react'
import { vacantApi } from '../../../api/vacant-api'
import { useDispatch } from 'react-redux'
import { closeModalVacancyForm } from '../../../redux/slices/site-slice'
import Swal from 'sweetalert2'

const initialState = {
  title: '',
  description: '',
  salary: '',
  user_id: '1',
}

export const CreateVacancyForm = () => {
  const [formData, setFormData] = useState(initialState)

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCancelClick = () => {
    dispatch(closeModalVacancyForm())
  }

  const handleCreateVacancySubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await vacantApi.createVacancies(formData)
      console.log(response)
      dispatch(closeModalVacancyForm())
      Swal.fire(
        'Vacante Creada',
        'La vacante ha sido creada corectamente',
        'success'
      )
      setFormData(initialState)
    } catch (error) {
      Swal.fire('Error', `Error: ${error}`, 'error')
    }
  }

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3"
      onSubmit={handleCreateVacancySubmit}
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
           Título para la Vacante
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
           Descripción de la Vacante
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          type="text"
          placeholder="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="salary"
        >
          Salario
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="salary"
          type="text"
          placeholder="salary"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Crear Vacante
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleCancelClick}
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}
