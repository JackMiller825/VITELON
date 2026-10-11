import { BuySteps } from "../components/BuySteps.tsx";
import { Button } from "../components/Button.tsx";
import { ContractCopy } from "../components/ContractCopy.tsx";
import { MascotFrame } from "../components/MascotFrame.tsx";
import { Seo } from "../components/Seo.tsx";
import { StatusPill } from "../components/StatusPill.tsx";
import {
  currentContractText,
  pendingLabels,
  siteConfig,
  verifiedTelegramUrl,
  verifiedTradingUrl,
  verifiedXUrl,
} from "../data/siteConfig.ts";

const sceneAlt =
  "VITELON, a trader in a purple-and-gold wrestling outfit, stands between a charging bull and a bear shielding a purple crystal.";

export function HomePage() {
  const contractText = currentContractText();
  const trading = verifiedTradingUrl();
  const telegram = verifiedTelegramUrl();
  const xUrl = verifiedXUrl();

  return (
    <>
      <Seo title={siteConfig.seo.home.title} description={siteConfig.seo.home.description} pathname="/" />
      <section className="band page-intro" aria-labelledby="home-heading">
        <div className="wrap split">
          <div className="stack">
            <p className="eyebrow">A COSMIC MARKET SAGA</p>
            <h1 id="home-heading">
              THE MARKET HAS ENTERED
              <br />
              <span className="gold">THE ARENA.</span>
            </h1>
            <p className="lede">
              One cosmic wrestler. One charging bull. One defensive bear. VITELON turns market chaos into a story everyone can join.
            </p>
            <div className="actions">
              <Button to="#main-event">ENTER THE ARENA</Button>
              <Button to="/story" variant="secondary">
                READ THE STORY
              </Button>
            </div>
            <p className="support-label">ETHEREUM MEME TOKEN • COMMUNITY-LED STORY</p>
          </div>
          <div className="hero-art">
            <div className="hero-candles" aria-hidden="true">
              <span className="candle candle-green" />
              <span className="candle candle-orange" />
            </div>
            <MascotFrame priority alt={sceneAlt} />
          </div>
        </div>
      </section>

      <div className="wrap">
        <ul className="ticker">
          <li className="tone-offense">BULLS CHARGE</li>
          <li className="tone-defense">BEARS BRACE</li>
          <li className="tone-trader">VITELON REFEREES</li>
          <li className="tone-next">NEXT ROUND →</li>
        </ul>
      </div>

      <section className="band" id="story" aria-labelledby="origin-heading">
        <div className="wrap split">
          <div className="stack">
            <p className="eyebrow">THE ORIGIN</p>
            <h2 id="origin-heading">A market story with two different instincts.</h2>
            <p className="lede">
              Inspired by the bold builder and the visionary researcher archetypes, VITELON puts offensive and defensive market energy in the same ring—with a trader trying to keep the match from breaking the universe.
            </p>
            <div className="actions">
              <Button to="/story">MEET THE CHARACTERS</Button>
            </div>
          </div>
          <MascotFrame alt={sceneAlt} />
        </div>
      </section>

      <section className="band" id="main-event" aria-labelledby="match-heading">
        <div className="wrap stack">
          <div>
            <p className="eyebrow">THE MAIN EVENT</p>
            <h2 id="match-heading">Offense meets defense.</h2>
          </div>
          <div className="grid-3">
            <article className="match-card lift">
              <h3>THE BULL</h3>
              <p>Charges at every green candle.</p>
              <StatusPill tone="offense">OFFENSE</StatusPill>
            </article>
            <article className="match-card lift">
              <h3>THE BEAR</h3>
              <p>Protects the purple crystal.</p>
              <StatusPill tone="defense">DEFENSE</StatusPill>
            </article>
            <article className="match-card lift">
              <h3>VITELON</h3>
              <p>Tries to keep the whole ring intact.</p>
              <StatusPill tone="trader">THE TRADER</StatusPill>
            </article>
          </div>
        </div>
      </section>

      <section className="band" id="token-info" aria-labelledby="tokenomics-heading">
        <div className="wrap stack">
          <h2 id="tokenomics-heading">Tokenomics</h2>
          <div className="ca-row lift">
            <p className="stat-label">CA</p>
            <p className="stat-value">{contractText}</p>
            <ContractCopy value={contractText} />
          </div>
          <div className="grid-4">
            <article className="stat-card lift">
              <p className="stat-label">TOTAL SUPPLY</p>
              <p className="stat-value">{siteConfig.totalSupply}</p>
            </article>
            <article className="stat-card lift">
              <p className="stat-label">BUY / SELL TAX</p>
              <p className="stat-value">{siteConfig.buySellTax}</p>
            </article>
            <article className="stat-card lift">
              <p className="stat-label">LP STATUS</p>
              <p className="stat-value">{siteConfig.lpStatus}</p>
            </article>
            <article className="stat-card lift">
              <p className="stat-label">OWNERSHIP</p>
              <p className="stat-value">{siteConfig.ownership}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="band" id="how-to-buy" aria-labelledby="buy-heading">
        <div className="wrap stack">
          <div>
            <p className="eyebrow">HOW TO JOIN</p>
            <h2 id="buy-heading">Three steps. One arena.</h2>
          </div>
          <BuySteps
            steps={[
              { number: "01", title: "GET ETH", body: "Use a wallet that supports Ethereum." },
              {
                number: "02",
                title: "OPEN THE OFFICIAL LINK",
                body: trading ? "Open the verified trading link from the token page." : pendingLabels.tradingLinkHome,
              },
              { number: "03", title: "REVIEW & SWAP", body: "Check the contract before confirming." },
            ]}
          />
        </div>
      </section>

      <section className="band" id="community" aria-labelledby="community-heading">
        <div className="wrap stack">
          <div>
            <p className="eyebrow">ROUND ONE IS OPEN</p>
            <h2 id="community-heading">The next chapter is written together.</h2>
          </div>
          <div className="crowd-panel">
            <div>
              <p>
                Join the conversation, share your fan art, and help decide what happens when the bull meets the bear again.
              </p>
              <div className="actions">
                <Button href={telegram} pending={!telegram}>
                  JOIN TELEGRAM
                </Button>
                <Button href={xUrl} pending={!xUrl} variant="secondary">
                  FOLLOW ON X
                </Button>
              </div>
            </div>
            <MascotFrame alt={sceneAlt} />
          </div>
        </div>
      </section>

    </>
  );
}
