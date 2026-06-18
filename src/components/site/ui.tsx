import { Link } from "@tanstack/react-router";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  index,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  index?: string;
}) {
  return (
    <div className={`mx-auto max-w-4xl ${align === "center" ? "text-center" : ""}`}>
      {index && (
        <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
          {index}
        </div>
      )}
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] font-bold tracking-[-0.025em] text-ink">
        {title}
      </h2>
      {intro && <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-ink-soft">{intro}</p>}
    </div>
  );
}

export function PrimaryCTA({
  to,
  href,
  children,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
}) {
  const cls =
    "group inline-flex items-center gap-3 bg-brand px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-foreground transition-colors hover:bg-brand/90";
  const inner = (
    <>
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );
  if (to)
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  return (
    <a href={href} className={cls}>
      {inner}
    </a>
  );
}

export function GhostCTA({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-3 border border-ink px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-surface"
    >
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  );
}

export function FeatureCard({
  index,
  title,
  body,
  icon: Icon,
  to,
  cta,
}: {
  index: string;
  title: string;
  body: string;
  icon?: LucideIcon;
  to?: string;
  cta?: string;
}) {
  const inner = (
    <div className="group flex h-full flex-col border border-line bg-surface p-7 transition-all hover:-translate-y-1 hover:border-ink hover:shadow-[0_24px_48px_-24px_rgba(30,35,41,0.18)]">
      <div className="flex items-start justify-between">
        <span className="font-mono text-[11px] tracking-[0.18em] text-ink-soft">{index}</span>
        {Icon && <Icon className="h-5 w-5 text-brand" strokeWidth={1.5} />}
      </div>
      <h3 className="mt-12 text-[22px] font-bold leading-tight tracking-[-0.02em] text-ink">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{body}</p>
      {to && cta && (
        <div className="mt-8 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink">
          {cta}{" "}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      )}
    </div>
  );
  if (to) return <Link to={to}>{inner}</Link>;
  return inner;
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-surface">
      <div className="container-ssh grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-3">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <div className="md:col-span-9">
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] font-bold tracking-[-0.03em] text-ink">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-3xl text-[18px] leading-relaxed text-ink-soft">{intro}</p>
          )}
        </div>
      </div>
    </section>
  );
}
