import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Cpu,
  Globe2,
  Headphones,
  Radio,
  ShieldCheck,
  ClipboardCheck,
  Wrench,
  Users,
  Wind,
} from "lucide-react";
import { useLang } from "@/i18n";
import { Eyebrow, FeatureCard, GhostCTA, PrimaryCTA, SectionHeader } from "@/components/site/ui";
import heroImg from "@/assets/hero-refinery.jpg";
import oilgasImg from "@/assets/industry-oilgas.jpg";
import petroImg from "@/assets/industry-petrochemical.jpg";
import refineryImg from "@/assets/industry-refinery.jpg";
import lngImg from "@/assets/industry-lng.jpg";
import miningImg from "@/assets/industry-mining.jpg";
import powerImg from "@/assets/industry-power.jpg";
import workerImg from "@/assets/connected-worker.jpg";
import detectorImg from "@/assets/product-gasdetector.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SSH Company — Industrial Safety Technology for High-Risk Operations" },
      {
        name: "description",
        content:
          "H2S Services, Gas Detection, iNet Connected Safety Platform & SAFER One Emergency Response for Oil & Gas, Petrochemical, LNG, Mining and Energy. Trusted by industry leaders in Indonesia.",
      },
      { property: "og:title", content: "SSH Company — Industrial Safety Technology Partner" },
      {
        property: "og:description",
        content:
          "H2S Services, Gas Detection, iNet & SAFER One for high-risk industrial operations.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useLang();

  return (
    <>
      {/* HERO */}
      <section className="relative border-b border-line bg-surface">
        <div className="container-ssh grid gap-12 pt-12 pb-20 md:pt-20 md:pb-28 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6 xl:col-span-7">
            <Eyebrow>{t("TEKNOLOGI KESELAMATAN INDUSTRI", "INDUSTRIAL SAFETY TECHNOLOGY")}</Eyebrow>
            <h1 className="mt-6 text-[clamp(2.75rem,7vw,5rem)] font-bold leading-[0.96] tracking-[-0.035em] text-ink">
              {t(
                "Teknologi Keselamatan Industri untuk Operasi Berisiko Tinggi.",
                "Industrial Safety Technology for High-Risk Operations.",
              )}
            </h1>
            <p className="mt-7 max-w-2xl text-[18px] leading-relaxed text-ink-soft">
              {t(
                "SSH Company menghadirkan Layanan H2S, Teknologi Deteksi Gas, Platform iNet Connected Safety, dan Solusi SAFER One Emergency Response untuk Minyak & Gas, Petrokimia, Energi, dan Operasi Industri.",
                "SSH Company delivers H2S Services, Gas Detection Technologies, the iNet Connected Safety Platform, and SAFER One Emergency Response solutions for Oil & Gas, Petrochemical, Energy, and Industrial operations.",
              )}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <PrimaryCTA to="/contact">
                {t("Permintaan Konsultasi", "Request Consultation")}
              </PrimaryCTA>
              <GhostCTA to="/solutions">{t("Jelajahi Solusi", "Explore Solutions")}</GhostCTA>
            </div>

            <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-y-6 border-t border-line pt-8 sm:grid-cols-4">
              {[
                ["10+", t("Tahun Pengalaman", "Years Experience")],
                ["250+", t("Proyek Selesai", "Projects Delivered")],
                ["100+", t("Klien Industri", "Industrial Clients")],
                ["24/7", t("Dukungan Teknis", "Technical Support")],
              ].map(([v, l]) => (
                <div key={v}>
                  <dt className="text-[28px] font-bold tracking-[-0.02em] text-ink">{v}</dt>
                  <dd className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:col-span-6 xl:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
              <img
                src={heroImg}
                alt={t(
                  "Pekerja kilang industri dengan APD lengkap di kilang minyak",
                  "Industrial refinery workers in full PPE at an oil refinery",
                )}
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
              <div className="absolute left-0 top-6 bg-brand px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-brand-foreground">
                {t("Sertifikasi K3", "K3 Certified")}
              </div>
            </div>

            {/* Floating stat */}
            <div className="absolute -left-4 bottom-8 hidden bg-secondary p-5 text-surface shadow-[0_20px_40px_-20px_rgba(0,0,0,0.4)] sm:block md:-left-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-surface/60">
                {t("Pemantauan Langsung", "Live Monitoring")}
              </div>
              <div className="mt-2 flex items-center gap-2 text-[22px] font-bold">
                <span className="h-2 w-2 animate-pulse bg-[#22c55e]" /> iNet®
              </div>
              <div className="mt-1 text-[11px] text-surface/70">24/7 Connected Safety</div>
            </div>
            <div className="absolute -right-3 top-1/3 hidden bg-surface p-5 ring-1 ring-line shadow-[0_20px_40px_-20px_rgba(30,35,41,0.18)] sm:block md:-right-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                {t("Deteksi H2S", "H2S Detection")}
              </div>
              <div className="mt-2 text-[22px] font-bold tracking-tight">0.00 PPM</div>
              <div className="mt-1 text-[11px] text-ink-soft">
                {t("Kondisi aman", "Safe condition")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / STATS BANNER */}
      <section className="border-b border-line bg-secondary text-surface">
        <div className="container-ssh py-16">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>{t("DIPERCAYA SEJAK 2014", "TRUSTED SINCE 2014")}</Eyebrow>
              <h2 className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight tracking-[-0.02em]">
                {t(
                  "Mitra Teknologi Keselamatan yang Terpercaya.",
                  "Trusted Safety Technology Partner.",
                )}
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 md:col-span-8">
              {[
                ["10+", t("Tahun Pengalaman", "Years Experience")],
                ["250+", t("Proyek Diselesaikan", "Projects Delivered")],
                ["100+", t("Klien Industri", "Industrial Clients")],
                ["24/7", t("Dukungan Teknis", "Technical Support")],
              ].map(([v, l]) => (
                <div key={v} className="border-l border-surface/15 pl-5">
                  <div className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-none tracking-[-0.03em]">
                    {v}
                  </div>
                  <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-surface/60">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="border-b border-line bg-background">
        <div className="container-ssh py-24 md:py-32">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <SectionHeader
              index="01 — SOLUTIONS"
              eyebrow={t("SOLUSI TERINTEGRASI", "INTEGRATED SOLUTIONS")}
              title={t(
                "Solusi Keselamatan Industri Terintegrasi.",
                "Integrated Industrial Safety Solutions.",
              )}
              intro={t(
                "Enam pilar layanan dan teknologi yang melindungi tenaga kerja, aset, dan operasi di lingkungan paling berisiko.",
                "Six pillars of services and technology protecting workforce, assets, and operations in the highest-risk environments.",
              )}
            />
            <GhostCTA to="/solutions">{t("Semua Solusi", "All Solutions")}</GhostCTA>
          </div>

          <div className="mt-14 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              index="01"
              icon={Wind}
              title={t("Layanan H2S", "H2S Services")}
              body={t(
                "Pemantauan H2S, pelatihan, konsultasi, dan perlindungan tenaga kerja menyeluruh.",
                "Comprehensive H2S monitoring, training, consulting and workforce protection services.",
              )}
              to="/solutions/h2s"
              cta={t("Pelajari", "Learn more")}
            />
            <FeatureCard
              index="02"
              icon={Radio}
              title={t("Connected Safety", "Connected Safety Solutions")}
              body={t(
                "Pemantauan keselamatan pekerja secara real-time yang didukung oleh iNet.",
                "Real-time worker safety monitoring powered by the iNet platform.",
              )}
              to="/solutions/connected-safety"
              cta={t("Pelajari", "Learn more")}
            />
            <FeatureCard
              index="03"
              icon={AlertTriangle}
              title={t("Tanggap Darurat", "Emergency Response")}
              body={t(
                "Perencanaan dan respons insiden lanjutan menggunakan SAFER One.",
                "Advanced incident planning and response powered by SAFER One.",
              )}
              to="/solutions/emergency-response"
              cta={t("Pelajari", "Learn more")}
            />
            <FeatureCard
              index="04"
              icon={Activity}
              title={t("Deteksi Gas", "Gas Detection Solutions")}
              body={t(
                "Sistem deteksi gas portabel dan fixed untuk lingkungan berbahaya.",
                "Portable and fixed gas detection systems for hazardous environments.",
              )}
              to="/solutions/gas-detection"
              cta={t("Pelajari", "Learn more")}
            />
            <FeatureCard
              index="05"
              icon={ClipboardCheck}
              title={t("Konsultasi K3 Industri", "Industrial Safety Consulting")}
              body={t(
                "Penilaian risiko, desain program keselamatan, dan audit kepatuhan oleh praktisi bersertifikat.",
                "Risk assessments, safety program design and compliance audits by certified practitioners.",
              )}
              to="/solutions/consulting"
              cta={t("Pelajari", "Learn more")}
            />
            <FeatureCard
              index="06"
              icon={Wrench}
              title={t("Kalibrasi & Pemeliharaan", "Calibration & Maintenance Check")}
              body={t(
                "Layanan kalibrasi tersertifikasi, pemeliharaan preventif, dan perbaikan untuk seluruh perangkat deteksi gas dan instrumen keselamatan.",
                "Certified calibration, preventive maintenance, and repair services for all gas detection devices and safety instruments.",
              )}
              to="/solutions/calibration-maintenance"
              cta={t("Pelajari", "Learn more")}
            />
          </div>
        </div>
      </section>

      {/* FEATURED TECH — iNet */}
      <section className="border-b border-line bg-surface">
        <div className="container-ssh grid gap-14 py-24 md:py-32 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-secondary">
              <img
                src={workerImg}
                alt={t("Pekerja terkoneksi dengan iNet", "Connected worker with iNet")}
                loading="lazy"
                width={1200}
                height={1500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                02 — Featured Technology
              </span>
            </div>
            <div className="mt-5 flex items-baseline gap-3">
              <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1] tracking-[-0.03em]">
                iNet
              </h2>
              <span className="text-[28px] font-bold text-brand">®</span>
            </div>
            <p className="mt-3 text-[24px] leading-tight font-medium text-ink-soft">
              {t(
                "Intelijensi Keselamatan Pekerja Terkoneksi.",
                "Connected Worker Safety Intelligence.",
              )}
            </p>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                t("Pemantauan real-time", "Real-time monitoring"),
                t("Manajemen aset", "Asset management"),
                t("Visibilitas armada", "Fleet visibility"),
                t("Pelaporan kepatuhan", "Compliance reporting"),
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 border-t border-line pt-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand" strokeWidth={1.5} />
                  <span className="text-[15px] text-ink">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <PrimaryCTA to="/products/inet">{t("Minta Demo", "Request Demo")}</PrimaryCTA>
              <GhostCTA to="/products/inet">{t("Detail Produk", "Product Details")}</GhostCTA>
            </div>
          </div>
        </div>

        {/* Featured Tech — SAFER One */}
        <div className="border-t border-line">
          <div className="container-ssh grid gap-14 py-24 md:py-32 lg:grid-cols-12">
            <div className="order-2 lg:order-1 lg:col-span-7">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                03 — Featured Technology
              </span>
              <div className="mt-5 flex items-baseline gap-3">
                <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1] tracking-[-0.03em]">
                  SAFER One
                </h2>
                <span className="text-[28px] font-bold text-brand">®</span>
              </div>
              <p className="mt-3 text-[24px] leading-tight font-medium text-ink-soft">
                {t(
                  "Platform Tanggap Darurat Tingkat Lanjut.",
                  "Advanced Emergency Response Platform.",
                )}
              </p>

              <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  t("Pemodelan insiden", "Incident modeling"),
                  t("Prediksi bahaya", "Hazard prediction"),
                  t("Perencanaan darurat", "Emergency planning"),
                  t("Penilaian risiko", "Risk assessment"),
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 border-t border-line pt-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand" strokeWidth={1.5} />
                    <span className="text-[15px] text-ink">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-3">
                <PrimaryCTA to="/contact">{t("Jadwalkan Konsultasi", "Schedule Consultation")}</PrimaryCTA>
                <GhostCTA to="/products/safer-one">{t("Detail Produk", "Product Details")}</GhostCTA>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-5">
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={detectorImg}
                  alt="SAFER One emergency response"
                  loading="lazy"
                  width={1200}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="border-b border-line bg-background">
        <div className="container-ssh py-24 md:py-32">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <SectionHeader
              index="04 — INDUSTRIES"
              eyebrow={t("INDUSTRI YANG KAMI LINDUNGI", "INDUSTRIES WE PROTECT")}
              title={t("Industri yang Kami Lindungi.", "Industries We Protect.")}
              intro={t(
                "Solusi yang disesuaikan untuk lingkungan operasi paling kompleks dan kritis.",
                "Tailored solutions for the most complex and mission-critical operating environments.",
              )}
            />
            <GhostCTA to="/industries">{t("Semua Industri", "All Industries")}</GhostCTA>
          </div>

          <div className="mt-14 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
            {[
              { slug: "oil-gas", title: t("Minyak & Gas", "Oil & Gas"), img: oilgasImg, body: t("Solusi keselamatan untuk operasi hulu, midstream, dan offshore.", "Safety solutions for upstream, midstream and offshore operations.") },
              { slug: "petrochemical", title: "Petrochemical", img: petroImg, body: t("Perlindungan terhadap bahaya kimia kompleks di kompleks petrokimia.", "Protection against complex chemical hazards across petrochemical complexes.") },
              { slug: "refinery", title: "Refinery", img: refineryImg, body: t("Pemantauan H2S dan deteksi gas terintegrasi untuk kilang.", "Integrated H2S monitoring and gas detection for refineries.") },
              { slug: "lng", title: "LNG", img: lngImg, body: t("Sistem deteksi dan respons darurat untuk terminal LNG.", "Detection and emergency response systems for LNG terminals.") },
              { slug: "mining", title: "Mining", img: miningImg, body: t("Keselamatan pekerja terkoneksi untuk tambang terbuka dan bawah tanah.", "Connected worker safety for open-pit and underground mines.") },
              { slug: "power-generation", title: t("Pembangkit Listrik", "Power Generation"), img: powerImg, body: t("Pemantauan terintegrasi untuk pembangkit thermal dan gas.", "Integrated monitoring for thermal and gas power generation.") },
            ].map((i, idx) => (
              <Link
                key={i.slug}
                to="/industries/$slug"
                params={{ slug: i.slug }}
                className="group relative flex flex-col bg-surface"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={i.img}
                    alt={i.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute left-3 top-3 bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <h3 className="text-[20px] font-bold tracking-[-0.02em]">{i.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{i.body}</p>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 flex-none text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SSH — dark */}
      <section className="border-b border-line bg-secondary text-surface">
        <div className="container-ssh py-24 md:py-32">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-surface/60">
                05 — Why SSH
              </div>
              <h2 className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.025em]">
                {t(
                  "Mengapa pemimpin industri memilih SSH.",
                  "Why industry leaders choose SSH.",
                )}
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-surface/70">
                {t(
                  "Kombinasi keahlian bersertifikat, kemitraan strategis dengan Industrial Scientific, dan dukungan lokal 24/7 yang dapat diandalkan.",
                  "A combination of certified expertise, strategic partnership with Industrial Scientific, and reliable 24/7 local support.",
                )}
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-px bg-surface/10 sm:grid-cols-2">
                {[
                  { icon: ShieldCheck, t: t("Ahli Bersertifikat", "Certified Experts"), d: t("Tim bersertifikasi K3 dan standar internasional.", "Team certified to K3 and international standards.") },
                  { icon: Clock, t: t("Pengalaman Industri", "Industry Experience"), d: t("10+ tahun di sektor migas, petrokimia, dan tambang.", "10+ years across oil & gas, petrochemical and mining.") },
                  { icon: Globe2, t: t("Kemitraan Strategis", "Strategic Partnerships"), d: t("Mitra resmi Industrial Scientific.", "Authorized partner of Industrial Scientific.") },
                  { icon: Cpu, t: t("Teknologi Terdepan", "Advanced Technology"), d: t("iNet®, SAFER One®, dan portofolio deteksi gas lengkap.", "iNet®, SAFER One®, and a complete gas detection portfolio.") },
                  { icon: Headphones, t: t("Respons Cepat", "Fast Response"), d: t("Dukungan teknis 24/7 di seluruh Indonesia.", "24/7 technical support across Indonesia.") },
                  { icon: Users, t: t("Dukungan Lokal", "Local Support"), d: t("Tim lapangan berbasis di Jakarta dan kawasan industri utama.", "Field teams based in Jakarta and major industrial regions.") },
                ].map(({ icon: Icon, t: title, d }) => (
                  <div key={title} className="bg-secondary p-7">
                    <Icon className="h-6 w-6 text-brand" strokeWidth={1.5} />
                    <h3 className="mt-5 text-[18px] font-bold tracking-[-0.01em]">{title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-surface/70">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="border-b border-line bg-surface">
        <div className="container-ssh py-20">
          <div className="flex flex-col items-center text-center">
            <Eyebrow>{t("KLIEN", "CLIENTS")}</Eyebrow>
            <h2 className="mt-4 text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-[-0.02em]">
              {t("Dipercaya oleh pemimpin industri.", "Trusted by industry leaders.")}
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-6">
            {[
              "PERTAMINA", "MEDCO", "CHEVRON", "BP", "PETRONAS", "SHELL",
              "FREEPORT", "ADARO", "INPEX", "VICO", "PGN", "EXXONMOBIL",
            ].map((name) => (
              <div
                key={name}
                className="flex h-24 items-center justify-center bg-surface px-6 font-mono text-[12px] font-semibold tracking-[0.2em] text-ink-soft transition-colors hover:text-ink"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="border-b border-line bg-background">
        <div className="container-ssh py-24 md:py-32">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <SectionHeader
              index="06 — INSIGHTS"
              eyebrow={t("WAWASAN TERBARU", "LATEST INSIGHTS")}
              title={t("Wawasan Terbaru.", "Latest Insights.")}
              intro={t(
                "Riset, panduan, dan studi kasus dari tim spesialis SSH.",
                "Research, guides, and case studies from the SSH specialist team.",
              )}
            />
            <GhostCTA to="/resources">{t("Semua Artikel", "All Articles")}</GhostCTA>
          </div>

          <div className="mt-14 grid gap-px bg-line md:grid-cols-3">
            {[
              {
                cat: t("WAWASAN", "INSIGHT"),
                date: "2026.04.12",
                title: t(
                  "Lima Indikator Kunci untuk Program Pemantauan H2S yang Matang.",
                  "Five Key Indicators for a Mature H2S Monitoring Program.",
                ),
              },
              {
                cat: t("STUDI KASUS", "CASE STUDY"),
                date: "2026.03.28",
                title: t(
                  "Bagaimana Operator LNG Mengurangi Insiden Sebesar 42% dengan iNet®.",
                  "How an LNG Operator Reduced Incidents by 42% with iNet®.",
                ),
              },
              {
                cat: t("PANDUAN", "GUIDE"),
                date: "2026.02.19",
                title: t(
                  "Membangun Rencana Tanggap Darurat dengan SAFER One®.",
                  "Building an Emergency Response Plan with SAFER One®.",
                ),
              },
            ].map((p) => (
              <article key={p.title} className="group flex flex-col bg-surface p-8">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
                  <span className="text-brand">{p.cat}</span>
                  <span>{p.date}</span>
                </div>
                <h3 className="mt-10 text-[22px] font-bold leading-[1.15] tracking-[-0.02em]">
                  {p.title}
                </h3>
                <div className="mt-12 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink">
                  {t("Baca Selengkapnya", "Read More")}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-ink text-surface">
        <div className="container-ssh grid gap-10 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <Eyebrow>{t("LANGKAH SELANJUTNYA", "NEXT STEP")}</Eyebrow>
            <h2 className="mt-5 text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1] tracking-[-0.03em]">
              {t(
                "Siap meningkatkan kinerja keselamatan Anda?",
                "Ready to improve your safety performance?",
              )}
            </h2>
          </div>
          <div className="flex flex-col justify-end md:col-span-5">
            <p className="max-w-md text-[17px] leading-relaxed text-surface/70">
              {t(
                "Bicaralah dengan spesialis kami dan temukan bagaimana SSH dapat membantu melindungi tenaga kerja, aset, dan operasi Anda.",
                "Talk to our specialists and discover how SSH can help protect your workforce, assets, and operations.",
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryCTA to="/contact">{t("Hubungi Spesialis Kami", "Contact Our Experts")}</PrimaryCTA>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
