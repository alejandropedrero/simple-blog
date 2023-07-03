import express from "express";
import { PORT } from "./config.js";
import postRoutes from "./routes/posts.routes.js";
import cors from "cors";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "../public/uploads")));

app.use(postRoutes);

app.listen(PORT);
console.log(`Servidor en el puerto ${PORT}`);
