# ArtFolio

ArtFolio e uma plataforma ficticia de portfolio online para artistas digitais. O projeto foi desenvolvido como atividade academica front-end com React, Vite, Tailwind CSS e dados locais em JSON.

## Funcionalidades

- Home com hero, destaques, estatisticas e CTA.
- Galeria responsiva com cards de artistas.
- Busca dinamica por nome, obra, localizacao ou especialidade.
- Filtro por categoria.
- Perfil dinamico de artista via React Router.
- Pagina Sobre com objetivo, historia e stack.
- Pagina Contato com validacao local e feedback visual.
- Pagina 404.
- Scroll suave e Scroll To Top na troca de rotas.
- Estados de loading e lista vazia.
- Assets visuais locais para avatares e obras.

## Tecnologias

- ReactJS
- Vite
- JavaScript ES6+
- Tailwind CSS
- React Router DOM
- Lucide React
- Oxlint

## Estrutura principal

```txt
src/
  components/
  data/
    artists.json
  hooks/
  pages/
  router/
  utils/
  App.jsx
  main.jsx
```

## Como instalar

```bash
npm install
```

## Como executar

```bash
npm run dev
```

Acesse a URL exibida pelo Vite, normalmente:

```txt
http://127.0.0.1:5173
```

## Como validar

```bash
npm run lint
npm run build
```

## Deploy

O projeto esta pronto para deploy em plataformas como Vercel. Apos publicar, adicione aqui a URL publica:

```txt
URL do deploy: https://artfolio-ashy.vercel.app/
```

## Atualizacoes pos-entrega

Apos a entrega inicial do projeto, foram feitas as seguintes modificacoes manuais:

### Substituicao de imagens mockadas por imagens reais

- As imagens de avatares dos artistas, que eram SVGs gerados localmente em `public/images/avatars/`, foram substituidas por fotos reais no formato JPG, organizadas na pasta `public/Artistas/`.
- As imagens das obras de arte, que eram SVGs gerados localmente em `public/images/artworks/`, foram substituidas por imagens reais no formato JPG, organizadas na pasta `public/Artes/`.
- O arquivo `src/data/artists.json` foi atualizado para apontar os novos caminhos de imagens em `public/Artistas/` e `public/Artes/`.
- As 4 imagens de preview do Hero (`src/components/Hero.jsx`) tambem foram atualizadas para usar imagens reais da pasta `public/Artes/`, escolhidas de forma a nao repetir as obras ja exibidas na secao de curadoria da Home.

## Observacoes

- O projeto nao usa backend, banco de dados, autenticacao ou APIs externas.
- Todos os artistas e obras sao carregados de `src/data/artists.json`.
- As imagens de avatares dos artistas ficam em `public/Artistas/`.
- As imagens das obras de arte ficam em `public/Artes/`.
