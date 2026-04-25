import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { HOME } from "@consts";
import { blogPostSlug } from "@lib/utils";
import { getLocaleStaticPaths } from "@i18n/utils";

export const getStaticPaths = getLocaleStaticPaths;

type Context = {
  site: string;
  params: { locale?: string };
};

export async function GET(context: Context) {
  const lang = context.params.locale || "en";
  const prefix = context.params.locale ? `/${context.params.locale}` : "";

  const blog = lang === "pt"
    ? (await getCollection("pt-blog")).filter(post => !post.data.draft)
    : (await getCollection("blog")).filter(post => !post.data.draft);

  const projects = lang === "pt"
    ? (await getCollection("pt-projects")).filter(project => !project.data.draft)
    : (await getCollection("projects")).filter(project => !project.data.draft);

  const blogItems = blog.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    pubDate: post.data.date,
    link: `${prefix}/blog/${blogPostSlug(post.data.date, post.data.slug)}/`,
  }));

  const projectItems = projects.map((project) => ({
    title: project.data.title,
    description: project.data.description,
    pubDate: project.data.date,
    link: `${prefix}/projects/${project.id}/`,
  }));

  return rss({
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    site: context.site,
    items: [...blogItems, ...projectItems]
      .sort((a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf()),
  });
}
