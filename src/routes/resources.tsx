import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/i18n";
import { Eyebrow, PageHero } from "@/components/site/ui";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Wawasan & Artikel Industri Alat Berat — Trakindo Utama" },
      {
        name: "description",
        content:
          "Kumpulan riset, panduan pemeliharaan alat berat Cat, studi kasus efisiensi solar, dan tren teknologi telematika di Trakindo Utama.",
      },
      { property: "og:title", content: "Wawasan & Panduan — Trakindo Utama" },
      {
        property: "og:description",
        content:
          "Artikel pemeliharaan, panduan pemilihan genset, dan studi kasus alat berat Caterpillar.",
      },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

const POSTS = [
  {
    cat: "WAWASAN",
    date: "2026.04.12",
    id: "Lima Indikator Utama untuk Program Pemeliharaan Preventif Alat Berat yang Matang.",
    en: "Five Key Indicators for a Mature Heavy Equipment Preventive Maintenance Program.",
  },
  {
    cat: "STUDI KASUS",
    date: "2026.03.28",
    id: "Bagaimana Perusahaan Tambang Menghemat 18% Solar dengan Cat MineStar™.",
    en: "How a Mining Company Saved 18% Fuel with Cat MineStar™.",
  },
  {
    cat: "PANDUAN",
    date: "2026.02.19",
    id: "Membeli Alat Berat Bekas Bersertifikat: Hal-hal yang Harus Diperiksa.",
    en: "Buying Certified Used Heavy Equipment: Key Checklist Items to Inspect.",
  },
  {
    cat: "WAWASAN",
    date: "2026.01.30",
    id: "Tren IoT & Telematika Alat Berat di Sektor Konstruksi Indonesia 2026.",
    en: "Heavy Equipment IoT & Telematics Trends in Indonesian Construction 2026.",
  },
  {
    cat: "PANDUAN",
    date: "2025.12.15",
    id: "Memilih Kapasitas Genset Diesel yang Tepat untuk Operasi Pabrik Baru.",
    en: "Choosing the Right Diesel Generator Capacity for New Factory Operations.",
  },
  {
    cat: "STUDI KASUS",
    date: "2025.11.04",
    id: "Bagaimana Kontraktor Infrastruktur Mengurangi Downtime 30% via Cat Rental Store.",
    en: "How an Infrastructure Contractor Reduced Downtime by 30% via Cat Rental Store.",
  },
];

function ResourcesPage() {
  const { t } = useLang();
  return (
    <>
      <PageHero
        eyebrow={t("WAWASAN & PANDUAN", "INSIGHTS & GUIDES")}
        title={t(
          "Wawasan untuk produktivitas armada alat berat Anda.",
          "Insights for your heavy equipment fleet productivity.",
        )}
        intro={t(
          "Riset lapangan, studi kasus efisiensi bahan bakar, dan panduan praktis dari tim spesialis produk dan servis Trakindo.",
          "Field research, fuel efficiency case studies, and practical guides from Trakindo's product and service specialist team.",
        )}
      />

      <section className="bg-background">
        <div className="container-ssh py-20 md:py-28">
          <Eyebrow>{t("SEMUA ARTIKEL", "ALL ARTICLES")}</Eyebrow>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {POSTS.map((p) => (
              <a
                key={p.en}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert(t("Membaca artikel: " + p.id, "Reading article: " + p.en));
                }}
                className="group grid items-baseline gap-6 py-8 md:grid-cols-12 cursor-pointer"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft md:col-span-2">
                  {p.date}
                </div>
                <div className="md:col-span-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
                    {p.cat}
                  </span>
                </div>
                <h3 className="text-[clamp(1.5rem,3.5vw,2rem)] font-extrabold leading-[1.1] tracking-[-0.02em] md:col-span-7 text-secondary group-hover:text-brand transition-colors">
                  {t(p.id, p.en)}
                </h3>
                <div className="flex items-center justify-end md:col-span-1">
                  <ArrowUpRight className="h-5 w-5 text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
