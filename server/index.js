import express from "express";
import { PORT } from "./config.js";
import postRoutes from "./routes/posts.routes.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use(postRoutes);

app.listen(PORT);
console.log(`Servidor en el puerto ${PORT}`);
