import express from "express";
import routes from './src/routes/postsRoutes.js';


// Criação da aplicação Express
const app = express();
routes(app);


// Dados de exemplo para os posts
const posts = [
    {
        id: 1,
        descrição: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descrição: "Gato relaxando na janela",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descrição: "Gato brincando com brinquedo",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descrição: "Gato dormindo no sofá",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descrição: "Gato explorando o jardim",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 6,
        descrição: "Gato observando a rua",
        imagem: "https://placecats.com/millie/300/150"
    }
];

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("servidor escutando...");
});





// Código comentado para buscar um post por ID (não utilizado no momento)
// function buscarPostPorID(id){
//     return posts.findIndex((post) => {
//         return post.id === Number(id); // Procura o post com o id fornecido
//     })
// }

// Rota para obter um post específico por ID (não está sendo usada, pois está comentada)
// app.get("/posts/:id", (req, res) => {
//     const index = buscarPostPorID(req.params.id); // Busca o post pelo ID
//     res.status(200).json(posts[index]); // Retorna o post encontrado com status 200
// })
