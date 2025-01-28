import React, { useState } from "react";
import ConfirmacionCita from "./ConfirmacionCita";

const AgendarCita = () => {
  const [step, setStep] = useState(1); // Controla el paso actual
  const [selectedAbogado, setSelectedAbogado] = useState("");
  const [selectedFecha, setSelectedFecha] = useState("");
  const [selectedHora, setSelectedHora] = useState("");

  // Simulación de abogados disponibles
  const abogados = [
    { id: 1, nombre: "Abogado 1", descripcion: "Experto en derecho civil." },
    { id: 2, nombre: "Abogado 2", descripcion: "Especialista en derecho penal." },
    { id: 3, nombre: "Abogado 3", descripcion: "Con experiencia en contratos laborales." },
  ];

  // Simula horarios disponibles
  const horariosDisponibles = ["10:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"];

  // Maneja el siguiente paso
  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  // Maneja el paso anterior
  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow rounded">
      <h1 className="text-3xl font-bold text-center mb-6">Agendar Cita</h1>

      {/* Paso 1: Selección del abogado */}
      {step === 1 && (
        <div>
          <p className="text-lg font-semibold mb-4">
            IA: ¿Qué abogado deseas seleccionar? Aquí están las opciones disponibles:
          </p>
          <ul className="space-y-4">
            {abogados.map((abogado) => (
              <li
                key={abogado.id}
                className={`p-4 border rounded cursor-pointer hover:bg-blue-100 ${
                  selectedAbogado === abogado.nombre ? "bg-blue-200" : ""
                }`}
                onClick={() => setSelectedAbogado(abogado.nombre)}
              >
                <p className="font-bold">{abogado.nombre}</p>
                <p>{abogado.descripcion}</p>
              </li>
            ))}
          </ul>
          {selectedAbogado && (
            <div className="mt-6 text-center">
              <p className="text-blue-600 font-semibold mb-4">
                IA: Excelente, has seleccionado a {selectedAbogado}.
              </p>
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700"
                onClick={handleNext}
              >
                Continuar
              </button>
            </div>
          )}
        </div>
      )}

      {/* Paso 2: Selección de la fecha */}
      {step === 2 && (
        <div>
          <p className="text-lg font-semibold mb-4">
            IA: Selecciona una fecha para tu cita.
          </p>
          <input
            type="date"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={selectedFecha}
            onChange={(e) => setSelectedFecha(e.target.value)}
          />
          {selectedFecha && (
            <div className="mt-6 text-center">
              <p className="text-blue-600 font-semibold mb-4">
                IA: Perfecto, dejemos verificar si hay disponibilidad para el {selectedFecha}...
              </p>
              <p className="text-green-600 font-semibold mb-4">
                IA: ¡Hay disponibilidad! ¿Deseas continuar?
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  className="bg-gray-600 text-white py-2 px-4 rounded shadow hover:bg-gray-700"
                  onClick={handleBack}
                >
                  Atrás
                </button>
                <button
                  className="bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700"
                  onClick={handleNext}
                >
                  Continuar
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Paso 3: Selección de la hora */}
      {step === 3 && (
        <div>
          <p className="text-lg font-semibold mb-4">
            IA: Selecciona un horario disponible.
          </p>
          <ul className="space-y-4">
            {horariosDisponibles.map((hora, index) => (
              <li
                key={index}
                className={`p-4 border rounded cursor-pointer hover:bg-blue-100 ${
                  selectedHora === hora ? "bg-blue-200" : ""
                }`}
                onClick={() => setSelectedHora(hora)}
              >
                <p>{hora}</p>
              </li>
            ))}
          </ul>
          {selectedHora && (
            <div className="mt-6 text-center">
              <p className="text-blue-600 font-semibold mb-4">
                IA: ¡Perfecto! Has seleccionado {selectedHora}. ¿Deseas continuar?
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  className="bg-gray-600 text-white py-2 px-4 rounded shadow hover:bg-gray-700"
                  onClick={handleBack}
                >
                  Atrás
                </button>
                <button
                  className="bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700"
                  onClick={handleNext}
                >
                  Continuar
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Paso 4: Confirmación de la cita */}
      {step === 4 && (
        <div>
          <p className="text-lg font-semibold mb-4">
            IA: Aquí está el resumen de tu cita:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Abogado:</strong> {selectedAbogado}
            </li>
            <li>
              <strong>Fecha:</strong> {selectedFecha}
            </li>
            <li>
              <strong>Hora:</strong> {selectedHora}
            </li>
          </ul>
          <div className="mt-6 text-center">
            <p className="text-green-600 font-semibold mb-4">
              IA: Todo está listo, ¿deseas confirmar esta cita?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-gray-600 text-white py-2 px-4 rounded shadow hover:bg-gray-700"
                onClick={handleBack}
              >
                Atrás
              </button>
              <button
                className="bg-green-600 text-white py-2 px-4 rounded shadow hover:bg-green-700"
                onClick={handleNext}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

    {step === 5 && (
        <ConfirmacionCita
            abogado={selectedAbogado}
            fecha={selectedFecha}
            hora={selectedHora}
        />
    )}

    </div>
  );
};

export default AgendarCita;
