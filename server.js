import express from "express";

const app = express();
app.use(express.json());


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



app.listen(3000, () => {
    console.log("servidor escutando...");
});

function buscarPostPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    })
}


app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
})