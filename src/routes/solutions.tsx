import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, AlertTriangle, ArrowUpRight, Radio, ShieldCheck, Wind } from "lucide-react";
import { useLang } from "@/i18n";
import { Eyebrow, PageHero } from "@/components/site/ui";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Industrial Safety Solutions — SSH Company" },
      { name: "description", content: "H2S Services, Connected Safety, Emergency Response, Gas Detection, and Industrial Safety Consulting from SSH Company." },
      { property: "og:title", content: "Industrial Safety Solutions — SSH Company" },
      { property: "og:description", content: "End-to-end industrial safety solutions for high-risk operations." },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

const items = [
  { slug: "h2s", icon: Wind, idTitle: "Layanan H2S", enTitle: "H2S Services", idBody: "Pemantauan H2S, pelatihan operator, audit, dan perlindungan menyeluruh untuk tenaga kerja Anda.", enBody: "H2S monitoring, operator training, audits, and complete workforce protection programs." },
  { slug: "connected-safety", icon: Radio, idTitle: "Connected Safety", enTitle: "Connected Safety Solutions", idBody: "Pemantauan pekerja secara real-time, manajemen aset, dan pelaporan kepatuhan otomatis via iNet®.", enBody: "Real-time worker monitoring, asset management, and automated compliance reporting via iNet®." },
  { slug: "emergency-response", icon: AlertTriangle, idTitle: "Tanggap Darurat", enTitle: "Emergency Response", idBody: "Pemodelan insiden, prediksi penyebaran gas, dan perencanaan respons darurat dengan SAFER One®.", enBody: "Incident modeling, gas dispersion prediction, and emergency response planning with SAFER One®." },
  { slug: "gas-detection", icon: Activity, idTitle: "Deteksi Gas", enTitle: "Gas Detection Solutions", idBody: "Sistem deteksi gas portabel dan tetap untuk semua tipe lingkungan berbahaya.", enBody: "Portable and fixed gas detection systems for every type of hazardous environment." },
  { slug: "consulting", icon: ShieldCheck, idTitle: "Konsultasi K3 Industri", enTitle: "Industrial Safety Consulting", idBody: "Penilaian risiko, desain program keselamatan, dan audit kepatuhan oleh praktisi bersertifikat.", enBody: "Risk assessments, safety program design and compliance audits by certified practitioners." },
];

function SolutionsPage() {
  const { t } = useLang();

  return (
    <>
      <PageHero
        eyebrow={t("SOLUSI", "SOLUTIONS")}
        title={t(
          "Solusi keselamatan industri menyeluruh, dari deteksi hingga respons.",
          "End-to-end industrial safety solutions, from detection to response.",
        )}
        intro={t(
          "Lima pilar layanan dirancang untuk operator paling menuntut di sektor migas, petrokimia, dan energi.",
          "Five service pillars designed for the most demanding operators in oil & gas, petrochemical and energy.",
        )}
      />

      <section className="border-b border-line bg-background">
        <div className="container-ssh py-20 md:py-28">
          <div className="grid gap-px bg-line md:grid-cols-2 xl:grid-cols-3">
            {items.map((it, idx) => {
              const Icon = it.icon;
              return (
                <Link
                  key={it.slug}
                  to="/solutions/$slug"
                  params={{ slug: it.slug }}
                  className="group flex h-full flex-col bg-surface p-8 transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(30,35,41,0.18)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-ink-soft">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <Icon className="h-5 w-5 text-brand" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-10 text-[24px] font-bold leading-tight tracking-[-0.02em]">
                    {t(it.idTitle, it.enTitle)}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    {t(it.idBody, it.enBody)}
                  </p>
                  <div className="mt-10 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink">
                    {t("Pelajari Solusi", "Explore Solution")}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation lead form */}
      <section className="border-b border-line bg-surface-alt">
        <div className="container-ssh grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>{t("KONSULTASI", "CONSULTATION")}</Eyebrow>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-[-0.025em]">
              {t("Diskusikan kebutuhan keselamatan Anda dengan spesialis kami.", "Discuss your safety needs with our specialists.")}
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-soft">
              {t(
                "Tim kami akan menyiapkan penilaian awal gratis dalam 1 hari kerja.",
                "Our team will prepare a complimentary initial assessment within 1 business day.",
              )}
            </p>
          </div>
          <div className="lg:col-span-7">
            <LeadForm variant="consultation" />
          </div>
        </div>
      </section>
    </>
  );
}
