import express from "express"; // hacer npm i express
import cors from "cors"; // hacer npm i cors

const app = express();
const port = 3000;

// Agrego los Middlewares

app.use(cors()); // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON



// Inicio el server.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
