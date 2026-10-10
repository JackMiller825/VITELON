import { Link } from "react-router-dom";
import { pendingLabels, verifiedTelegramUrl, verifiedXUrl } from "../data/siteConfig.ts";

export function Footer() {
  const xUrl = verifiedXUrl();
  const telegramUrl = verifiedTelegramUrl();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <p className="footer-brand">VITELON</p>
            <p className="prose">A cosmic bull-versus-bear story. Built for fun, community, and the next chapter.</p>
          </div>
          <nav aria-label="Explore">
            <p className="footer-label">Explore</p>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/story">Story</Link>
              <Link to="/token">Token</Link>
            </div>
          </nav>
          <div>
            <p className="footer-label">Community</p>
            <div className="footer-links">
              {xUrl ? (
                <a href={xUrl} target="_blank" rel="noopener noreferrer">
                  {pendingLabels.footerXReady}
                </a>
              ) : (
                <span className="pending-text">{pendingLabels.footerX}</span>
              )}
              {telegramUrl ? (
                <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
                  {pendingLabels.footerTelegramReady}
                </a>
              ) : (
                <span className="pending-text">{pendingLabels.footerTelegram}</span>
              )}
            </div>
          </div>
        </div>
        <div className="footer-base">
          <p>Unofficial community meme project. No endorsement implied. Meme token; no promises. Not financial advice.</p>
          <p>Ethereum ◇</p>
        </div>
      </div>
    </footer>
  );
}
