import { useEffect, useState } from 'react'
import { VacancyCard } from '../../job-vacancy'
import { vacantApi } from '../../../api/vacant-api'

export const HomePage = () => {
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

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {data !== null ? (
        data.map((vacancy) => (
          <VacancyCard
            key={vacancy.id}
            title={vacancy.title}
            description={vacancy.description}
            salary={vacancy.salary}
          />
        ))
      ) : (
        <h2>No hay Vacantes Disponibles</h2>
      )}
    </section>
  )
}
