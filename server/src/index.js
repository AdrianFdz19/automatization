
import app from "./app.js";
import dotenv from 'dotenv';

// Cargar las variables de entorno
dotenv.config();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});