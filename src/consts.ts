import type { Site, Socials } from "@types";

export const SITE: Site = {
  NAME: "Gabriel",
  FULLNAME: "Gabriel Rocha",
  EMAIL: "contatogabrielrochaf@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const YEARS_OF_EXPERIENCE = new Date().getFullYear() - 2022;

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/gabrielforster"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/gabrielforster",
  }
];
