import { siteConfig } from "../data/siteConfig.ts";

type MascotFrameProps = {
  alt: string;
  priority?: boolean;
};

const MISSING_FILE = "vitelon-mascot-wrestling-v2.jpg";

export function MascotFrame({ alt, priority = false }: MascotFrameProps) {
  const src = siteConfig.assets.mascot;
  if (!src) {
    return (
      <div className="mascot-frame is-placeholder">
        <p className="placeholder-kicker">Artwork not supplied</p>
        <p>The approved wrestling scene is not in this build.</p>
        <p className="placeholder-file">{MISSING_FILE}</p>
        <p className="visually-hidden">{alt}</p>
      </div>
    );
  }

  return (
    <div className="mascot-frame">
      <img
        src={src}
        alt={alt}
        width={1024}
        height={1024}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "low"}
        decoding="async"
      />
    </div>
  );
}
