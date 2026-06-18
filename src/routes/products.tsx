import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/i18n";
import { PageHero } from "@/components/site/ui";

export const PRODUCTS = [
  {
    slug: "cat-320-gc",
    name: "Cat 320 GC",
    category: "Excavator",
    status: ["New", "Rental"],
    budget: "IDR 1.5M - 1.8M",
    idTagline: "Excavator hidrolik 20-ton yang efisien, hemat bahan bakar, dan andal.",
    enTagline: "Efficient, fuel-saving, and reliable 20-ton hydraulic excavator.",
  },
  {
    slug: "cat-305-5e2",
    name: "Cat 305.5E2",
    category: "Excavator",
    status: ["New", "Used", "Rental"],
    budget: "IDR 750jt - 900jt",
    idTagline: "Mini excavator kompak dengan performa tinggi untuk area kerja terbatas.",
    enTagline: "Compact mini excavator with high performance for confined spaces.",
  },
  {
    slug: "cat-120",
    name: "Cat 120",
    category: "Grader",
    status: ["New", "Rental"],
    budget: "IDR 2.4M - 2.8M",
    idTagline: "Motor grader kelas dunia dengan efisiensi operasional dan kenyamanan kabin tinggi.",
    enTagline: "World-class motor grader with high operational efficiency and cab comfort.",
  },
  {
    slug: "cat-140-gc",
    name: "Cat 140 GC",
    category: "Grader",
    status: ["Used", "Rental"],
    budget: "IDR 3.5M - 4.0M",
    idTagline: "Performa perataan tanah presisi tinggi dengan kontrol mekanis yang tangguh.",
    enTagline: "High-precision earth grading performance with rugged mechanical controls.",
  },
  {
    slug: "cat-de33gc",
    name: "Cat DE33GC",
    category: "Genset",
    status: ["New", "Rental"],
    budget: "IDR 250jt - 320jt",
    idTagline: "Genset diesel 33 kVA yang andal dan hemat biaya untuk daya cadangan industri.",
    enTagline: "Reliable and cost-effective 33 kVA diesel generator set for backup power.",
  },
  {
    slug: "cat-de150gc",
    name: "Cat DE150GC",
    category: "Genset",
    status: ["Used", "Rental"],
    budget: "IDR 600jt - 700jt",
    idTagline: "Genset diesel 150 kVA tangguh dirancang untuk beban kerja berat berkelanjutan.",
    enTagline: "Rugged 150 kVA diesel generator set designed for heavy-duty continuous operations.",
  },
] as const;

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Katalog Alat Berat Caterpillar — Trakindo Utama" },
      {
        name: "description",
        content:
          "Temukan produk excavator, motor grader, dan generator set Caterpillar di Trakindo. Tersedia unit baru, bekas, dan sewa.",
      },
      { property: "og:title", content: "Katalog Alat Berat — Trakindo Utama" },
      {
        property: "og:description",
        content: "Katalog alat berat Caterpillar resmi di Indonesia. Baru, bekas, dan rental.",
      },
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
        eyebrow={t("PRODUK TRAKINDO", "TRAKINDO PRODUCTS")}
        title={t(
          "Katalog Alat Berat & Genset Caterpillar.",
          "Caterpillar Heavy Equipment & Genset Catalog.",
        )}
        intro={t(
          "Sebagai dealer resmi Caterpillar di Indonesia, kami menawarkan unit baru, bekas bersertifikat, dan opsi sewa (rental) dengan dukungan penuh servis dan suku cadang asli.",
          "As the authorized Caterpillar dealer in Indonesia, we offer new units, certified used equipment, and rental options backed by full support and original parts.",
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
                    <div className="flex gap-1.5">
                      {p.status.map((st) => (
                        <span
                          key={st}
                          className={`px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider ${
                            st === "New"
                              ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
                              : st === "Used"
                                ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                                : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                          }`}
                        >
                          {st}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="mt-16 text-[32px] font-bold leading-none tracking-[-0.025em]">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    {t(p.idTagline, p.enTagline)}
                  </p>
                  <div className="mt-5 flex items-center gap-2">
                    <span className="font-mono text-[11px] text-ink-soft uppercase tracking-wider">
                      {t("Kisaran Anggaran:", "Est. Budget:")}
                    </span>
                    <span className="text-[14px] font-bold text-brand">{p.budget}</span>
                  </div>
                </div>
                <div className="mt-12 hairline pt-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink flex items-center justify-between">
                  <span>{t("Lihat Spesifikasi", "View Specs")}</span>
                  <ArrowUpRight className="h-4 w-4 text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
