import { useEffect, useState } from 'react'
import { VacancyCard } from '../../job-vacancy'
import { vacantApi } from '../../../api/vacant-api'
import { useDispatch, useSelector } from 'react-redux'
import { ProgressCircle } from '../components/progress-circle'
import { setLoading } from '../../../redux/slices/site-slice'

export const HomePage = () => {
  const [data, setData] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const { isLoading } = useSelector((state) => state.site)

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true))
        const response = await vacantApi.getVacancies(currentPage)
        setData(response.data.vacancies)
        setTotalPages(response.data.totalPages)
        dispatch(setLoading(false))
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [currentPage, dispatch]) // Add currentPage as a dependency

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      console.log('Current Page Before Update:', currentPage)
      setCurrentPage((prevPage) => prevPage + 1)
      console.log('Current Page After Update:', currentPage)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      console.log('Current Page Before Update:', currentPage)
      setCurrentPage((prevPage) => prevPage - 1)
      console.log('Current Page After Update:', currentPage)
    }
  }
  return (
    <div>
      {isLoading ? (
        <ProgressCircle />
      ) : data !== null && data.length > 0 ? (
        <div>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {data.map((vacancy) => (
              <VacancyCard
                key={vacancy.id}
                title={vacancy.title}
                description={vacancy.description}
                salary={vacancy.salary}
              />
            ))}
          </section>
          <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Prev
            </button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <h2>No hay Vacantes Disponibles</h2>
      )}
    </div>
  )
}
