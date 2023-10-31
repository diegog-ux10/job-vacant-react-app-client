
import vacante from '../../../assets/vacante.png'
import { vacantApi } from '../../../api/vacant-api'
import { useState, useEffect } from 'react'
import trabajadores from '../../../assets/trabajadores.jpg'

export default function HomeAdmin() {
  const [contadorApplieses, setContadorApplieses] = useState(null)
  const [contadorVacanties, setContadorVacanties] = useState(null)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await vacantApi.getApplieses()
        setContadorApplieses(response.data.length)
      } catch {
        console.log('Error fetching data: ')
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await vacantApi.getVacancies()
        setContadorVacanties(response.data.length)
      } catch {
        console.log('Error fetching data: ')
      }
    }
    fetchData()
  }, [])


  return (
    <div className="w-full">
      <div className="flex flex-col items-center mt-24 space-y-8">

        <section className="flex space-x-40">
          <div className="rounded-md border-2 p-4">
            <h1 className="text-4xl font-semibold mb-6">Postulantes</h1>
            <div className="flex items-center space-x-4">
              <img src={trabajadores} className="h-60 w-70" alt="Trabajadores" />
              <h2 className="text-8xl">{contadorApplieses}</h2>
            </div>
          </div>
          <div className="rounded-md border-2 p-4">
            <h1 className="text-4xl font-semibold mb-6">Vacantes</h1>
            <div className="flex items-center space-x-8">
              <img src={vacante} className="h-60 w-72" alt="Vacante" />
              <h2 className="text-8xl">{contadorVacanties}</h2>
            </div>
          </div>
        </section>
      </div>
    </div>

  )
}
