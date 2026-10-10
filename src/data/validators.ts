const ETH_ADDRESS = /^0x[a-fA-F0-9]{40}$/;

export function isEthereumAddress(value: string): boolean {
  return ETH_ADDRESS.test(value.trim());
}

export function isHttpsUrl(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  try {
    const url = new URL(trimmed);
    if (url.protocol !== "https:") return false;
    if (!url.hostname || !url.hostname.includes(".")) return false;
    if (url.username || url.password) return false;
    return true;
  } catch {
    return false;
  }
}

export function officialHref(value: string): string | null {
  const trimmed = value.trim();
  return isHttpsUrl(trimmed) ? trimmed : null;
}

export function officialAddress(value: string): string | null {
  const trimmed = value.trim();
  return isEthereumAddress(trimmed) ? trimmed : null;
}

/** A trade action stays closed until both a real address and a real HTTPS trading URL exist. */
export function canOpenTrading(address: string, tradingUrl: string): boolean {
  return officialAddress(address) !== null && officialHref(tradingUrl) !== null;
}
