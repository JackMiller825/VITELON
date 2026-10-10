import { ContractCopy } from "./ContractCopy.tsx";
import {
  pendingLabels,
  siteConfig,
  verifiedContract,
  verifiedSupply,
  verifiedTaxLp,
} from "../data/siteConfig.ts";

export function TokenDetails() {
  const address = verifiedContract();
  const supply = verifiedSupply();
  const taxLp = verifiedTaxLp();

  const rows = [
    { label: "NAME", value: siteConfig.name, pending: false },
    { label: "TICKER", value: siteConfig.ticker, pending: false },
    { label: "NETWORK", value: siteConfig.network, pending: false },
    { label: "CONTRACT", value: address ?? pendingLabels.contractToken, pending: !address },
    { label: "TOTAL SUPPLY", value: supply ?? pendingLabels.supply, pending: !supply },
    { label: "TAX / LP", value: taxLp ?? pendingLabels.taxLp, pending: !taxLp },
  ];

  return (
    <div className="stack">
      <dl className="token-table">
        {rows.map((row) => (
          <div key={row.label}>
            <dt>{row.label}</dt>
            <dd className={row.pending ? "is-pending" : undefined}>
              {row.value}
              {row.label === "CONTRACT" ? (
                <div className="copy-row">
                  <ContractCopy address={address} />
                </div>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
      <p className="note">{pendingLabels.detailsLine}</p>
    </div>
  );
}
