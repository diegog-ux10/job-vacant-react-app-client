import { useState } from "react"
import { JobVacanciesView } from "../../job-vacancy"
import { JobAppliesView } from "../../job-applies/"

/* eslint-disable react/prop-types */
export const AdminPage = () => {
    const [adminView, setAdminView] = useState('')

    const handleVacancyBtnClick = () => {
      setAdminView('vacancies')
    }

    
    const handleAppliesBtnClick = () => {
      setAdminView('applies')
    }

    return (
      <div className="w-screen h-screen flex">
        <aside className="h-screen w-1/6 bg-black p-4">
          <h2 className="text-white mb-4">Menu de Administracion</h2>
          <hr />
          <ul className="mt-4 w-full">
            <li className="w-full"><a onClick={handleVacancyBtnClick}  className="text-white inline-block w-full hover:bg-slate-500 py-2 px-4 rounded">Ver Vacantes Publicadas</a></li>
            <li className="w-full"><a onClick={handleAppliesBtnClick}  className="text-white inline-block w-full hover:bg-slate-500 py-2 px-4 rounded">Ver Postulantes</a></li>
          </ul>
        </aside>
        <div className="p-4">
          {
            adminView === '' && (<h1>Home</h1>)
          }
          {
            adminView === 'vacancies' && (<JobVacanciesView />)
          }
          {
            adminView === 'applies' && (<JobAppliesView />)
          }
        </div>
      </div>
    )
  }
  