import express from "express";
import multer from "multer";
import cors from "cors";

import { atualizarNovoPost, listarPosts, postarNovoPost, uploadImagem } from "../controllers/postController.js";


const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200 
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname);
  }
})

const upload = multer({ dest: "./uploads" , storage})

 const routes = (app) => {
  app.use(cors(corsOptions)); //

  app.use(express.json()); // Permite o uso de JSON nas requisições

  // Rota para obter todos os posts
  app.get("/posts",listarPosts);
  app.post("/posts", postarNovoPost)
  app.post("/upload", upload.single("imagem"), uploadImagem)

  app.put("/upload/:id",atualizarNovoPost)
};

export default routes;
