import { config } from 'dotenv';
import express from 'express'
import fetch from 'node-fetch'
config();

const register = express.Router();

/* Aqui manejamos tanto las rutas como los propios controladores */
// en app.js el register tiene como base '/register' 

// Ruta para registrar al usuario
register.post('/', async (req, res) => {
  const { username, email } = req.body;

  // Validación de datos (puedes agregar más validaciones)
  if (!username || !email) {
    return res.status(400).json({ error: 'Faltan campos requeridos (username, email).' });
  }

  try {
    // Aquí hacemos una solicitud al Webhook de n8n
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;  // URL del Webhook de n8n (debes configurarla en tus variables de entorno)

    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
      }),
    });

    if (!response.ok) {
      throw new Error('Error al enviar los datos a n8n');
    }

    // Responder al cliente que el registro fue exitoso
    res.status(200).json({ message: 'Registro exitoso' });

  } catch (error) {
    console.error('Error al registrar:', error);
    res.status(500).json({ error: 'Error interno al procesar la solicitud' });
  }
});

export default register;