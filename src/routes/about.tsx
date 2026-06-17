import { createFileRoute } from "@tanstack/react-router";
import { Eye, Flag, Handshake, Lightbulb, ShieldCheck, Sparkles, Target } from "lucide-react";
import { useLang } from "@/i18n";
import { Eyebrow, PageHero, SectionHeader } from "@/components/site/ui";
import controlImg from "@/assets/about-controlroom.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SSH Company — Industrial Safety Technology Partner Indonesia" },
      {
        name: "description",
        content:
          "PT Surya Segara Hana (SSH Company) — over 10 years delivering H2S Services, gas detection and connected safety solutions. Vision, mission, leadership, and certifications.",
      },
      { property: "og:title", content: "About SSH Company" },
      { property: "og:description", content: "10+ years of industrial safety technology expertise in Indonesia." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();

  const values = [
    { icon: ShieldCheck, k: t("Keselamatan", "Safety"), d: t("Tidak ada kompromi terhadap keselamatan manusia, aset, dan lingkungan.", "Zero compromise on the safety of people, assets and the environment.") },
    { icon: Handshake, k: t("Integritas", "Integrity"), d: t("Transparan, etis, dan bertanggung jawab dalam setiap keputusan.", "Transparent, ethical and accountable in every decision.") },
    { icon: Lightbulb, k: t("Inovasi", "Innovation"), d: t("Mengadopsi teknologi terdepan untuk hasil yang lebih baik.", "Adopting leading technology for measurably better outcomes.") },
    { icon: Sparkles, k: t("Keunggulan", "Excellence"), d: t("Standar tinggi pada setiap layanan dan penyerahan proyek.", "High standards across every service and project delivery.") },
    { icon: Target, k: t("Kemitraan", "Partnership"), d: t("Membangun hubungan jangka panjang dengan klien dan mitra.", "Building long-term relationships with clients and partners.") },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("TENTANG SSH COMPANY", "ABOUT SSH COMPANY")}
        title={t(
          "Lebih dari satu dekade melindungi operasi industri Indonesia.",
          "Over a decade protecting Indonesia's industrial operations.",
        )}
        intro={t(
          "PT Surya Segara Hana adalah penyedia teknologi keselamatan industri terkemuka, melayani operator Minyak & Gas, Petrokimia, LNG, Pertambangan, dan Energi di seluruh Indonesia.",
          "PT Surya Segara Hana is a leading industrial safety technology provider, serving Oil & Gas, Petrochemical, LNG, Mining and Energy operators across Indonesia.",
        )}
      />

      {/* Overview + image */}
      <section className="border-b border-line bg-surface">
        <div className="container-ssh grid gap-12 py-20 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden bg-secondary">
              <img src={controlImg} alt="SSH control room" loading="lazy" width={1600} height={1000} className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <Eyebrow>01 — {t("CERITA KAMI", "OUR STORY")}</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-[-0.025em]">
              {t(
                "Dibangun di Jakarta. Dipercaya di lapangan paling berisiko.",
                "Built in Jakarta. Trusted on the highest-risk worksites.",
              )}
            </h2>
            <div className="mt-7 space-y-4 text-[16px] leading-relaxed text-ink-soft">
              <p>
                {t(
                  "SSH Company didirikan untuk menjawab tantangan keselamatan yang nyata di sektor migas dan industri berat Indonesia. Sejak awal, kami fokus pada satu hal: memberikan teknologi dan layanan keselamatan terbaik yang dapat diandalkan setiap hari.",
                  "SSH Company was founded to address real safety challenges in Indonesia's oil & gas and heavy industry sectors. From day one we have focused on one thing: delivering the best safety technology and services that operators can rely on every day.",
                )}
              </p>
              <p>
                {t(
                  "Sebagai mitra resmi Industrial Scientific, kami menghadirkan portofolio lengkap — dari deteksi gas portabel dan tetap, platform iNet Connected Safety, hingga perangkat lunak tanggap darurat SAFER One.",
                  "As an authorized partner of Industrial Scientific, we bring a complete portfolio — from portable and fixed gas detection to the iNet Connected Safety platform and SAFER One emergency response software.",
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="border-b border-line bg-background">
        <div className="container-ssh grid gap-px bg-line py-0 md:grid-cols-2">
          <div className="bg-background p-10 md:p-16">
            <div className="flex items-center gap-3">
              <Eye className="h-6 w-6 text-brand" strokeWidth={1.5} />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">02 — {t("VISI", "VISION")}</span>
            </div>
            <h2 className="mt-6 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight tracking-[-0.02em]">
              {t(
                "Menjadi mitra teknologi keselamatan industri paling tepercaya di Asia Tenggara.",
                "To be Southeast Asia's most trusted industrial safety technology partner.",
              )}
            </h2>
          </div>
          <div className="bg-background p-10 md:p-16">
            <div className="flex items-center gap-3">
              <Flag className="h-6 w-6 text-brand" strokeWidth={1.5} />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">03 — {t("MISI", "MISSION")}</span>
            </div>
            <h2 className="mt-6 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight tracking-[-0.02em]">
              {t(
                "Melindungi tenaga kerja, aset, dan operasi melalui teknologi, keahlian, dan layanan terbaik di kelasnya.",
                "To protect workforce, assets and operations through best-in-class technology, expertise and service.",
              )}
            </h2>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-line bg-surface">
        <div className="container-ssh py-24 md:py-32">
          <SectionHeader index="04 — CORE VALUES" eyebrow={t("NILAI INTI", "CORE VALUES")} title={t("Nilai inti yang memandu setiap keputusan.", "Core values guiding every decision.")} />
          <div className="mt-14 grid gap-px bg-line md:grid-cols-3 lg:grid-cols-5">
            {values.map(({ icon: Icon, k, d }) => (
              <div key={k} className="bg-surface p-8">
                <Icon className="h-6 w-6 text-brand" strokeWidth={1.5} />
                <h3 className="mt-6 text-[18px] font-bold tracking-[-0.01em]">{k}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-b border-line bg-background">
        <div className="container-ssh py-24 md:py-32">
          <SectionHeader index="05 — LEADERSHIP" eyebrow={t("TIM KEPEMIMPINAN", "LEADERSHIP TEAM")} title={t("Dipimpin oleh praktisi industri.", "Led by industry practitioners.")} />
          <div className="mt-14 grid gap-px bg-line md:grid-cols-3">
            {[
              { n: "Budi Santoso", r: t("Direktur Utama", "Chief Executive Officer") },
              { n: "Ratna Wijaya", r: t("Direktur Operasi", "Chief Operating Officer") },
              { n: "Andi Prasetyo", r: t("Kepala Teknologi", "Chief Technology Officer") },
            ].map((p) => (
              <div key={p.n} className="bg-background p-8">
                <div className="aspect-square w-full bg-surface-alt" />
                <h3 className="mt-6 text-[20px] font-bold tracking-[-0.02em]">{p.n}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">{p.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications + Partners */}
      <section className="border-b border-line bg-secondary text-surface">
        <div className="container-ssh grid gap-14 py-24 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>06 — {t("SERTIFIKASI & MITRA", "CERTIFICATIONS & PARTNERS")}</Eyebrow>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.05] tracking-[-0.025em]">
              {t("Standar terverifikasi. Kemitraan strategis.", "Verified standards. Strategic partnerships.")}
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-surface/70">
              {t(
                "Operasi kami diaudit terhadap standar internasional, dan teknologi yang kami tawarkan didukung oleh kemitraan eksklusif.",
                "Our operations are audited against international standards, and the technology we deliver is backed by exclusive partnerships.",
              )}
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-px bg-surface/10 sm:grid-cols-3">
              {["ISO 9001:2015", "OHSAS 18001", "ISO 14001", "K3 KEMNAKER", "MIGAS", "ESDM",
                "INDUSTRIAL SCIENTIFIC", "SAFER SYSTEMS", "TÜV"].map((c) => (
                <div key={c} className="bg-secondary p-6 text-center font-mono text-[12px] uppercase tracking-[0.16em] text-surface/80">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
