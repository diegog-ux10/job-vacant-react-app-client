// eslint-disable-next-line react/prop-types
export const ModalWrapper = ({ children }) => {
  return (
    <div
      className={
        'flex flex-col fixed z-50 top-0 left-0 w-full min-h-screen bg-black bg-opacity-75 justify-center items-center'
      }
    >
      {children}
    </div>
  )
}
