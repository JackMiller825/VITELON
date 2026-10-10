import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  canonicalUrl,
  pendingLabels,
  siteConfig,
  socialImageUrl,
  verifiedChartUrl,
  verifiedContract,
  verifiedTelegramUrl,
  verifiedTradingUrl,
  verifiedXUrl,
} from "./siteConfig.ts";
import { canOpenTrading, isEthereumAddress, isHttpsUrl, officialHref } from "./validators.ts";

const SAMPLE_ADDRESS = `0x${"ab".repeat(20)}`;

describe("address and url gates", () => {
  it("accepts a 20-byte hex address and rejects blanks", () => {
    assert.equal(isEthereumAddress(SAMPLE_ADDRESS), true);
    assert.equal(isEthereumAddress(` ${SAMPLE_ADDRESS} `), true);
    assert.equal(isEthereumAddress(""), false);
    assert.equal(isEthereumAddress("0x1234"), false);
    assert.equal(isEthereumAddress(pendingLabels.contractToken), false);
  });

  it("accepts public https URLs only", () => {
    assert.equal(isHttpsUrl("https://example.com/trade"), true);
    assert.equal(isHttpsUrl(""), false);
    assert.equal(isHttpsUrl("http://example.com"), false);
    assert.equal(isHttpsUrl("javascript:alert(1)"), false);
    assert.equal(isHttpsUrl("https://user:pass@example.com"), false);
    assert.equal(officialHref("not a url"), null);
  });

  it("keeps the trade action closed until both facts exist", () => {
    assert.equal(canOpenTrading("", ""), false);
    assert.equal(canOpenTrading(SAMPLE_ADDRESS, ""), false);
    assert.equal(canOpenTrading("", "https://example.com/swap"), false);
    assert.equal(canOpenTrading(SAMPLE_ADDRESS, "https://example.com/swap"), true);
  });
});

describe("shipped configuration", () => {
  it("does not invent token facts or official links", () => {
    assert.equal(siteConfig.name, "VITELON");
    assert.equal(siteConfig.ticker, "$VITELON");
    assert.equal(siteConfig.network, "Ethereum");
    assert.equal(siteConfig.siteUrl, "https://jackmiller825.github.io/VITELON");
    assert.equal(siteConfig.contractAddress, "");
    assert.equal(siteConfig.totalSupply, "");
    assert.equal(siteConfig.taxLp, "");
    assert.equal(verifiedContract(), null);
    assert.equal(verifiedTradingUrl(), null);
    assert.equal(verifiedChartUrl(), null);
    assert.equal(verifiedXUrl(), null);
    assert.equal(verifiedTelegramUrl(), null);
    assert.equal(canOpenTrading(siteConfig.contractAddress, siteConfig.tradingUrl), false);
  });

  it("uses the GitHub Pages URL for canonical and social metadata", () => {
    assert.equal(
      socialImageUrl(),
      "https://jackmiller825.github.io/VITELON/assets/vitelon-banner-3to1.png",
    );
    assert.equal(canonicalUrl("/"), "https://jackmiller825.github.io/VITELON/");
    assert.equal(canonicalUrl("/story"), "https://jackmiller825.github.io/VITELON/story");
    assert.equal(siteConfig.assets.logo, "/VITELON/assets/vitelon-logo-transparent.png");
    assert.equal(siteConfig.assets.mascot, null);
  });
});
