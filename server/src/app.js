// Importar dependencias
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import register from './register.js';

// Cargar las variables de entorno
dotenv.config();

// Crear una nueva instancia de Express
const app = express();

// Middleware
app.use(cors()); // Permitir CORS para peticiones de otros dominios
app.use(express.json()); // Para parsear datos en formato JSON
app.use('/register', register); 

// Ruta de prueba
app.get('/test', (req, res) => {
  res.send('¡Servidor funcionando!');
});

export default app;
