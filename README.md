# 🍔 Dev Burguer API

API REST desenvolvida para simular o Back-End de uma **hamburgueria**, permitindo o gerenciamento de usuários, autenticação, produtos, categorias e pedidos.

O projeto foi desenvolvido como parte da minha evolução nos estudos de **Node.js e desenvolvimento Back-End**, colocando em prática conceitos como APIs REST, autenticação, autorização, bancos de dados relacionais e não relacionais, upload de arquivos e organização de uma aplicação em diferentes responsabilidades.

## 🚀 Sobre o projeto

A **Dev Burguer API** representa uma evolução dos meus projetos anteriores de Back-End, trazendo uma estrutura mais completa e próxima de uma aplicação real.

A API possui diferentes recursos para representar o funcionamento de uma hamburgueria, permitindo que usuários sejam cadastrados e autenticados, enquanto administradores possuem permissões adicionais para gerenciar produtos, categorias e pedidos.

A aplicação também trabalha com **PostgreSQL através do Sequelize** e **MongoDB através do Mongoose**, utilizando cada tecnologia de acordo com as necessidades do projeto.

## 🛠️ Tecnologias utilizadas

* **Node.js** — ambiente de execução do Back-End
* **Express** — criação do servidor e gerenciamento das rotas
* **Sequelize** — ORM utilizado para comunicação com o PostgreSQL
* **PostgreSQL** — banco de dados relacional
* **Mongoose** — ODM utilizado para comunicação com MongoDB
* **MongoDB** — banco de dados não relacional
* **JWT (JSON Web Token)** — autenticação e gerenciamento de sessões
* **bcrypt** — criptografia de senhas
* **Yup** — validação de dados
* **Multer** — upload e gerenciamento de arquivos
* **UUID** — geração de identificadores únicos
* **Biome** — formatação e análise do código

Essas tecnologias estão configuradas diretamente nas dependências do projeto.

## 📚 Conceitos praticados

Durante o desenvolvimento deste projeto, foram praticados conceitos importantes de desenvolvimento Back-End:

* Criação de APIs REST
* Node.js
* Express
* Arquitetura de rotas
* Controllers
* Middlewares
* CRUD
* Autenticação
* Autorização
* JWT
* Hash de senhas com bcrypt
* Validação de dados com Yup
* Sequelize
* PostgreSQL
* Mongoose
* MongoDB
* Upload de arquivos
* Multer
* Relacionamento entre entidades
* Tratamento de erros
* Variáveis e módulos ES
* Separação de responsabilidades

## 🔐 Autenticação e autorização

A API possui um sistema de autenticação baseado em **JWT**.

O cadastro de usuários e o login são disponibilizados através das rotas:

```http
POST /users
POST /sessions
```

Após a autenticação, as rotas protegidas utilizam um middleware responsável por verificar o usuário autenticado. Além disso, determinadas operações exigem privilégios administrativos através de um middleware específico.

### 👤 Usuários

```http
POST /users
```

Responsável pelo cadastro de novos usuários.

### 🔑 Sessão

```http
POST /sessions
```

Responsável pela autenticação do usuário e criação da sessão.

## 🍔 Produtos

A API permite que administradores realizem o gerenciamento dos produtos.

### Criar produto

```http
POST /products
```

### Atualizar produto

```http
PUT /products/:id
```

### Listar produtos

```http
GET /products
```

As operações de criação e atualização exigem autenticação e privilégios administrativos, além de permitirem o envio de arquivos através do **Multer**.

## 🏷️ Categorias

Também é possível gerenciar as categorias dos produtos.

### Criar categoria

```http
POST /categories
```

### Atualizar categoria

```http
PUT /categories/:id
```

### Listar categorias

```http
GET /categories
```

Assim como os produtos, as operações de criação e atualização de categorias são protegidas por autenticação e autorização administrativa.

## 🧾 Pedidos

A API também possui funcionalidades relacionadas aos pedidos.

### Criar pedido

```http
POST /orders
```

### Listar pedidos

```http
GET /orders
```

