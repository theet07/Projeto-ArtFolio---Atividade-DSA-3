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
URL do deploy: pendente
```

## Observacoes

- O projeto nao usa backend, banco de dados, autenticacao ou APIs externas.
- Todos os artistas e obras sao carregados de `src/data/artists.json`.
- As imagens usadas pela interface ficam em `public/images`.
