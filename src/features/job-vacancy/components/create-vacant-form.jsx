export const CreateVacancyForm = () => {
  return (
    <section className='justify-center  content-center flex '>
      <section className='w-[400px] border-2 items-center flex flex-col justify-center rounded-md border-red-200 bg-slate-200'>
      <h2>Register new Vancancie</h2>
      <h4>Work name</h4>
      <input type="text" className='border-2 border-red-50 w-[200px]'/>
      <h4>Description</h4>
      <input type="text" className='border-2 border-red-50 w-[200px]'/>
      <h4>Time</h4>
      <select name="select" id="" className='border-2 border-red-50'>
        <option value="dialog">
          Corrdinate with employer
        </option>
        <option value="full">
          Full-time
        </option>
      <option value="parcial">Parcila-time</option>
      </select>
      <h4>salary</h4>
      <input type="number" className='border-2 border-red-50 w-[200px]'/>
      <button className='bg-blue-500 hover:bg-blue-400 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 rounded-md w-[80px]'>Save</button>
      </section>
    </section>
  )
}