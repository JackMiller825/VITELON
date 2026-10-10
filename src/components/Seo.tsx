import { useEffect } from "react";
import { canonicalUrl, siteConfig, socialImageUrl } from "../data/siteConfig.ts";

type SeoProps = {
  title: string;
  description: string;
  pathname: string;
};

function setMeta(name: string, content: string, attribute: "name" | "property" = "name") {
  const selector = `meta[${attribute}="${name}"]`;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export function Seo({ title, description, pathname }: SeoProps) {
  useEffect(() => {
    document.title = title;
    const image = socialImageUrl();
    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:image", image, "property");
    setMeta("og:image:alt", siteConfig.seo.imageAlt, "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);
    setMeta("twitter:image:alt", siteConfig.seo.imageAlt);

    const canonical = canonicalUrl(pathname);
    const existing = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      existing?.remove();
      const ogUrl = document.head.querySelector('meta[property="og:url"]');
      ogUrl?.remove();
      return;
    }

    const link = existing ?? document.createElement("link");
    link.setAttribute("rel", "canonical");
    link.setAttribute("href", canonical);
    if (!existing) document.head.appendChild(link);
    setMeta("og:url", canonical, "property");
  }, [title, description, pathname]);

  return null;
}
