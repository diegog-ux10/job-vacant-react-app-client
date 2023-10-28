import { useEffect, useState } from 'react'
import { vacantApi } from '../../../api/vacant-api'
import { mapToRowsTableVacant } from '../../shared/helpers'
import { AdminTable } from '../../shared/components'


export const JobVacanciesTable = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await vacantApi.getVacancies();
        setData(response.data.vacancies); // Accede a la propiedad "vacancies"
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

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
  ];

  return data !== null ? (
    <AdminTable columns={columns} rows={mapToRowsTableVacant(data)} />
  ) : (
    <div className="bg-red-500 text-white p-4 rounded shadow-lg">
      Tabla no Disponible
    </div>
  );
}

