import React, { createContext, useContext } from 'react';

// Crear el contexto
const ApiContext = createContext();

// Proveedor del contexto
export const ApiProvider = ({ children }) => {
  // Definir la URL dependiendo del entorno
  const apiUrl = import.meta.env.VITE_API_URL;

  return (
    <ApiContext.Provider value={apiUrl}>
      {children}
    </ApiContext.Provider>
  );
};

// Custom hook para acceder al contexto
export const useApiUrl = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApiUrl debe ser usado dentro de un ApiProvider');
  }
  return context;
};
