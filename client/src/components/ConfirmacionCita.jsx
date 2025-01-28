import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmacionCita = ({ abogado, fecha, hora }) => {

    const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white shadow-lg rounded">
      <h1 className="text-2xl font-bold text-center mb-6 text-green-600">
        ¡Cita agendada exitosamente! 🎉
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Has agendado tu cita con éxito. Te enviaremos un correo electrónico con
        los detalles de la cita. Aquí está un resumen:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-800">
        <li>
          <strong>Abogado:</strong> {abogado}
        </li>
        <li>
          <strong>Fecha:</strong> {fecha}
        </li>
        <li>
          <strong>Hora:</strong> {hora}
        </li>
      </ul>
      <p className="text-lg text-gray-700 mt-6">
        Si tienes alguna duda o necesitas modificar tu cita, no dudes en
        contactarnos.
      </p>
      <div className="mt-6 text-center">
        <button
          className="bg-blue-600 text-white py-2 px-6 rounded shadow hover:bg-blue-700"
          onClick={() => navigate('/')}
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default ConfirmacionCita;
