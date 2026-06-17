import { createFileRoute, notFound } from "@tanstack/react-router";
import { CheckCircle2, Download } from "lucide-react";
import { useLang } from "@/i18n";
import { Eyebrow, PageHero, PrimaryCTA } from "@/components/site/ui";
import { LeadForm } from "@/components/site/LeadForm";

type Product = {
  slug: string;
  name: string;
  category: string;
  idOverview: string;
  enOverview: string;
  idFeatures: string[];
  enFeatures: string[];
  idBenefits: string[];
  enBenefits: string[];
  specs: { k: string; v: string }[];
  faq: { idQ: string; enQ: string; idA: string; enA: string }[];
};

const PRODUCTS: Product[] = [
  {
    slug: "inet",
    name: "iNet®",
    category: "Connected Safety Platform",
    idOverview: "iNet® adalah platform keselamatan terkoneksi yang menyatukan deteksi gas, lokasi pekerja, dan pelaporan kepatuhan dalam satu dasbor terpusat.",
    enOverview: "iNet® is a connected safety platform that unifies gas detection, worker location, and compliance reporting in a single centralized dashboard.",
    idFeatures: ["Pemantauan real-time multi-perangkat", "Manajemen armada deteksi gas", "Pelaporan kepatuhan otomatis", "Peringatan paparan instan", "API enterprise dan integrasi SCADA", "Riwayat insiden lengkap"],
    enFeatures: ["Real-time multi-device monitoring", "Gas detection fleet management", "Automated compliance reporting", "Instant exposure alerts", "Enterprise API and SCADA integration", "Complete incident history"],
    idBenefits: ["Mengurangi insiden hingga 40%", "Memangkas biaya kalibrasi 25%", "Visibilitas operasional menyeluruh"],
    enBenefits: ["Reduces incidents by up to 40%", "Cuts calibration costs by 25%", "Complete operational visibility"],
    specs: [
      { k: "Deployment", v: "Cloud / on-premise" },
      { k: "Devices", v: "Industrial Scientific portfolio" },
      { k: "Integration", v: "REST API, MQTT, SCADA" },
      { k: "Compliance", v: "OSHA, K3, ISO 45001" },
    ],
    faq: [
      { idQ: "Apakah iNet bekerja tanpa internet di lapangan?", enQ: "Does iNet work without internet on site?", idA: "Ya. Perangkat menyimpan data secara lokal dan disinkronkan saat konektivitas tersedia.", enA: "Yes. Devices buffer data locally and sync once connectivity is available." },
      { idQ: "Berapa lama implementasi?", enQ: "How long does implementation take?", idA: "Umumnya 2–6 minggu tergantung skala armada.", enA: "Typically 2–6 weeks depending on fleet scale." },
    ],
  },
  {
    slug: "safer-one",
    name: "SAFER One®",
    category: "Emergency Response Software",
    idOverview: "SAFER One® menggabungkan data sensor real-time dengan pemodelan dispersi gas untuk respons darurat berbasis bukti.",
    enOverview: "SAFER One® combines real-time sensor data with gas dispersion modeling for evidence-based emergency response.",
    idFeatures: ["Pemodelan penyebaran gas dinamis", "Prediksi area dampak", "Integrasi sensor dan cuaca real-time", "Latihan dan skenario darurat", "Manajemen sumber daya respons", "Pelaporan pasca-insiden"],
    enFeatures: ["Dynamic gas dispersion modeling", "Impact area prediction", "Real-time sensor and weather integration", "Drills and emergency scenarios", "Response resource management", "Post-incident reporting"],
    idBenefits: ["Pengambilan keputusan lebih cepat", "Evakuasi yang lebih akurat", "Kepatuhan tanggap darurat penuh"],
    enBenefits: ["Faster decision-making", "More accurate evacuation", "Full emergency response compliance"],
    specs: [
      { k: "Model", v: "Gaussian, SLAB, dense gas" },
      { k: "Data inputs", v: "Sensors, weather, GIS" },
      { k: "Deployment", v: "Cloud / on-premise" },
      { k: "Languages", v: "EN / ID" },
    ],
    faq: [
      { idQ: "Apakah SAFER One terintegrasi dengan sistem SCADA kami?", enQ: "Does SAFER One integrate with our SCADA?", idA: "Ya — melalui konektor standar industri.", enA: "Yes — through industry-standard connectors." },
      { idQ: "Apakah tersedia pelatihan untuk tim respons?", enQ: "Is training available for the response team?", idA: "Tersedia program pelatihan dan sertifikasi.", enA: "Training and certification programs are available." },
    ],
  },
  {
    slug: "ventis-pro5",
    name: "Ventis Pro5",
    category: "Portable Multi-Gas Monitor",
    idOverview: "Ventis Pro5 adalah monitor gas pribadi multi-gas yang ringan, terhubung, dan dapat dikonfigurasi penuh.",
    enOverview: "The Ventis Pro5 is a lightweight, connected, fully configurable personal multi-gas monitor.",
    idFeatures: ["Hingga 5 gas sekaligus", "LENS™ peer-to-peer wireless", "Layar warna besar", "Manusia jatuh dan pelacakan panik", "iNet® Now alerting", "Sertifikasi ATEX/IECEx"],
    enFeatures: ["Up to 5 gases simultaneously", "LENS™ peer-to-peer wireless", "Large color display", "Man-down and panic tracking", "iNet® Now alerting", "ATEX/IECEx certified"],
    idBenefits: ["Komunikasi pekerja-ke-pekerja", "Respons darurat lebih cepat", "Kepatuhan paparan otomatis"],
    enBenefits: ["Worker-to-worker communication", "Faster emergency response", "Automated exposure compliance"],
    specs: [
      { k: "Sensors", v: "Up to 5 (O2, CO, H2S, LEL, VOC...)" },
      { k: "Battery", v: "18 hours @ 20°C" },
      { k: "Ingress", v: "IP68" },
      { k: "Certification", v: "ATEX / IECEx / cULus" },
    ],
    faq: [
      { idQ: "Bagaimana kalibrasi dilakukan?", enQ: "How is calibration performed?", idA: "Melalui dok DSX™ untuk kalibrasi dan bump test otomatis.", enA: "Via the DSX™ docking station for automated bump and calibration." },
      { idQ: "Bisakah dikonfigurasi dari jarak jauh?", enQ: "Can it be configured remotely?", idA: "Ya, melalui iNet®.", enA: "Yes — through iNet®." },
    ],
  },
  {
    slug: "radius-bz1",
    name: "Radius BZ1",
    category: "Area Gas Monitor",
    idOverview: "Radius BZ1 adalah monitor area yang kuat dengan masa pakai baterai panjang untuk pemantauan zona berbahaya.",
    enOverview: "The Radius BZ1 is a rugged area monitor with long battery life for hazard-zone monitoring.",
    idFeatures: ["Hingga 7 hari baterai berkelanjutan", "Mesh LENS™ wireless", "Sirene 108 dB", "Hingga 6 sensor", "GPS terintegrasi", "Sertifikasi ATEX/IECEx"],
    enFeatures: ["Up to 7 days continuous battery", "LENS™ wireless mesh", "108 dB siren", "Up to 6 sensors", "Built-in GPS", "ATEX/IECEx certified"],
    idBenefits: ["Setup cepat di lokasi", "Peringatan area otomatis", "Visibilitas zona berbahaya"],
    enBenefits: ["Fast on-site setup", "Automatic area alerts", "Full hazard zone visibility"],
    specs: [
      { k: "Sensors", v: "Up to 6" },
      { k: "Battery", v: "7 days continuous" },
      { k: "Siren", v: "108 dB" },
      { k: "Certification", v: "ATEX / IECEx" },
    ],
    faq: [
      { idQ: "Berapa jangkauan LENS Wireless?", enQ: "What is the LENS wireless range?", idA: "Hingga 300m line-of-sight per node.", enA: "Up to 300m line-of-sight per node." },
      { idQ: "Apakah tahan cuaca ekstrem?", enQ: "Is it weatherproof?", idA: "Ya, IP66 untuk operasi outdoor.", enA: "Yes — IP66 for outdoor operation." },
    ],
  },
  {
    slug: "tango-tx1",
    name: "Tango TX1",
    category: "Single-Gas Detector",
    idOverview: "Tango TX1 adalah detektor gas tunggal pertama dengan dua sensor identik untuk akurasi dan masa pakai panjang.",
    enOverview: "Tango TX1 is the first single-gas detector with two identical sensors for accuracy and extended life.",
    idFeatures: ["Dua sensor identik (DualSense™)", "Masa pakai 3 tahun", "iNet® compatible", "Mode SafeCore™", "Sertifikasi ATEX/IECEx", "Ringan dan ringkas"],
    enFeatures: ["Two identical sensors (DualSense™)", "3-year service life", "iNet® compatible", "SafeCore™ mode", "ATEX/IECEx certified", "Lightweight and compact"],
    idBenefits: ["Kepercayaan ganda pada pembacaan", "Mengurangi false alarm", "TCO terendah di kelasnya"],
    enBenefits: ["Dual confidence in readings", "Reduced false alarms", "Lowest total cost of ownership"],
    specs: [
      { k: "Gas options", v: "H2S, CO, SO2, NO2, Cl2" },
      { k: "Service life", v: "3 years" },
      { k: "Ingress", v: "IP66/67" },
      { k: "Certification", v: "ATEX / IECEx / cULus" },
    ],
    faq: [
      { idQ: "Mengapa dua sensor?", enQ: "Why two sensors?", idA: "Untuk redundansi dan akurasi pembacaan.", enA: "For redundancy and reading accuracy." },
      { idQ: "Apakah perlu kalibrasi rutin?", enQ: "Does it need routine calibration?", idA: "Ya, kami menyediakan kalibrasi tersertifikasi.", enA: "Yes — we provide certified calibration." },
    ],
  },
  {
    slug: "mx6-ibrid",
    name: "MX6 iBrid",
    category: "Multi-Gas Detector",
    idOverview: "MX6 iBrid mendukung hingga enam gas dengan layar warna intuitif dan platform sensor fleksibel.",
    enOverview: "MX6 iBrid supports up to six gases with an intuitive color display and flexible sensor platform.",
    idFeatures: ["Hingga 6 sensor sekaligus", "PID untuk VOC", "Sertifikasi ATEX/IECEx", "iNet® compatible", "Pompa internal opsional", "Layar warna grafis"],
    enFeatures: ["Up to 6 sensors simultaneously", "PID for VOC detection", "ATEX/IECEx certified", "iNet® compatible", "Optional internal pump", "Graphical color display"],
    idBenefits: ["Cocok untuk confined space entry", "Pengukuran VOC akurat", "Investasi sensor fleksibel"],
    enBenefits: ["Ideal for confined space entry", "Accurate VOC measurement", "Flexible sensor investment"],
    specs: [
      { k: "Sensors", v: "Up to 6" },
      { k: "Battery", v: "Up to 18 hours" },
      { k: "Pump", v: "Optional internal" },
      { k: "Certification", v: "ATEX / IECEx / cULus" },
    ],
    faq: [
      { idQ: "Apakah cocok untuk confined space?", enQ: "Is it suitable for confined space entry?", idA: "Ya, dengan pompa internal opsional.", enA: "Yes — with the optional internal pump." },
      { idQ: "Sensor apa yang tersedia?", enQ: "Which sensors are available?", idA: "O2, LEL, CO, H2S, SO2, NO2, Cl2, PID dan lainnya.", enA: "O2, LEL, CO, H2S, SO2, NO2, Cl2, PID and more." },
    ],
  },
];

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const p = PRODUCTS.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => {
    const p = loaderData!;
    return {
      meta: [
        { title: `${p.name} — ${p.category} — SSH Company` },
        { name: "description", content: p.enOverview },
        { property: "og:title", content: `${p.name} — SSH Company` },
        { property: "og:description", content: p.enOverview },
        { property: "og:url", content: `/products/${p.slug}` },
        { property: "og:type", content: "product" },
      ],
      links: [{ rel: "canonical", href: `/products/${p.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.name,
            category: p.category,
            description: p.enOverview,
            brand: { "@type": "Brand", name: "Industrial Scientific" },
          }),
        },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const p = Route.useLoaderData();
  const { t, lang } = useLang();
  const features = lang === "id" ? p.idFeatures : p.enFeatures;
  const benefits = lang === "id" ? p.idBenefits : p.enBenefits;

  return (
    <>
      <PageHero
        eyebrow={p.category.toUpperCase()}
        title={p.name}
        intro={t(p.idOverview, p.enOverview)}
      />

      {/* Features + Benefits */}
      <section className="border-b border-line bg-background">
        <div className="container-ssh grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>{t("FITUR", "FEATURES")}</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-[-0.025em]">
              {t("Fitur utama.", "Key features.")}
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((f: string) => (
                <li key={f} className="flex items-start gap-3 border-t border-line pt-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand" strokeWidth={1.5} />
                  <span className="text-[15px] text-ink">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-secondary p-10 text-surface">
              <Eyebrow>
                <span className="text-surface/70">{t("MANFAAT", "BENEFITS")}</span>
              </Eyebrow>
              <ul className="mt-6 space-y-5">
                {benefits.map((b: string, i: number) => (
                  <li key={b} className="border-t border-surface/15 pt-5">
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-surface/60">
                      0{i + 1}
                    </div>
                    <div className="mt-2 text-[18px] font-medium leading-snug">{b}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specs + Downloads */}
      <section className="border-b border-line bg-surface">
        <div className="container-ssh grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>{t("SPESIFIKASI TEKNIS", "TECHNICAL SPECIFICATIONS")}</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-[-0.025em]">
              {t("Spesifikasi.", "Specifications.")}
            </h2>
            <dl className="mt-10 divide-y divide-line border-y border-line">
              {p.specs.map((s: { k: string; v: string }) => (
                <div key={s.k} className="grid grid-cols-2 py-4 text-[15px]">
                  <dt className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink-soft">{s.k}</dt>
                  <dd className="text-ink">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-5">
            <Eyebrow>{t("UNDUHAN", "DOWNLOADS")}</Eyebrow>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {[`${p.name} — Datasheet`, `${p.name} — Quick Start`, `${p.name} — Calibration Guide`].map((d) => (
                <li key={d} className="flex items-center justify-between py-4">
                  <span className="text-[15px] text-ink">{d}</span>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink hover-underline"
                  >
                    PDF <Download className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-line bg-background">
        <div className="container-ssh py-20 md:py-28">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-[-0.025em]">
            {t("Pertanyaan yang sering diajukan.", "Frequently asked questions.")}
          </h2>
          <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
            {p.faq.map((q: { idQ: string; enQ: string; idA: string; enA: string }, i: number) => (
              <details key={i} className="group bg-background p-8">
                <summary className="flex cursor-pointer items-baseline justify-between gap-6 text-[18px] font-bold tracking-[-0.01em]">
                  <span>{t(q.idQ, q.enQ)}</span>
                  <span className="font-mono text-[11px] text-ink-soft group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{t(q.idA, q.enA)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Demo form */}
      <section className="bg-surface-alt">
        <div className="container-ssh grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>{t("DEMO", "DEMO")}</Eyebrow>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-[-0.025em]">
              {t(`Minta demo ${p.name}.`, `Request a ${p.name} demo.`)}
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-soft">
              {t(
                "Spesialis produk kami akan menyiapkan demo langsung sesuai kasus penggunaan Anda.",
                "Our product specialists will arrange a live demo tailored to your use case.",
              )}
            </p>
            <div className="mt-8">
              <PrimaryCTA to="/contact">{t("Hubungi Spesialis", "Talk to a Specialist")}</PrimaryCTA>
            </div>
          </div>
          <div className="lg:col-span-7">
            <LeadForm variant="demo" />
          </div>
        </div>
      </section>
    </>
  );
}
