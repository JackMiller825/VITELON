type StatusPillProps = {
  tone: "offense" | "defense" | "trader";
  children: string;
};

export function StatusPill({ tone, children }: StatusPillProps) {
  return <span className={`pill pill-${tone}`}>{children}</span>;
}
