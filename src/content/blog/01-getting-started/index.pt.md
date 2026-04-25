---
title: "Primeiros passos"
description: "Comece a usar rapidamente."
slug: "primeiros-passos"
date: "Mar 22 2024"
draft: false
---

A configuração básica do Nano é bem simples.

Edite `src/consts.ts`

## Personalize o site base

```ts
// src/consts.ts

export const SITE: Site = {
  NAME: "Astro Nano",
  EMAIL: "markhorn.dev@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};
```

| Campo | Obr | Descrição |
| :---- | :-- | :-----------|
| NAME | Sim | Exibido no cabeçalho e rodapé. Usado em SEO e RSS. |
| EMAIL | Sim | Exibido na seção de contato. |
| NUM_POSTS | Sim | Limita o número de posts na página inicial. |
| NUM_WORKS | Sim | Limita o número de trabalhos na página inicial. |
| NUM_PROJECTS | Sim | Limita o número de projetos na página inicial. |

### Personalize os metadados das suas páginas

```ts
// src/consts.ts

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};
```

| Campo | Obr | Descrição |
| :---- | :-- | :-----------|
| TITLE | Sim | Exibido na aba do navegador. Usado em SEO e RSS. |
| DESCRIPTION | Sim | Usado em SEO e RSS. |

Personalize suas redes sociais

```ts
// src/consts.ts

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/markhorn_dev",
  },
  {
    NAME: "github",
    HREF: "https://github.com/markhorn-dev"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/markhorn-dev",
  }
];
```

| Campo | Obr | Descrição |
| :---- | :-- | :-----------|
| NAME | Sim | Exibido na seção de contato como um link. |
| HREF | Sim | URL externa para o perfil na rede social. |
