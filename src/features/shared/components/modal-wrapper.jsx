import './modal.css'

// eslint-disable-next-line react/prop-types
export const ModalWrapper = ({ children, isOpen, closeModal }) => {
  return (
    <section className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
      <article className="relative">
        <button
          className="absolute bg-red-500 hover:bg-red-400 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 rounded-md w-[100px]"
          onClick={closeModal}
        >
          Cancel
        </button>
        {children}
      </article>
    </section>
  )
}
