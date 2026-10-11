import { BuySteps } from "../components/BuySteps.tsx";
import { Button } from "../components/Button.tsx";
import { MascotFrame } from "../components/MascotFrame.tsx";
import { Seo } from "../components/Seo.tsx";
import { TokenDetails } from "../components/TokenDetails.tsx";
import {
  pendingLabels,
  siteConfig,
  verifiedChartUrl,
  verifiedContract,
  verifiedTelegramUrl,
  verifiedTradingUrl,
  verifiedXUrl,
} from "../data/siteConfig.ts";
import { canOpenTrading } from "../data/validators.ts";

const sceneAlt =
  "VITELON, a trader in a purple-and-gold wrestling outfit, stands between a charging bull and a bear shielding a purple crystal.";

export function TokenPage() {
  const address = verifiedContract();
  const trading = verifiedTradingUrl();
  const chart = verifiedChartUrl();
  const xUrl = verifiedXUrl();
  const telegram = verifiedTelegramUrl();
  const tradeReady = canOpenTrading(siteConfig.contractAddress, siteConfig.tradingUrl);

  const channels = [
    {
      title: "X / TWITTER",
      pending: pendingLabels.xProfile,
      href: xUrl,
    },
    {
      title: "TELEGRAM",
      pending: pendingLabels.telegramGroup,
      href: telegram,
    },
    {
      title: "CHART / DEX",
      pending: pendingLabels.chartPair,
      href: chart,
    },
  ];

  return (
    <>
      <Seo title={siteConfig.seo.token.title} description={siteConfig.seo.token.description} pathname="/token" />
      <section className="band page-intro" aria-labelledby="token-heading">
        <div className="wrap split">
          <div className="stack">
            <p className="eyebrow">TOKENOMICS</p>
            <h1 id="token-heading">
              VITELON / <span className="gold">$VITELON</span>
            </h1>
            <p className="lede">
              An Ethereum meme token wrapped in a cosmic market story. Confirmed details appear here when available; until then, every unknown stays clearly marked.
            </p>
          </div>
          <MascotFrame priority alt={sceneAlt} />
        </div>
      </section>

      <section className="band" id="token-details" aria-labelledby="details-heading">
        <div className="wrap stack">
          <h2 id="details-heading">Tokenomics</h2>
          <TokenDetails />
        </div>
      </section>

      <section className="band" id="how-to-buy" aria-labelledby="howto-heading">
        <div className="wrap stack">
          <div>
            <p className="eyebrow">HOW TO BUY</p>
            <h2 id="howto-heading">Simple and transparent.</h2>
          </div>
          <BuySteps
            steps={[
              { number: "01", title: "GET ETH", body: "Wallet + ETH" },
              {
                number: "02",
                title: "OPEN OFFICIAL LINK",
                body: trading ? "Open the verified trading link." : pendingLabels.tradingLinkToken,
              },
              {
                number: "03",
                title: "CHECK CONTRACT",
                body: address ? "Match the verified contract before you confirm." : pendingLabels.verifiedAddressPending,
              },
            ]}
          />
          <div>
            <Button href={tradeReady ? trading : null} pending={!tradeReady}>
              OPEN OFFICIAL TRADING LINK
            </Button>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="verify-heading">
        <div className="wrap">
          <div className="verify-panel stack">
            <h2 id="verify-heading">VERIFY BEFORE YOU SWAP.</h2>
            <p className="lede">
              Use the official contract address and trading link only after they are published on verified channels. Never rely on unsolicited DMs or lookalike tokens.
            </p>
          </div>
        </div>
      </section>

      <section className="band" id="official-channels" aria-labelledby="channels-heading">
        <div className="wrap stack">
          <div>
            <p className="eyebrow">OFFICIAL CHANNELS</p>
            <h2 id="channels-heading">One source of truth.</h2>
          </div>
          <div className="grid-3">
            {channels.map((channel) =>
              channel.href ? (
                <a
                  key={channel.title}
                  className="channel-card lift is-link"
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="channel-kicker">{channel.title}</p>
                  <p>{channel.href}</p>
                </a>
              ) : (
                <article className="channel-card lift" key={channel.title}>
                  <h3>{channel.title}</h3>
                  <p className="is-pending">{channel.pending}</p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="risk-heading">
        <div className="wrap">
          <aside className="risk-panel stack">
            <p className="eyebrow" id="risk-heading">
              RISK NOTE
            </p>
            <p>VITELON is a meme token. It has no promised returns. Crypto assets are volatile and you may lose your entire purchase.</p>
          </aside>
        </div>
      </section>
    </>
  );
}
