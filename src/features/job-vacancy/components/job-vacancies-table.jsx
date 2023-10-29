import { useEffect, useState } from 'react'
import { vacantApi } from '../../../api/vacant-api'
import { mapToRowsTableVacant } from '../../shared/helpers'
import { AdminTable } from '../../shared/components'
import { CircularProgress } from '@mui/material'
import { useSelector } from 'react-redux'

export const JobVacanciesTable = () => {
  const {
    user: { id },
  } = useSelector((state) => state.user)
  console.log(id)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await vacantApi.getVacancies(null, id)
        setData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'title',
      headerName: 'Titulo',
      width: 150,
      editable: true,
    },
    {
      field: 'description',
      headerName: 'Descripccion',
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
  ]

  {
    return data !== null ? (
      <AdminTable columns={columns} rows={mapToRowsTableVacant(data)} />
    ) : (
      <CircularProgress />
    )
  }
}
