import { isHttpsUrl, officialAddress, officialHref } from "./validators.ts";

/** Custom domain already attached to the GitHub Pages site. */
export const pagesOrigin = "https://vitelon.site";
export const pagesBase = "/";

function publicBase(): string {
  const fromVite = (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL;
  const base = fromVite && fromVite.length > 0 ? fromVite : pagesBase;
  return base.endsWith("/") ? base : `${base}/`;
}

function publicAsset(file: string): string {
  return `${publicBase()}${file}`;
}

/**
 * Single source for token facts and official links.
 * Leave a value blank until it is confirmed. Do not invent addresses, supplies, or URLs.
 */
export const siteConfig = {
  name: "VITELON",
  ticker: "$VITELON",
  network: "Ethereum",
  /** GitHub Pages project URL. Canonical and social image URLs use this. */
  siteUrl: `${pagesOrigin}${pagesBase.replace(/\/$/, "")}`,
  contractAddress: "",
  totalSupply: "",
  taxLp: "",
  tradingUrl: "",
  chartUrl: "",
  xUrl: "",
  telegramUrl: "",
  assets: {
    logo: publicAsset("assets/vitelon-logo-transparent.png"),
    /**
     * The approved wrestling scene (vitelon-mascot-wrestling-v2.png) was not in the
     * supplied brand folder. Keep this null until that file is copied to public/assets.
     */
    mascot: null as string | null,
    banner3to1: publicAsset("assets/vitelon-banner-3to1.png"),
    banner1100: publicAsset("assets/vitelon-banner-1100x520.png"),
  },
  seo: {
    home: {
      title: "VITELON / $VITELON — The Cosmic Market Saga",
      description:
        "Meet VITELON: a cosmic Ethereum meme-token story starring a charging bull, a defensive bear, and the trader in the middle.",
    },
    story: {
      title: "The Story — VITELON",
      description: "Explore the VITELON cosmic market saga, its characters, and the next round.",
    },
    token: {
      title: "Token Details — VITELON",
      description: "See VITELON token details, verified links, and the transparent three-step buying guide.",
    },
    notFound: {
      title: "Page not found — VITELON",
      description: "That page is not part of the VITELON site.",
    },
    imageAlt:
      "VITELON in a cosmic arena between a charging bull and a bear holding a purple crystal. The artwork includes the name VITELON and the ticker $VITELON.",
  },
};

export const pendingLabels = {
  contractHome: "pending configuration",
  contractToken: "pending verification",
  supply: "pending verification",
  taxLp: "pending verification",
  supplyLine: "Supply / taxes / liquidity: pending verification.",
  detailsLine: "Data placeholders must be replaced with verified project information before launch.",
  tradingLinkHome: "Trading link pending verification.",
  tradingLinkToken: "Trading URL pending verification.",
  verifiedAddressPending: "Verified address pending.",
  contractControl: "CONTRACT PENDING",
  xProfile: "pending official profile",
  telegramGroup: "pending official group",
  chartPair: "pending official pair URL",
  footerX: "X: pending",
  footerTelegram: "Telegram: pending",
  footerXReady: "X: [official link]",
  footerTelegramReady: "Telegram: [official link]",
} as const;

export function verifiedContract(): string | null {
  return officialAddress(siteConfig.contractAddress);
}

export function verifiedTradingUrl(): string | null {
  return officialHref(siteConfig.tradingUrl);
}

export function verifiedChartUrl(): string | null {
  return officialHref(siteConfig.chartUrl);
}

export function verifiedXUrl(): string | null {
  return officialHref(siteConfig.xUrl);
}

export function verifiedTelegramUrl(): string | null {
  return officialHref(siteConfig.telegramUrl);
}

export function verifiedSupply(): string | null {
  const value = siteConfig.totalSupply.trim();
  return value ? value : null;
}

export function verifiedTaxLp(): string | null {
  const value = siteConfig.taxLp.trim();
  return value ? value : null;
}

export function socialImageUrl(): string {
  if (!isHttpsUrl(siteConfig.siteUrl)) return siteConfig.assets.banner3to1;
  return new URL(siteConfig.assets.banner3to1, pagesOrigin).href;
}

export function canonicalUrl(pathname: string): string | null {
  if (!isHttpsUrl(siteConfig.siteUrl)) return null;
  const root = siteConfig.siteUrl.replace(/\/$/, "");
  if (pathname === "/" || pathname === "") return `${root}/`;
  const suffix = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${root}${suffix}`;
}
