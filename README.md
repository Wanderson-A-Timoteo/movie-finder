<h1 align="center">
  🎬 Movie Finder
</h1>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-executar-aplicação">Executar Aplicação</a>
</p>

<br>

## 💻 Projeto

Bem-vindo ao repositório do **Movie Finder**, uma aplicação web front-end desenvolvida em **React.js**. Este projeto foi construído para listar os filmes mais populares do momento e permitir a busca dinâmica de obras cinematográficas, consumindo dados reais e em tempo real da API do TMDB (The Movie Database). 🍿

> Projeto focado na construção de Single Page Applications (SPA), gerenciamento de estados globais e consumo de APIs RESTful.


🔗 **Demo Online:** [movie-finder.github.io](https://wanderson-a-timoteo.github.io/movie-finder/)

<br>

## 🚀 Funcionalidades

- **Página Inicial (Home):** Listagem dinâmica em grade (grid) dos filmes mais populares e em alta no cinema e streaming.
- **Sistema de Busca:** Pesquisa detalhada de filmes por título através de uma barra de pesquisa integrada ao cabeçalho.
- **Paginação:** Navegação fluida entre as páginas de resultados (limitada a 500 páginas conforme a API do TMDB), tanto na Home quanto na Busca.
- **Modal de Detalhes:** Visualização aprofundada de cada filme contendo:
  - Pôster em alta resolução (com tratamento de fallback para filmes sem capa).
  - Sinopse completa traduzida para o português.
  - Avaliação (nota do público em estrelas).
  - Data de lançamento formatada.
- **UX/UI Profissional:** Feedback visual com telas de *Loading* (spinner animado) durante as requisições e design inspirado nas paletas clássicas de cinema (Dark Mode nativo).
- **Tratamento de Rotas:** Rota customizada para tratamento de erros (Página 404).

<br>

## 🛠️ Tecnologias Utilizadas

- **React.js** (Context API e Hooks: `useState`, `useEffect`, `useContext`)
- **React Router DOM v6** (Gerenciamento de Rotas da SPA)
- **React Icons** (SVG Icons)
- **CSS3** (Estilização global, Flexbox/Grid, transições e keyframes de animação)
- **Fetch API** (Requisições HTTP)
- **TMDB API** (The Movie Database - Fonte de dados)
- **Git & GitHub** (Versionamento de código)

<br>

## 🔥 Executando Localmente a Aplicação

Caso você deseje executar o projeto na sua máquina local, basta seguir os passos abaixo:

### 🌀 Começando...

Para começar, você deve clonar o repositório do projeto na sua máquina e instalar as dependências.

#### 🔑 Variáveis de Ambiente (API Key):
Como este projeto consome dados do TMDB, você precisará de uma chave de API gratuita.
1. Crie uma conta no [The Movie Database (TMDB)](https://www.themoviedb.org/) e gere uma API Key de desenvolvedor.
2. Na raiz do projeto clonado, renomeie o arquivo `.env.exemplo` para `.env`.
3. Adicione a sua chave dentro do arquivo: `REACT_APP_TMDB_API_KEY=sua_chave_aqui`.

#### ❗️ Instalando as Dependências:

Abra o seu terminal (como o WSL/Ubuntu ou CMD) e navegue até o diretório onde deseja armazenar o projeto:

```bash
git clone git@github.com:Wanderson-A-Timoteo/movie-finder.git
```

Depois, acesse a pasta clonada e digite a seguinte instrução para baixar todas as dependências (node_modules) necessárias:

```bash
cd movie-finder
npm install
```

### 💨 Executando a Aplicação

Com as dependências instaladas e o .env configurado, inicie o servidor de desenvolvimento local digitando

```bash
npm start
```

Pronto! Dessa forma o projeto estará rodando localmente em sua máquina. Acesse no navegador:

```
http://localhost:3000
```

<br>

## 🌐 Hospedagem e Roteamento (GitHub Pages)

Este projeto está hospedado e disponível publicamente através do **GitHub Pages**. Para garantir que a navegação da aplicação funcione de maneira impecável em um ambiente de servidor de arquivos estáticos, adotamos uma estratégia específica de roteamento.

### A Escolha do HashRouter

Por padrão, SPAs em React utilizam o `BrowserRouter`. No entanto, em servidores como o GitHub Pages, isso gera um **Erro 404** se o usuário tentar recarregar a página (F5) em uma rota interna (ex: `/search`), pois o servidor tenta localizar um arquivo físico `search.html` que não existe (já que toda a aplicação roda dentro do `index.html`).

Para resolver esse comportamento e manter a resiliência do projeto, o código foi refatorado para utilizar o **`HashRouter`**:
- **Como funciona:** Ele injeta uma "hashtag" na URL (ex: `https://seu-usuario.github.io/movie-finder/#/search`).
- **O Resultado:** O servidor do GitHub sempre processa a requisição apontando para a raiz (`index.html`), permitindo que o React intercepte o caminho que vem após o `#` e renderize o componente correto dinamicamente. Isso evita qualquer tipo de "tela em branco" em atualizações de página.

### Deploy Automatizado

O deploy da aplicação foi automatizado no `package.json` utilizando a biblioteca `gh-pages`. Com os scripts abaixo, o processo de gerar a build de produção e enviar os arquivos otimizados para a branch de deploy é feito com um único comando:

- `"predeploy": "npm run build"`
- `"deploy": "gh-pages -d build"`

<br>

### 🚩 Tenho Dúvidas... O que fazer?

Caso tenham dúvidas sobre o código do projeto, sintam-se a vontade em abrir uma **[ISSUE AQUI](https://github.com/Wanderson-A-Timoteo/movie-finder/issues)**. Assim que possível, estarei respondendo as todas as dúvidas que tiverem!

<br>

## Autor:

Feito com ♥ by

<div align="center">
  <a href="https://github.com/Wanderson-A-Timoteo">
    <img src="https://github.com/Wanderson-A-Timoteo.png" width="120px;" alt="Foto de Perfil do Wanderson Timóteo no GitHub" style="border-radius: 50%;"/>
  </a>
  <br />
  <br />
  <h4>Wanderson Timóteo</h4>
    
  <a href="https://www.wandersontimoteo.com.br/" target="_blank">
    <b>🌐 Visite meu Portfólio</b>
  </a>
  &nbsp;|&nbsp;
  <a href="https://wanderson-a-timoteo.github.io/perfil-de-contato/" target="_blank">
    <b>🔗 Entre em Contato</b>
  </a>
</div>
