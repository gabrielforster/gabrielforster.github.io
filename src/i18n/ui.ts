import { YEARS_OF_EXPERIENCE } from "@consts";

export const languages = {
  en: "English",
  pt: "Portuguese",
};

export const defaultLang = "en";
export const showDefaultLang = false;

export const ui = {
  en: {
    "header.home": "home",
    "header.work": "work",
    "header.projects": "projects",
    "component.backToTop": "Back to top",
    "content.nothingHere": "Nothing to show here!",
    "toc.onThisPage": "On this page",
    "home.greeting": "Hi, I'm Gabriel",
    "home.about.p1":
      "I am a fullstack software developer with expertise in building robust, simple and maintanable systems. Committed to delivering innovative solutions for complex problems. Currently, undergrad software engineering student.",
    "home.about.p2": `Located in South Brazil, I have been working with software development for over ${YEARS_OF_EXPERIENCE} years.`,
    "home.about.p3":
      "Proficient in NodeJS, ReactJS, VueJS, SQL and No-SQL databases, Serverless and Microservices architecture. Familiarity with On-premises architecture, Docker, CI/CD pipelines, Linux and server configuration, Real-time applications e Pub-Sub.",
    "home.showMore": "Show more",
    "home.seeAllPosts": "See all posts",
    "home.connectText":
      "If you want to get in touch with me, reach out on social media or send me an email.",
    "work.title": "Work",
    "projects.title": "Projects",
    "blog.backToBlog": "Back to blog",
    "projects.backToProjects": "Back to projects",
  },
  pt: {
    "header.home": "início",
    "header.work": "carreira",
    "header.projects": "projetos",
    "component.backToTop": "Voltar ao topo",
    "content.nothingHere": "Nada para mostrar aqui!",
    "toc.onThisPage": "Nesta página",
    "home.greeting": "Olá, sou o Gabriel",
    "home.about.p1":
      "Sou um desenvolvedor de software fullstack com expertise na construção de sistemas robustos, simples e manuteníveis. Comprometido em entregar soluções inovadoras para problemas complexos. Atualmente, estudante de graduação em engenharia de software.",
    "home.about.p2": `Localizado no sul do Brasil, trabalho com desenvolvimento de software há mais de ${YEARS_OF_EXPERIENCE} anos.`,
    "home.about.p3":
      "Proficiente em NodeJS, ReactJS, VueJS, bancos de dados SQL e No-SQL, arquitetura Serverless e Microservices. Familiaridade com arquitetura On-premises, Docker, pipelines CI/CD, Linux e configuração de servidores, aplicações em tempo real e Pub-Sub.",
    "home.showMore": "Ver mais",
    "home.seeAllPosts": "Ver todos",
    "home.connectText":
      "Se você deseja entrar em contato comigo, me procure nas redes sociais ou me envie um email.",
    "work.title": "Carreira",
    "projects.title": "Projetos",
    "blog.backToBlog": "Voltar para blog",
    "projects.backToProjects": "Voltar para projetos",
  },
} as const;
