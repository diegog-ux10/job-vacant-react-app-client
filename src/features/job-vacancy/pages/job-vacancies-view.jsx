import { ModalWrapper } from "../../shared";
import { UseModal } from "../../shared/hooks";
import { CreateVacancyForm } from "../components";
import { JobVacanciesTable } from "../components"

export const JobVacanciesView = () => {
    const[isOpenModal,openModal,closeModal] = UseModal(false);
  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-400 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 rounded-md w-[150px]"
      >
        Create Vacant
      </button>
      <ModalWrapper isOpen={isOpenModal} closeModal={closeModal}>
        <CreateVacancyForm></CreateVacancyForm>
      </ModalWrapper>
      <JobVacanciesTable />
    </div>
  )
}
