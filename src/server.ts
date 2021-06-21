import express from "express";
//for typescript use @types/express
const PORT: number = 3000;

const app = express();

/*
HTTP METHODS
get    => buscar uma informação
post   => inserir/criar uma informação
put    => alterar uma informação
patch  => alterar uma informação específica
delete => deletar uma informação
*/ 

app.get('/test', (req, res) =>{
    //Request = tudo que está entrando
    //Response = tudo que está saindo
    return res.send("Olá NLW");
});

app.post('/teste-post', (req, res)=>{
    return res.send("Olá NLW método post");
})

//http://localhost:3000
app.listen(PORT, () =>{
    console.log('Server is running')
})