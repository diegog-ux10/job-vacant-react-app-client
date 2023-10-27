import { useState } from 'react'

export const UseModal = (valorInicial = false) => {
  const [isOpen, setIsOpen] = useState(valorInicial)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return [isOpen, openModal, closeModal]
}
