import { Button } from "../components/Button.tsx";
import { MascotFrame } from "../components/MascotFrame.tsx";
import { Seo } from "../components/Seo.tsx";
import { siteConfig, verifiedTelegramUrl } from "../data/siteConfig.ts";

const sceneAlt =
  "VITELON, a trader in a purple-and-gold wrestling outfit, stands between a charging bull and a bear shielding a purple crystal.";

const chapters = [
  {
    kicker: "01 • THE FIRST CANDLE",
    body: "The bull spots green and charges. The bear sees danger in every shadow.",
  },
  {
    kicker: "02 • CRYSTAL DEFENSE",
    body: "The purple crystal becomes the center of the ring—and everyone wants it.",
  },
  {
    kicker: "03 • THE TRADER'S CALL",
    body: "VITELON tries an impossible move: get offense and defense to agree.",
  },
  {
    kicker: "04 • COMMUNITY DECIDES",
    body: "The crowd chooses the next challenge, character gag, or arena event.",
  },
];

export function StoryPage() {
  const telegram = verifiedTelegramUrl();

  return (
    <>
      <Seo title={siteConfig.seo.story.title} description={siteConfig.seo.story.description} pathname="/story" />
      <section className="band page-intro" aria-labelledby="story-heading">
        <div className="wrap split">
          <div className="stack">
            <p className="eyebrow">THE LORE</p>
            <h1 id="story-heading">
              THE COSMIC MARKET <span className="gold">SAGA</span>
            </h1>
            <p className="lede">
              Three characters. Two instincts. A universe of market drama. Each chapter turns the bull-versus-bear clash into a new, community-shaped episode.
            </p>
          </div>
          <MascotFrame priority alt={sceneAlt} />
        </div>
      </section>

      <section className="band" aria-labelledby="premise-heading">
        <div className="wrap">
          <div className="premise-panel stack">
            <p className="eyebrow">THE PREMISE</p>
            <h2 id="premise-heading">A trader steps into the ring.</h2>
            <p className="lede">
              The Elon-inspired bull believes every moment is a launch. The Vitalik-inspired bear believes the crystal must be protected. VITELON tries to keep both forces in play.
            </p>
          </div>
        </div>
      </section>

      <section className="band" id="chapters" aria-labelledby="chapters-heading">
        <div className="wrap stack">
          <div>
            <p className="eyebrow">SERIALIZED STORY</p>
            <h2 id="chapters-heading">Every round adds a new twist.</h2>
          </div>
          <div className="grid-2">
            {chapters.map((chapter) => (
              <article className="chapter-card lift" key={chapter.kicker}>
                <h3 className="chapter-kicker">{chapter.kicker}</h3>
                <p>{chapter.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band" id="cast" aria-labelledby="cast-heading">
        <div className="wrap stack">
          <div>
            <p className="eyebrow">THE CAST</p>
            <h2 id="cast-heading">A wrestler, two market instincts.</h2>
          </div>
          <div className="cast-layout">
            <MascotFrame alt={sceneAlt} />
            <div className="stack">
              <article className="cast-card lift">
                <p className="cast-role">THE TRADER</p>
                <h3>VITELON</h3>
                <p>Purple-and-gold referee of cosmic chaos.</p>
              </article>
              <article className="cast-card lift">
                <p className="cast-role">OFFENSE</p>
                <h3>THE BULL</h3>
                <p>Elon-inspired; sees every candle as a launch.</p>
              </article>
              <article className="cast-card lift">
                <p className="cast-role">DEFENSE</p>
                <h3>THE BEAR</h3>
                <p>Vitalik-inspired; shields the crystal.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="crowd-heading">
        <div className="wrap">
          <div className="prompt-panel stack">
            <h2 id="crowd-heading">THE CROWD GETS A CORNER.</h2>
            <p>
              Community prompts can shape future episodes, fan-art spotlights, and arena events. Keep every chapter playful, transparent, and easy to follow.
            </p>
            <div className="actions">
              <Button href={telegram} pending={!telegram}>
                JOIN THE COMMUNITY
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