### Atualizar pedido

```http
PUT /orders/:id
```

A atualização dos pedidos é restrita a usuários com privilégios administrativos.

## 🖼️ Upload de imagens

O projeto utiliza **Multer** para receber arquivos enviados através das requisições.

Os arquivos são armazenados na pasta:

```text
uploads/
```

O nome dos arquivos recebe um UUID para ajudar a evitar conflitos entre arquivos com o mesmo nome.

A aplicação também disponibiliza as rotas de arquivos através de:

```http
/product-file
/category-file
```

## 🗄️ Bancos de dados

Um dos pontos importantes deste projeto foi trabalhar com **dois tipos de banco de dados**.

### PostgreSQL

O PostgreSQL é utilizado através do **Sequelize**, responsável pela inicialização dos modelos relacionais da aplicação.

### MongoDB

O projeto também utiliza **Mongoose** para estabelecer uma conexão com o MongoDB.

Atualmente, a configuração do projeto utiliza:

```text
mongodb://localhost:27017/devburguer
```

Essa experiência foi importante para compreender as diferenças entre trabalhar com um banco **relacional** e um banco **não relacional**.

## 🏗️ Estrutura da aplicação

A aplicação possui uma separação entre diferentes responsabilidades, incluindo:

```text
src/
│
├── app/
│   ├── controllers/
│   ├── middlewares/
│   └── models/
│
├── config/
│
├── database/
│
├── app.js
├── routes.js
└── server.js
```

A entrada da aplicação é realizada através do `server.js`, enquanto o `app.js` concentra a configuração do Express e o carregamento das rotas.

## 🔄 Fluxo da aplicação

De maneira simplificada:

```text
Cliente
   │
   ▼
   API
   │
   ▼
Rotas
   │
   ▼
Middlewares
   │
   ├── Autenticação
   └── Autorização
   │
   ▼
Controllers
   │
   ▼
Models
   │
   ├── PostgreSQL
   └── MongoDB
```

Esse fluxo ajuda a separar as responsabilidades da aplicação e facilita a manutenção e evolução do projeto.

## 💻 Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/gustavofurtado7/dev-burguer-api.git
```

### 2. Acesse a pasta

```bash
cd dev-burguer-api
```

### 3. Instale as dependências

O projeto utiliza **pnpm**:

```bash
pnpm install
```

### 4. Configure os bancos de dados

Antes de executar a aplicação, é necessário configurar os bancos utilizados pelo projeto:

* PostgreSQL
* MongoDB

A configuração de conexão do MongoDB atualmente utiliza uma instância local chamada `devburguer`.

### 5. Execute a aplicação

```bash
pnpm dev
```

O projeto utiliza o modo `watch` do Node.js para reiniciar automaticamente o servidor durante o desenvolvimento.

A API é executada na porta:

```text
http://localhost:3001
```

## 🎯 Objetivo

O principal objetivo deste projeto foi **aprofundar meus conhecimentos em desenvolvimento Back-End**, construindo uma API mais completa e próxima de uma aplicação utilizada em um cenário real.

Durante o desenvolvimento, pude praticar não apenas a criação de rotas e operações CRUD, mas também conceitos mais avançados como **autenticação com JWT, autorização por níveis de acesso, criptografia de senhas, validação de dados, upload de arquivos e integração com diferentes bancos de dados**.

Este projeto representa uma etapa importante da minha evolução como desenvolvedor, principalmente na transição de APIs mais simples para uma aplicação Back-End com uma estrutura mais completa.

## 📈 Possíveis melhorias

Algumas funcionalidades que podem ser adicionadas futuramente:

* Documentação da API com Swagger
* Testes automatizados
* Paginação de produtos e pedidos
* Filtros e busca de produtos
* Refresh Token
* Recuperação de senha
* Melhor tratamento de erros
* Logs estruturados
* Docker para padronizar o ambiente
* Variáveis de ambiente para todas as configurações sensíveis
* Deploy da API
* Integração com um Front-End completo
* Melhor separação entre services, repositories e controllers
