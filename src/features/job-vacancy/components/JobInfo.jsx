import React, { useState } from 'react';
import { vacantApi } from '../../../api/vacant-api';

export function JobInfo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    birthdate: '',
   word_experience: '',
  });

  const InfoSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await vacantApi.auth(formData);
      console.log('Datos guardados con éxito:', response.data);
      // Puedes realizar acciones adicionales aquí, como redirección.
    } catch (error) {
      console.error('Error al guardar datos:', error);
    }
  }
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
    return (
        <div className="flex justify-center">
            <form onSubmit={InfoSubmit} className="flex flex-col space-y-4">
                <label htmlFor="name" className="text-gray-700">Ingrese Nombre</label>
                <input type="text" id="name" placeholder="Ingresar nombre" className="border border-gray-300 rounded-lg p-2" />

                <label htmlFor="email" className="text-gray-700">Ingrese Correo</label>
                <input type="email" id="email" placeholder="Ingresar Correo" className="border border-gray-300 rounded-lg p-2" />

                <label htmlFor="phone" className="text-gray-700">Ingrese Telefono</label>
                <input type="tel" id="phone" placeholder="Ingresar Telefono" className="border border-gray-300 rounded-lg p-2" />

                <label htmlFor="birthdate" className="text-gray-700">Ingrese Fecha de Nacimiento</label>
                <input type="date" id="birthdate" className="border border-gray-300 rounded-lg p-2" />

                <label htmlFor="work " className="text-gray-700">Experiencia Laboral</label>
                <textarea id="work " placeholder="" className="border border-gray-300 rounded-lg p-2" />

                <button type="submit">enviar</button>
            </form>
        </div>
    );
}
