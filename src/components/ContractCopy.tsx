import { useEffect, useId, useRef, useState } from "react";
import { pendingLabels } from "../data/siteConfig.ts";

type ContractCopyProps = {
  address: string | null;
};

export function ContractCopy({ address }: ContractCopyProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();

  useEffect(() => {
    if (status !== "copied") return;
    const timer = window.setTimeout(() => setStatus("idle"), 2000);
    return () => window.clearTimeout(timer);
  }, [status]);

  if (!address) {
    return <span className="control-pending">{pendingLabels.contractControl}</span>;
  }

  async function copyAddress() {
    if (!address) return;
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(address);
      setStatus("copied");
    } catch {
      setStatus("error");
      window.requestAnimationFrame(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      });
    }
  }

  return (
    <div className="copy-row">
      <button type="button" className="btn btn-primary" onClick={() => void copyAddress()} aria-live="polite">
        {status === "copied" ? "COPIED ✓" : "COPY CONTRACT"}
      </button>
      {status === "error" ? (
        <div className="copy-fallback" role="alert">
          <p className="copy-error">Clipboard unavailable. Select the address and copy it manually.</p>
          <label htmlFor={inputId}>Contract address</label>
          <input id={inputId} ref={inputRef} readOnly value={address} />
        </div>
      ) : null}
    </div>
  );
}
