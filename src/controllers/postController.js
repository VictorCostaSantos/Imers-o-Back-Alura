import { getTodosPosts } from "../models/postsModel.js";

export async function listarPosts(req, res){
    const posts = await getTodosPosts(); // Chama a função para buscar os posts
    res.status(200).json(posts); // Retorna os posts com status 200
  };

