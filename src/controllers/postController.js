import { getTodosPosts, criarPost, atualizarPost } from "../models/postsModel.js";
import fs from "fs";

export async function listarPosts(req, res){
    const posts = await getTodosPosts(); // Chama a função para buscar os posts
    res.status(200).json(posts); // Retorna os posts com status 200
  };

export async function postarNovoPost(req, res){
  const novoPost = req.body;
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

export async function atualizarNovoPost(req, res){
  const id = req.params.id;
  const urlImagem = `http://localhost:3000/${id}.png`;
  const post = {
    imgUrl: urlImagem,
    descrição: req.body.descrição,
    alt: req.body.alt
  }
  
  try {
    const postCriado = await atualizarPost(id , post);
    res.status(200).json(postCriado); 
  }
  catch(erro){
    console.error(erro.message);
    res.status(500).json({"erro":"falha na requisição"});
  }
}


