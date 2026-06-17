import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/i18n";
import { Eyebrow, PageHero } from "@/components/site/ui";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Insights & Resources — SSH Company" },
      { name: "description", content: "Research, guides, and case studies on H2S services, connected worker safety, gas detection and emergency response." },
      { property: "og:title", content: "Insights — SSH Company" },
      { property: "og:description", content: "Industrial safety research, guides and case studies." },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

const POSTS = [
  { cat: "INSIGHT", date: "2026.04.12", id: "Lima Indikator Kunci untuk Program Pemantauan H2S yang Matang.", en: "Five Key Indicators for a Mature H2S Monitoring Program." },
  { cat: "CASE STUDY", date: "2026.03.28", id: "Bagaimana Operator LNG Mengurangi Insiden Sebesar 42% dengan iNet®.", en: "How an LNG Operator Reduced Incidents by 42% with iNet®." },
  { cat: "GUIDE", date: "2026.02.19", id: "Membangun Rencana Tanggap Darurat dengan SAFER One®.", en: "Building an Emergency Response Plan with SAFER One®." },
  { cat: "INSIGHT", date: "2026.01.30", id: "Tren Connected Worker Safety di Asia Tenggara 2026.", en: "Connected Worker Safety Trends in Southeast Asia 2026." },
  { cat: "GUIDE", date: "2025.12.15", id: "Memilih Detektor Multi-Gas yang Tepat untuk Operasi Anda.", en: "Choosing the Right Multi-Gas Detector for Your Operations." },
  { cat: "CASE STUDY", date: "2025.11.04", id: "Tambang Batubara Meningkatkan Kepatuhan Paparan ke 99,1%.", en: "Coal Mine Lifts Exposure Compliance to 99.1%." },
];

function ResourcesPage() {
  const { t } = useLang();
  return (
    <>
      <PageHero
        eyebrow={t("WAWASAN", "INSIGHTS")}
        title={t("Wawasan dari lapangan paling kritis di Indonesia.", "Insights from Indonesia's most critical worksites.")}
        intro={t(
          "Riset, panduan, dan studi kasus dari tim spesialis keselamatan SSH.",
          "Research, guides and case studies from the SSH safety specialist team.",
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
                className="group grid items-baseline gap-6 py-8 md:grid-cols-12"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft md:col-span-2">
                  {p.date}
                </div>
                <div className="md:col-span-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">{p.cat}</span>
                </div>
                <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.1] tracking-[-0.02em] md:col-span-7">
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
