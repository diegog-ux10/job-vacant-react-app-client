
import logo from "./../../../../assets/logo.png"


export const BaseLayout = ({children}) => {
  return (
    <>
    <div className="w-screen">
     <nav className="w-screen h-20 bg-slate-400 flex justify-between items-center">
      <img src={logo} className="h-20 w-28"></img>
      <h1 className="text-white text-3xl font-semibold">Encuentra o Publica Empleos</h1>
      <a  className="text-white mr-8">Publicar Vacantes</a>
     </nav>
     <section className="gap-5 grid grid-cols-3 mx-4 mt-6" >
      <div className=" bg-red-400"> Vacante</div>
      <div className=" bg-red-400"> Vacante</div>
      <div className=" bg-red-400"> Vacante</div>
      <div className=" bg-red-400"> Vacante</div>
      <div className=" bg-red-400"> Vacante</div>
      <div className=" bg-red-400"> Vacante</div>
     </section>
     {children}
    </div>
    </>
  )
}
