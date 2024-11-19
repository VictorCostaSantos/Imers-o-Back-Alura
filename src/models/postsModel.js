import conectarAoBanco from "../config/dbConfig.js";

// Estabelece a conexão com o banco de dados
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

// Função assíncrona que busca todos os posts no banco de dados
export async function getTodosPosts(){
    const db = conexao.db("Imersão-instabytes"); // Acessa o banco de dados "Imersão-instabytes"
    const colecao = db.collection("posts"); // Acessa a coleção "posts"

    return colecao.find().toArray(); // Retorna os posts como um array
}