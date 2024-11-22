import { getTodosPosts, criarPost } from "../models/postsModel.js";
import fs from "fs";

export async function listarPosts(req, res){
    const posts = await getTodosPosts(); // Chama a função para buscar os posts
    res.status(200).json(posts); // Retorna os posts com status 200
  };

export async function postarNovoPost(req, res){
  const novoPost = {
    descricao: "",
    imgUrl: req.file.originalname,
    alt: ""
};
  try {
    const postCriado = await criarPost(novoPost);
    res.status(200).json(postCriado); 
  }
  catch(erro){
    console.error(erro.message);
    res.status(500).json({"erro":"falha na requisição"});
  }
}

export async function uploadImagem(req, res){
  const novoPost = req.body;
  try {
    const postCriado = await criarPost(novoPost);
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
    fs.renameSync(req.file.path, imagemAtualizada)
    res.status(200).json(postCriado); 
  }
  catch(erro){
    console.error(erro.message);
    res.status(500).json({"erro":"falha na requisição"});
  }
}

