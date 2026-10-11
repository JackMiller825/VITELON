import { ContractCopy } from "./ContractCopy.tsx";
import { currentContractText, siteConfig } from "../data/siteConfig.ts";

export function TokenDetails() {
  const contractText = currentContractText();
  const rows = [
    { label: "CA", value: contractText, copy: true },
    { label: "TOTAL SUPPLY", value: siteConfig.totalSupply, copy: false },
    { label: "BUY / SELL TAX", value: siteConfig.buySellTax, copy: false },
    { label: "LP STATUS", value: siteConfig.lpStatus, copy: false },
    { label: "OWNERSHIP", value: siteConfig.ownership, copy: false },
  ];

  return (
    <dl className="token-table">
      {rows.map((row) => (
        <div key={row.label}>
          <dt>{row.label}</dt>
          <dd className={row.copy ? "ca-value" : undefined}>
            <span>{row.value}</span>
            {row.copy ? <ContractCopy value={contractText} /> : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}
