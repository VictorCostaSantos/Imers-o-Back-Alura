import express from "express";
import multer from "multer";

import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postController.js";

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
  app.use(express.json()); // Permite o uso de JSON nas requisições

  // Rota para obter todos os posts
  app.get("/posts",listarPosts);
  app.post("/posts", postarNovoPost)
  app.post("/upload", upload.single("imagem"), uploadImagem)
};

export default routes;
