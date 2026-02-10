require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Permite peticiones desde cualquier origen (vital para Vercel)
app.use(express.json());

// Conexión a Supabase (PostgreSQL)
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false } 
});

// Rutas
// 1. Obtener reseñas
app.get('/resenas', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM resenas ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error servidor');
    }
});

// 2. Guardar reseña
app.post('/resenas', async (req, res) => {
    const { nombre, apellido, comentario, rating } = req.body;
    try {
        const query = 'INSERT INTO resenas (nombre, apellido, comentario, rating) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [nombre, apellido, comentario, rating];
        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error guardando reseña');
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});