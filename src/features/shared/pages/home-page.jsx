import { VacancyCard } from "../../job-vacancy"

export const HomePage = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      <VacancyCard />
      <VacancyCard />
      <VacancyCard />
      <VacancyCard />
      <VacancyCard />
    </section>
  )
}
