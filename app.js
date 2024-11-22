const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Configurar la conexión a MySQL
const connection = mysql.createConnection({
    host: 'bdlibreria',
    user: 'root', // reemplázalo con tu usuario de MySQL
    password: '12345', // reemplázalo con tu contraseña de MySQL
    database: 'bdlibreria' // reemplázalo con tu base de datos
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos: ' + err.stack);
        return;
    }
    console.log('Conectado a la base de datos con ID ' + connection.threadId);
});

// Ruta para obtener datos
app.get('/api/usuarios', (req, res) => {
    connection.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            res.status(500).send('Error en la consulta');
            return;
        }
        res.json(results); // Enviar los resultados al frontend
    });
});

// Iniciar el servidor
app.listen(3000, () =>{
});
