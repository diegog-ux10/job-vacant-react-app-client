import React from 'react'
import { useEffect, useState } from 'react'
import { vacantApi } from '../../../api/vacant-api'
import { mapToRowsTableVacant } from '../../shared/helpers'
import { AdminTable } from '../../shared/components'
import { CircularProgress } from '@mui/material'
import { useSelector } from 'react-redux'
import axios from 'axios'

export const JobVacanciesTable = () => {
  const {
    user: { id },
  } = useSelector((state) => state.user)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await vacantApi.getVacancies(null, id)
        setData(response.data)
      } catch (error) {
        console.log('Error fetching data:', error)
      }
    }
    fetchData()
  }, [vacantApi])
  
  const handleDeleteRow = async (id) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/job-vacancy/${id}`);
      if (response.status === 204) {
        console.log('Eliminada con éxito')
        return
      } else {
        console.log('Error al eliminar la fila: respuesta inesperada del servidor');
      }
    } catch (error) {
      console.error('Error al eliminar la fila', error);
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'title',
      headerName: 'Titulo',
      width: 350,
      editable: true,
    },
    {
      field: 'description',
      headerName: 'Descripción',
      width: 150,
      editable: true,
    },
    {
      field: 'salary',
      headerName: 'Salario',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'delete',
      headerName: 'Borrar',
      width: 90,
      renderCell: (params) => (
        <button onClick={() => handleDeleteRow(params.row.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 cursor-pointer text-red-500"
          >
            <path
              fillRule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      ),
    },
  ]

  return data !== null ? (
    <AdminTable columns={columns} rows={mapToRowsTableVacant(data)} />
  ) : (
    <CircularProgress />
  )
}
