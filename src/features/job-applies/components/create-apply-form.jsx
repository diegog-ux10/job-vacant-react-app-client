import { useState } from 'react'
import { vacantApi } from '../../../api/vacant-api'
import { useDispatch, useSelector } from 'react-redux'
import {
  closeModalApplyForm,
  setSelectedVacancy,
} from '../../../redux/slices/site-slice'
import Swal from 'sweetalert2'

const initialState = {
  name: '',
  email: '',
  phone: '',
  birthdate: '',
  job_vacancy_id: null,
  work_experience: null,
}

export const CreateApplyForm = () => {
  const [formData, setFormData] = useState(initialState)
  const { selectedVacancy } = useSelector((state) => state.site)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCancelClick = () => {
    dispatch(setSelectedVacancy(null))
    dispatch(closeModalApplyForm())
  }

  const handleCreateVacancySubmit = async (e) => {
    e.preventDefault()
    try {
      setFormData({ ...formData, ['job_vacancy_id']: selectedVacancy })
      const response = await vacantApi.createApply(formData)
      console.log(response)
      dispatch(closeModalApplyForm())
      setFormData(initialState)
      Swal.fire(
        'Postulacion Exitosa!',
        'Tu postulacion ha sido enviada con exito',
        'success'
      )
    } catch (error) {
      console.log(error)
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
          htmlFor="name"
        >
          Nombre Completo
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Tu Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="phone"
        >
          Tu Telefono
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phone"
          type="text"
          placeholder="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="work_experience"
        >
          Tu Telefono
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="work_experience"
          type="number"
          placeholder="work_experience"
          name="work_experience"
          value={formData.work_experience}
          onChange={handleChange}
        />
        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="birthdate"
        >
          Tu fecha de nacimiento
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="birthdate"
          type="date"
          placeholder="birthdate"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
        />
        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
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
