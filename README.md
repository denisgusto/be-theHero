<p align="center">
  <a href="" rel="noopener">
 <img src=".github\logo.png" alt="Project logo"></a>
</p>

<h3 align="center">Be The Hero é um projeto que visa conectar pessoas que estão dispostas a ajudar ONGs</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/languages/count/fcsouza/be-theHero)]()
[![GitHub Pull Requests](https://img.shields.io/github/last-commit/fcsouza/be-theHero)]()
[![Made By](https://img.shields.io/badge/Made%20By-Fabricio%20Cavalcante-brightgreen)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Construido uma aplicação desde o backend, frontend e mobile que conecta pessoas a projetos de ONGs, o objetivo é criar uma plataforma que visa facilitar a interação entre esses agentes de forma facilitada.
    <br> 
</p>

## 📝 Conteúdo
<p align="center">
<a href="#about">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#getting_started">Iniciando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#installing">Instalando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#built_using">Tecnologias Utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#authors">Autor</a>
</p>


## 🧐 Sobre <a name = "about"></a>

O Be the Hero é uma plataforma dedicada a captação de doações para Ongs. A aplicação web é dedicada as Ongs e permite o seu cadastro e a inserção de casos que precisam de ajuda. Já a aplicação mobile é destinada aos Heróis, os usuários que poderão ver a lista de casos abertos para ajuda. Por meio da aplicação mobile é possível entrar em contato diretamente com a Ong por e-mail ou Whatsapp.

<p align="center">
  <a href="" rel="noopener">
 <img width=650px src=".github\preview-app.jpg" alt="Preview logo"></a>
</p>

## 🏁 Iniciando <a name = "getting_started"></a>

Instruções de como acessar as rotas e instalação.

### ⚒ Instalando <a name = "installing"></a>

```
git clone https://github.com/fcsouza/be-theHero

Go into the backend repository

$ cd be-theHero/backend

# Run Migrates

$ yarn install
$ yarn knex migrate:latest 
$ yarn dev


# Go into the frontend repository

$ cd be-theHero/frontend
$ yarn install
$ yarn start

```

## ⛏️ Tecnologias Utilizadas <a name = "built_using"></a>

- [Express](https://expressjs.com/) - Server Framework
- [React](https://pt-br.reactjs.org/) - A declarative, efficient, and flexible JavaScript library for building user interfaces
- [React Native](https://reactnative.dev/) - A framework for building native apps using React
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Knex](http://knexjs.org/) - A SQL Query Builder for Javascript 
- [Celebrate](https://github.com/arb/celebrate) - A joi validation middleware for Express.
- [Nodemon](https://www.npmjs.com/package/nodemon) - Simple monitor script for use during development
- [Sucrase](https://www.npmjs.com/package/sucrase) - Sucrase is an alternative to Babel that allows super-fast development builds
- [SQLite](https://www.sqlite.org/) - Open source database(SGBD)

Unit Test
- [Jest](https://jestjs.io/) - JavaScript Testing tools
- [Supertest](https://github.com/visionmedia/supertest) - Super-agent driven library for testing node.js HTTP servers using a fluent API.

## ✍️ Autor <a name = "authors"></a>

- [@fcsouza](https://github.com/fcsouza)
