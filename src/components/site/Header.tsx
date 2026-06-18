import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/i18n";

export function Header() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  const nav = [
    { to: "/", label: t("Beranda", "Home") },
    { to: "/about", label: t("Tentang", "About") },
    { to: "/solutions", label: t("Solusi", "Solutions") },
    { to: "/products", label: t("Produk", "Products") },
    { to: "/industries", label: t("Industri", "Industries") },
    { to: "/resources", label: t("Wawasan", "Resources") },
    { to: "/contact", label: t("Kontak", "Contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <div className="container-ssh flex h-16 items-center justify-between gap-6 md:h-20">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-12 place-items-center bg-brand text-brand-foreground font-mono text-[14px] font-black tracking-tighter transform skew-x-[-6deg]">
            CAT
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[16px] font-extrabold tracking-tight text-ink">Trakindo</span>
            <span className="text-[8px] uppercase tracking-[0.18em] text-ink-soft font-mono">
              PT Trakindo Utama
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[13px] font-semibold text-ink hover-underline"
              activeProps={{ className: "text-brand" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center border border-line font-mono text-[11px] sm:flex">
            <button
              onClick={() => setLang("id")}
              className={`px-2.5 py-1 ${lang === "id" ? "bg-ink text-surface" : "text-ink-soft"}`}
              aria-pressed={lang === "id"}
            >
              ID
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 ${lang === "en" ? "bg-ink text-surface" : "text-ink-soft"}`}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>
          <Link
            to="/contact"
            className="hidden bg-brand px-4 py-2.5 text-[12px] font-bold uppercase tracking-[0.12em] text-brand-foreground transition-colors hover:bg-brand/80 md:inline-flex"
          >
            {t("Minta Penawaran", "Request Quote")}
          </Link>
          <button
            className="grid h-10 w-10 place-items-center border border-line lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-surface lg:hidden">
          <div className="container-ssh flex flex-col py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-[14px] font-medium text-ink last:border-0"
                activeProps={{ className: "text-brand" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center gap-2 font-mono text-[11px] sm:hidden">
              <button
                onClick={() => setLang("id")}
                className={`border border-line px-3 py-1.5 ${lang === "id" ? "bg-ink text-surface" : "text-ink-soft"}`}
              >
                ID
              </button>
              <button
                onClick={() => setLang("en")}
                className={`border border-line px-3 py-1.5 ${lang === "en" ? "bg-ink text-surface" : "text-ink-soft"}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
