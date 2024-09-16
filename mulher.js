const express = require("express");
const router = express.Router();

const app = express();

const porta = 3333;

function mostraMulher(request, response) {
    response.json({
        nome: 'Gabriela Polichetti Araujo',
        imagem: 'https://blog.plantei.com.br/wp-content/uploads/2020/10/lirio-pink.jpg',
        minibio: 'Mãe e estudante de programação'
    })
}

function mostraPorta() {
     console.log("Servidor criado e rodando na porta", porta);  
}

app.use(router.get('/mulher', mostraMulher));
app.listen(porta, mostraPorta);