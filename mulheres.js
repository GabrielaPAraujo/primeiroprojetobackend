const express = require("express");
const router = express.Router();

const app = express();

const porta = 3333;

const mulheres = [
    {
        nome: 'Gabriela Polichetti Araujo',
        imagem: 'https://blog.plantei.com.br/wp-content/uploads/2020/10/lirio-pink.jpg',
        minibio: 'Mãe e estudante de programação' 
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://www.infomoney.com.br/wp-content/uploads/2021/02/iana_chan-e1615560698977.jpg?w=402&quality=70&strip=all',
        minibio: 'Fundadora da Programaria'

    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://nosmulheresdaperiferia.com.br/wp-content/uploads/2021/03/nina-da-hora.png',
        minibio: 'Hacker antirracista'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres);


}

function mostraPorta() {
     console.log("Servidor criado e rodando na porta", porta);  
}

app.use(router.get('/mulheres', mostraMulheres));
app.listen(porta, mostraPorta);