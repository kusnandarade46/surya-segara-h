import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/i18n";
import { PageHero } from "@/components/site/ui";

export const PRODUCTS = [
  { slug: "inet", name: "iNet®", category: "Connected Safety", idTagline: "Platform keselamatan pekerja terkoneksi.", enTagline: "Connected worker safety platform." },
  { slug: "safer-one", name: "SAFER One®", category: "Emergency Response", idTagline: "Perangkat lunak pemodelan dan respons darurat.", enTagline: "Emergency response modeling software." },
  { slug: "ventis-pro5", name: "Ventis Pro5", category: "Portable Gas Detection", idTagline: "Monitor gas pribadi multi-gas yang terkoneksi.", enTagline: "Connected personal multi-gas monitor." },
  { slug: "radius-bz1", name: "Radius BZ1", category: "Area Monitor", idTagline: "Monitor area zona berbahaya yang kuat dan portabel.", enTagline: "Rugged portable area monitor for hazard zones." },
  { slug: "tango-tx1", name: "Tango TX1", category: "Single-Gas Detection", idTagline: "Detektor gas tunggal dengan dua sensor untuk masa pakai panjang.", enTagline: "Single-gas monitor with dual sensors for extended life." },
  { slug: "mx6-ibrid", name: "MX6 iBrid", category: "Multi-Gas Detection", idTagline: "Monitor multi-gas hingga enam gas dengan layar warna.", enTagline: "Six-gas multi-gas monitor with color display." },
] as const;

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — iNet, SAFER One & Industrial Scientific Gas Detection" },
      { name: "description", content: "iNet Connected Safety, SAFER One Emergency Response, and Industrial Scientific gas detection: Ventis Pro5, Radius BZ1, Tango TX1, MX6 iBrid." },
      { property: "og:title", content: "Products — SSH Company" },
      { property: "og:description", content: "Industrial Scientific gas detection and connected safety products." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { t } = useLang();
  return (
    <>
      <PageHero
        eyebrow={t("PRODUK", "PRODUCTS")}
        title={t("Portofolio teknologi keselamatan industri terbaik di kelasnya.", "Best-in-class industrial safety technology portfolio.")}
        intro={t(
          "Mitra resmi Industrial Scientific — dari deteksi gas portabel hingga platform tanggap darurat tingkat enterprise.",
          "Authorized Industrial Scientific partner — from portable gas detection to enterprise emergency response platforms.",
        )}
      />

      <section className="bg-background">
        <div className="container-ssh py-20 md:py-28">
          <div className="grid gap-px bg-line md:grid-cols-2 xl:grid-cols-3">
            {PRODUCTS.map((p, idx) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group flex h-full flex-col justify-between bg-surface p-8 transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(30,35,41,0.18)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-ink-soft">
                      {String(idx + 1).padStart(2, "0")} / {p.category.toUpperCase()}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-ink" />
                  </div>
                  <h3 className="mt-16 text-[32px] font-bold leading-none tracking-[-0.025em]">{p.name}</h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-ink-soft">
                    {t(p.idTagline, p.enTagline)}
                  </p>
                </div>
                <div className="mt-12 hairline pt-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink">
                  {t("Lihat Detail", "View Details")}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
