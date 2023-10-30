import { JobAppliesTable } from '../components'

export const JobAppliesView = () => {

  return (
    <div className="w-full">
      <div className="flex justify-between items-center  m-6">
        <h1 className="font-bold text-lg">Todas Los postulaciones</h1>
      </div>
      <JobAppliesTable />
    </div>
  )
}
