import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  to?: string;
  href?: string | null;
  pending?: boolean;
};

export function Button({ children, variant = "primary", to, href, pending = false }: ButtonProps) {
  const className = `btn btn-${variant}${pending ? " is-pending" : ""}`;

  if (pending || (!to && !href)) {
    return (
      <button type="button" className={className} disabled aria-disabled="true">
        {children}
        <span className="btn-pending-label">Pending</span>
      </button>
    );
  }

  if (href) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
    );
  }

  if (to?.startsWith("#")) {
    return (
      <a className={className} href={to}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} to={to ?? "/"}>
      {children}
    </Link>
  );
}
