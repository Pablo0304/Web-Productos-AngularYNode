const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// Creamos el servidor
const app = express();

// Conectamos con la BD
conectarDB();
app.use(cors());

// Habilitamos que se pueda enviar ".json", texto o lo que sea...
app.use(express.json());
app.use(express.text());

// Require es como importar, cuando el usuario esté en esa ruta se puede usar producto.js
app.use('/api/productos', require('./routes/producto'));

app.listen(4000, () => {
    console.log('el servidor va de puta madre')
})