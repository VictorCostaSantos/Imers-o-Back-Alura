import express from "express";
import { listarPosts } from "../controllers/postController.js";

 const routes = (app) => {
  app.use(express.json()); // Permite o uso de JSON nas requisições

  // Rota para obter todos os posts
  app.get("/posts",listarPosts);
};

export default routes;
