# Anotações de Aula durante a NLW

For typescript use **@types/express**

## HTTP METHODS

get    => buscar uma informação  
post   => inserir/criar uma informação  
put    => alterar uma informação  
patch  => alterar uma informação específica  
delete => deletar uma informação

**Request** = tudo que está entrando  
**Response** = tudo que está saindo

## tipos de parâmetros

Routes params => <http://localhost:3000/produtos/:id> (parametro = id) -> no express usado com /{id}  
Query params  => <http://localhost:3000/produtos?name=teclado&description=tecladobom>  
Body params   => (usado em post, put e delete)  

```JSON
{
 "name": "teclado",
 "description": "teclado bom"
}
```

## Para o TypeORM

Primeiro, importar o reflect-metadata

### Migrations

Em projetos, migrations servem como formas mais rápidas de lidar com bancos de dados, formando um histórico de alterações

### Entities

Entity < - > ORM < - > DB  
Repositories => responsavel pela comunicação entre a entity e o banco de dados

#### Entity decorators

@Entity("nome da tabela") -> marca como entidade  
@PrimaryColumns() -> para marcar a coluna como chave primaria  
@Columns() -> para marcar como coluna  
@CreateDateColumn -> para dizer que a colune é de Date de criação  
@UpdateDateColumn -> para dizer que a colune é de Date de update  

#### Reposotiry decorators

@EntityRepository(entity) -> marca como um repositório da entidade passada no parâmetro  

### Comandos

Para criar uma migration é usado o comando: **ts-node-dev ./node_modules/typeorm/cli.js migration:create -n MigrationName**  
Ao ser criada, a migration recebe o horário de criação, o que ajuda na integração com outras migrations  
Para rodar as migrations é usado o comando **ts-node-dev ./node_modules/typeorm/cli.js migration:run**

Para criar uma entity é usado  o comando: **ts-node-dev ./node_modules/typeorm/cli.js entity:create -n EntityName**.

## Services/Use Cases/regras de negócio

-----------------------

### NLW Valoriza

#### Regras

- Cadastro de usuário  
[ x ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail  
[ x ] Não é permitido cadastrar usuário sem e-mail
- Cadastro de TAG  
[ x ] Não é permitido cadastrar tag sem nome  
[ x ] Não é permitido cadastrar mais de uma tag no mesmo usuário  
[ x ] Não é permitido o cadastro por usuários que não sejam administradores
- Cadastro de elogios  
[ ] Não é permitido um usuário cadastrar um elogio para si  
[ ] Não é permitido cadastrar elogios para usuários invalidos  
[ ] O usuário precisa estar autenticado na aplicação  

-----------------------

#### Estrutura

Cada cadastro recebe sua classe de Service.ts e uma classe de Controller.ts, em suas respectivas camadas.

### Controller

No controller, existe um método de handle, que lida com as formas de request e response dos métodos HTTP.  
Ele pega o corpo da request, chama o Service para desenvolver a camada de Banco de Dados e retorna o dado criado como JSON.

## Fluxo

server -> controller -> SERVICE -> Repositories -> BD

## Excessão

Quando lançamos(throw) uma excessão, a camada superior à da excessão precisa tratar de alguma forma essa excessão.

## Middlewares

Etapa intermediaria entre a request e a response, podendo interceptar a informação.

## Tips

- quando é importado uma pasta, o javascript entende que o que quer ser importado será o index.js
- #Unidade
- #embuscadeevolução
