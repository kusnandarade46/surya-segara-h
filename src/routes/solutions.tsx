import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Layers, Wrench, ShieldCheck, ArrowUpRight } from "lucide-react";
import { useLang } from "@/i18n";
import { Eyebrow, PageHero } from "@/components/site/ui";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Layanan & Solusi Resmi — Trakindo Utama" },
      {
        name: "description",
        content:
          "Solusi sewa Cat Rental Store, suku cadang resmi Cat Parts, pemeliharaan servis berkala, dan skema pembiayaan alat berat di Trakindo Utama.",
      },
      { property: "og:title", content: "Layanan & Solusi — Trakindo Utama" },
      {
        property: "og:description",
        content:
          "Solusi lengkap alat berat Caterpillar dari pembelian, sewa, hingga perawatan resmi di Indonesia.",
      },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

const items = [
  {
    slug: "rental",
    icon: Clock,
    idTitle: "Cat Rental Store",
    enTitle: "Cat Rental Store",
    idBody:
      "Pilihan sewa alat berat jangka pendek dan panjang yang fleksibel untuk menjaga produktivitas proyek Anda tetap berjalan tepat waktu.",
    enBody:
      "Flexible short and long-term heavy equipment rental options to keep your project productivity running on time.",
  },
  {
    slug: "parts",
    icon: Layers,
    idTitle: "Cat Parts",
    enTitle: "Cat Parts (parts.cat.com)",
    idBody:
      "Akses mudah ke jutaan suku cadang asli Caterpillar secara online 24/7 dengan jaminan keaslian dan presisi tinggi.",
    enBody:
      "Easy online access to millions of genuine Caterpillar spare parts 24/7 with guaranteed authenticity and precision.",
  },
  {
    slug: "services",
    icon: Wrench,
    idTitle: "Layanan Pemeliharaan",
    enTitle: "Maintenance & Service",
    idBody:
      "Servis berkala, perbaikan darurat 24/7, rebuild unit, dan kontrak pemeliharaan resmi (CVA) oleh teknisi ahli tersertifikasi.",
    enBody:
      "Routine maintenance, 24/7 emergency repair, unit rebuilds, and Customer Value Agreements (CVA) by certified technicians.",
  },
  {
    slug: "financing",
    icon: ShieldCheck,
    idTitle: "Skema Pembiayaan & Promo",
    enTitle: "Financing & Promos",
    idBody:
      "Program cicilan ringan dan pembiayaan fleksibel dari Cat Financial serta promo BINTANG khusus untuk unit Caterpillar.",
    enBody:
      "Flexible financing programs from Cat Financial and special BINTANG promotional interest rates for Caterpillar units.",
  },
];

function SolutionsPage() {
  const { t } = useLang();

  return (
    <>
      <PageHero
        eyebrow={t("LAYANAN & SOLUSI", "SERVICES & SOLUTIONS")}
        title={t(
          "Dukungan total siklus hidup alat berat Anda, dari pembelian hingga perawatan.",
          "Complete lifecycle support for your equipment, from acquisition to maintenance.",
        )}
        intro={t(
          "Trakindo menghadirkan solusi komprehensif untuk memastikan produktivitas armada Caterpillar Anda mencapai tingkat uptime tertinggi.",
          "Trakindo delivers comprehensive solutions to ensure your Caterpillar fleet achieves the highest level of operational uptime.",
        )}
      />

      <section className="border-b border-line bg-background">
        <div className="container-ssh py-20 md:py-28">
          <div className="grid gap-px bg-line md:grid-cols-2 lg:grid-cols-4">
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
                  <div className="mt-10 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand">
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
            <Eyebrow>{t("KONSULTASI SOLUSI", "SOLUTION CONSULTATION")}</Eyebrow>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-[-0.025em]">
              {t(
                "Diskusikan kebutuhan operasional Anda dengan tim spesialis Trakindo.",
                "Discuss your operational needs with Trakindo specialists.",
              )}
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-soft">
              {t(
                "Tim representatif kami akan menganalisis kebutuhan Anda dan mengirimkan proposal solusi dalam 24 jam.",
                "Our representatives will analyze your requirements and deliver a solution proposal within 24 hours.",
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
