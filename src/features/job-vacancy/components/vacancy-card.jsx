export const VacancyCard = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-4">
      <header className="mb-2">
        <h2 className="text-2xl font-semibold text-blue-500">
          React Developer Jr.
        </h2>
        <span className="text-gray-600">IBM</span>
        <p className="text-gray-600">Ciudad de México</p>
      </header>
      <main className="mb-4">
        <p className="text-gray-800">
          Se busca Desarrollador Junior en React, con 6 meses de experiencia,
          que pueda manejar Node.js, Redux, JavaScript y TypeScript
        </p>
        <h4 className="text-lg font-semibold text-blue-500 mt-2">
          Salario: $1,000 - $1,500
        </h4>
      </main>
      <footer className="flex justify-between">
        <a href="#" className="text-blue-500 hover:underline">
          Más detalles
        </a>
        <a
          href="#"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Aplicar ahora
        </a>
      </footer>
    </section>
  )
}
