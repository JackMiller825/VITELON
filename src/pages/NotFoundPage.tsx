import { Button } from "../components/Button.tsx";
import { Seo } from "../components/Seo.tsx";
import { siteConfig } from "../data/siteConfig.ts";

export function NotFoundPage() {
  return (
    <section className="band">
      <Seo
        title={siteConfig.seo.notFound.title}
        description={siteConfig.seo.notFound.description}
        pathname="/404"
      />
      <div className="wrap not-found">
        <p className="eyebrow">OUT OF BOUNDS</p>
        <h1>This page left the ring.</h1>
        <p className="lede">That route is not part of the VITELON site.</p>
        <div className="actions">
          <Button to="/">Back to Home</Button>
          <Button to="/story" variant="secondary">
            Read the Story
          </Button>
        </div>
      </div>
    </section>
  );
}
