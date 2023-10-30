import { useEffect, useState } from 'react'
import { vacantApi } from '../../../api/vacant-api'
import { mapToRowsTableApplises } from '../../shared/helpers'
import { AdminTable } from '../../shared/components'

function JobAppliesesTable() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await vacantApi.getApplieses()
        setData(response.data)
        console.log(response.data)
      } catch {
        console.log('Error fetching data: ')
      }
    }
    fetchData()
  }, [])

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Nombre',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
      editable: true,
    },
    {
      field: 'job_vacancy',
      headerName: 'Puesto Vacante',
      type: 'number',
      width: 110,
      editable: true,
    },
  ]
  console.log(data)
  {
    return data !== null ? (
      <AdminTable columns={columns} rows={mapToRowsTableApplises(data)} />
    ) : (
      <h1>Error</h1>
    )
  }
}
export default JobAppliesesTable
