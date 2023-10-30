
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
    <div className='w-full'>
      <div className="flex flex-col ">

        <section className="self-center flex gap-40 mt-24">
          <div className=" rounded-md ring-2 p-4">
            <h1 className="text-4xl mb-6 font-semibold">Postulantes</h1>
            <div className="flex items-center gap-4">
              <img src={trabajadores} className="h-60 w-70" />
              <h2 className="text-8xl">{contadorApplieses}</h2>
            </div>
          </div>
          <div className=" rounded-md ring-2 p-4">
            <h1 className="text-4xl mb-6 font-semibold">Vacantes</h1>
            <div className="flex items-center gap-8">
              <img className="h-60 w-72" src={vacante} />
              <h2 className="text-8xl">{contadorVacanties}</h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
