import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import postRoutes from "./routes/posts.routes.js";

const app = express();

app.use(indexRoutes);
app.use(postRoutes);

app.listen(PORT);
console.log(`Servidor en el puerto ${PORT}`);
