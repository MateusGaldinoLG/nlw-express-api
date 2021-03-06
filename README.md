# Projeto de API com nodejs da NLW da Rocketseat

Esse é o repositorio dos códigos feitos na missão de Nodejs da Next Level Week(NLW) realizado pela Rocketseat. São minhas anotações como aluno e dev iniciante.  
Esse projeto utiliza como stack:

* Node.js e NPM
* Typescript
* Expressjs (e @types/express)
* Outras packages de desenvolvimento como: ts-node-dev
* Uso de TypeORM para conexão com um banco de dados PostgreSQL
* Uso da biblioteca uuid para a criação de ids com uuid (e @types/uuid)
* Uso de bcryptjs para gerar hashs em campos sensíveis como senhas
* Uso de JWT com a biblioteca jsonwebtoken

## Como rodar o projeto

Clone o projeto utilizando o link: <https://github.com/MateusGaldinoLG/nlw-express-api.git>  
Depois de clonado, baixe os packages e rode utilizando o comando:  

```bash
    npm install
    npm run dev
```

E acesse em: <http://localhost:3000/...>

as URLs para GET são (usando um token de JWT):

* /users/compliments/send
* /users/compliments/received
* /tags

as URLs para POST são:

* /users
* /tags
* /login
* /compliments

## Anotações

Para ver minhas anotações só abrir o arquivo notion.md
