import { useEffect, useState } from 'react'
import { vacantApi } from '../../../api/vacant-api'
import { Table } from '../../shared/components/Table'
import { mapToRowsTable } from '../../shared/helpers/mapToRowsTable'


export const JobVacanciesTable = () => {

  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await vacantApi.getVacancies()
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
     return data !== null ?  (<Table columns={columns} rows={mapToRowsTable(data)} />) : (<h1>Error</h1>)
  }

}
