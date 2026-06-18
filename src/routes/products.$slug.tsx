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
    slug: "cat-320-gc",
    name: "Cat 320 GC",
    category: "Excavator",
    idOverview:
      "Cat 320 GC menggabungkan keseimbangan sempurna antara performa tangguh, efisiensi bahan bakar hingga 20%, dan biaya pemeliharaan yang lebih rendah hingga 25%. Cocok untuk pekerjaan konstruksi jalan, perataan tanah, dan penggalian berat.",
    enOverview:
      "The Cat 320 GC matches the perfect balance of robust performance, up to 20% fuel efficiency, and up to 25% lower maintenance costs. Ideal for road construction, grading, and heavy excavation.",
    idFeatures: [
      "Konsumsi bahan bakar rendah",
      "Sistem hidrolik canggih dengan sensor beban",
      "Kabin ROPS senyap & nyaman dengan visibilitas luar biasa",
      "Kemudahan pemeliharaan berkala dari permukaan tanah",
      "Cat Product Link™ bawaan untuk pemantauan armada",
      "Kapasitas bucket standar 1.0 m³",
    ],
    enFeatures: [
      "Low fuel consumption",
      "Advanced load-sensing hydraulic system",
      "Quiet & comfortable ROPS cab with excellent visibility",
      "Easy routine ground-level maintenance access",
      "Built-in Cat Product Link™ for fleet monitoring",
      "Standard 1.0 m³ bucket capacity",
    ],
    idBenefits: [
      "Hemat bahan bakar hingga 20% dibandingkan model sebelumnya",
      "Biaya servis hemat hingga 25% dengan interval filter diperpanjang",
      "Keandalan tinggi di lokasi proyek konstruksi dan tambang menengah",
    ],
    enBenefits: [
      "Up to 20% fuel savings compared to previous models",
      "Up to 25% lower maintenance costs with extended filter intervals",
      "High reliability on construction sites and mid-sized quarry operations",
    ],
    specs: [
      { k: "Operating Weight", v: "20,500 kg" },
      { k: "Engine Model", v: "Cat C4.4" },
      { k: "Net Power - ISO 9249", v: "145 HP (108 kW)" },
      { k: "Max Digging Depth", v: "6,720 mm" },
      { k: "Bucket Capacity", v: "1.0 m³" },
    ],
    faq: [
      {
        idQ: "Apakah Cat 320 GC memiliki garansi resmi Trakindo?",
        enQ: "Does the Cat 320 GC include Trakindo's warranty?",
        idA: "Ya, setiap unit baru dilengkapi garansi penuh Trakindo Utama beserta jaminan ketersediaan suku cadang 24 jam.",
        enA: "Yes, every new unit comes with a full Trakindo Utama warranty and a 24-hour parts availability guarantee.",
      },
      {
        idQ: "Bagaimana dengan opsi pembiayaan untuk Cat 320 GC?",
        enQ: "What are the financing options for Cat 320 GC?",
        idA: "Kami menyediakan opsi pembiayaan fleksibel melalui Cat Financial dan program promosi BINTANG dengan cicilan ringan.",
        enA: "We provide flexible financing options through Cat Financial and the BINTANG promotional program with low interest rates.",
      },
    ],
  },
  {
    slug: "cat-305-5e2",
    name: "Cat 305.5E2",
    category: "Excavator",
    idOverview:
      "Mini excavator Cat 305.5E2 dirancang khusus untuk bekerja di area terbatas dengan stabilitas tinggi, kontrol presisi, dan konsumsi bahan bakar yang sangat hemat untuk utilitas perkotaan dan perkebunan.",
    enOverview:
      "The Cat 305.5E2 mini excavator is designed for high stability, precise controls, and exceptional fuel efficiency in confined job sites, utility works, and plantations.",
    idFeatures: [
      "Desain compact radius untuk manuver di gang sempit",
      "Sistem hidrolik sensor beban dengan aliran proporsional",
      "Kabin ergonomis ber-AC yang nyaman dengan kontrol intuitif",
      "Engine Cat C2.4 DI yang tangguh dan mudah dirawat",
      "Pisau dozer terintegrasi dengan fungsi float",
      "Opsi lengan ekskavasi panjang untuk jangkauan maksimal",
    ],
    enFeatures: [
      "Compact radius design for tight spaces",
      "Proportional load-sensing hydraulics",
      "Ergonomic air-conditioned cab with intuitive controls",
      "Rugged and easy-to-maintain Cat C2.4 DI engine",
      "Integrated dozer blade with float function",
      "Long stick option for maximum digging reach",
    ],
    idBenefits: [
      "Aksesibilitas luar biasa di proyek jalan kota dan perumahan",
      "Pemakaian bahan bakar hemat dengan mode Auto Idle",
      "Kemudahan servis harian melalui panel pintu yang lebar",
    ],
    enBenefits: [
      "Outstanding accessibility in urban utility and housing projects",
      "Fuel savings via Auto Idle features",
      "Simple daily service access through wide steel doors",
    ],
    specs: [
      { k: "Operating Weight", v: "5,400 kg" },
      { k: "Engine Model", v: "Cat C2.4 DI" },
      { k: "Net Power - ISO 9249", v: "49.6 HP (37 kW)" },
      { k: "Bucket Capacity", v: "0.22 m³" },
      { k: "Travel Speed - High", v: "4.5 km/h" },
    ],
    faq: [
      {
        idQ: "Apakah unit ini tersedia untuk rental?",
        enQ: "Is this unit available for rental?",
        idA: "Ya, Cat 305.5E2 merupakan salah satu unit terpopuler di Cat Rental Store kami dengan skema sewa harian, mingguan, atau bulanan.",
        enA: "Yes, the Cat 305.5E2 is one of our most popular units at the Cat Rental Store, with daily, weekly, or monthly rental options.",
      },
    ],
  },
  {
    slug: "cat-120",
    name: "Cat 120",
    category: "Grader",
    idOverview:
      "Motor Grader Cat 120 menghadirkan efisiensi bahan bakar luar biasa dengan transmisi direct-drive terbaru, opsi kontrol joystick yang ergonomis, dan kabin yang dirancang untuk produktivitas operator maksimal.",
    enOverview:
      "The Cat 120 Motor Grader brings outstanding fuel efficiency with the latest direct-drive transmission, ergonomic joystick control options, and a cab designed for maximum operator productivity.",
    idFeatures: [
      "Transmisi direct drive dengan power shift",
      "Opsi kontrol joystick modern atau tuas mekanik tradisional",
      "Sistem teknologi Cat Grade terintegrasi",
      "Kabin pandangan luas bersertifikat ROPS/FOPS",
      "Akses servis dari permukaan tanah yang cepat",
      "Moldboard lebar 3.7 meter dengan pelindung gesekan",
    ],
    enFeatures: [
      "Direct drive power shift transmission",
      "Modern joystick control or traditional mechanical lever options",
      "Integrated Cat Grade guidance technology",
      "Wide-visibility ROPS/FOPS certified cab",
      "Quick ground-level maintenance access",
      "3.7-meter wide moldboard with wear inserts",
    ],
    idBenefits: [
      "Konsumsi bahan bakar hemat hingga 15% dengan Eco Mode",
      "Presisi perataan tanah tingkat tinggi untuk konstruksi jalan",
      "Biaya operasional rendah dengan struktur komponen tahan lama",
    ],
    enBenefits: [
      "Up to 15% fuel savings with Eco Mode",
      "High-precision grading control for roadworks",
      "Low operating costs through durable component structures",
    ],
    specs: [
      { k: "Operating Weight", v: "15,895 kg" },
      { k: "Engine Model", v: "Cat C7.1" },
      { k: "Net Power", v: "139 HP (104 kW)" },
      { k: "Blade Width", v: "3.7 m (12 ft)" },
      { k: "Turning Radius", v: "7.4 m" },
    ],
    faq: [
      {
        idQ: "Apakah teknologi Cat Grade sudah terpasang?",
        enQ: "Is Cat Grade technology pre-installed?",
        idA: "Unit ini siap menerima pemasangan (Grade-Ready) dan opsi pemasangan penuh dapat dikonsultasikan dengan tim teknologi kami.",
        enA: "The unit is Grade-Ready, and full technology integration options can be requested through our technology specialists.",
      },
    ],
  },
  {
    slug: "cat-140-gc",
    name: "Cat 140 GC",
    category: "Grader",
    idOverview:
      "Cat 140 GC menggabungkan performa andalan motor grader Caterpillar legendaris dengan kontrol mekanis tuas mekanis yang familiar, kabin yang nyaman, dan mesin Cat C7.1 yang andal untuk perawatan jalan tanah dan konstruksi umum.",
    enOverview:
      "The Cat 140 GC combines the reliable performance of legendary Caterpillar motor graders with familiar mechanical lever controls, a comfortable cab, and a reliable Cat C7.1 engine for dirt road maintenance and general construction.",
    idFeatures: [
      "Tuas mekanis konvensional yang andal dan mudah dikuasai",
      "Engine diesel Cat C7.1 bertenaga tinggi dan efisien",
      "Sistem hidrolik proporsional aliran seimbang",
      "Struktur rangka drawbar-circle-moldboard kokoh",
      "Moldboard lebar 4.2 meter tahan abrasi",
      "Titik servis terpusat untuk perawatan harian cepat",
    ],
    enFeatures: [
      "Reliable and easy-to-learn conventional mechanical levers",
      "High-power and efficient Cat C7.1 diesel engine",
      "Balanced proportional hydraulic system",
      "Robust drawbar-circle-moldboard structure",
      "4.2-meter wide wear-resistant moldboard",
      "Grouped service points for quick daily maintenance",
    ],
    idBenefits: [
      "Kemudahan pengoperasian bagi operator berpengalaman tuas",
      "Gaya dorong moldboard sangat kuat untuk memotong tanah keras",
      "Biaya pemeliharaan murah dengan komponen mekanis sederhana",
    ],
    enBenefits: [
      "Easy operation for operators experienced with traditional levers",
      "Strong moldboard drawbar pull for cutting hard ground",
      "Low maintenance costs via simplified mechanical components",
    ],
    specs: [
      { k: "Operating Weight", v: "19,100 kg" },
      { k: "Engine Model", v: "Cat C7.1 ACERT" },
      { k: "Net Power", v: "196 HP (146 kW)" },
      { k: "Blade Width", v: "4.2 m (14 ft)" },
      { k: "Overall Length", v: "9.2 m" },
    ],
    faq: [
      {
        idQ: "Apa keuntungan membeli unit Used (bekas) Cat 140 GC di Trakindo?",
        enQ: "What are the benefits of buying a Used Cat 140 GC at Trakindo?",
        idA: "Unit bekas kami telah melalui inspeksi ketat 140 titik oleh teknisi tersertifikasi Caterpillar dan dilengkapi dengan garansi suku cadang.",
        enA: "Our used units undergo a strict 140-point inspection by certified Caterpillar technicians and come with a parts warranty.",
      },
    ],
  },
  {
    slug: "cat-de33gc",
    name: "Cat DE33GC",
    category: "Genset",
    idOverview:
      "Genset diesel Cat DE33GC menghasilkan pasokan daya 33 kVA yang andal untuk aplikasi siaga (standby) maupun utama (prime) dengan desain kompak, kabin kedap suara outdoor, dan efisiensi solar yang tinggi.",
    enOverview:
      "The Cat DE33GC diesel generator set delivers reliable 33 kVA power supply for standby and prime applications, featuring a compact design, soundproof outdoor enclosure, and high fuel efficiency.",
    idFeatures: [
      "Engine diesel Cat C3.3 silinder segaris yang tangguh",
      "Alternator frame LC berkualitas tinggi dengan proteksi IP23",
      "Panel kontrol digital GCCP 1.1 yang mudah dioperasikan",
      "Enclosure outdoor kedap suara tahan karat & cuaca buruk",
      "Tangki solar harian terintegrasi di dasar unit",
      "Kepatuhan penuh standar keselamatan kelistrikan K3",
    ],
    enFeatures: [
      "Tough Cat C3.3 in-line diesel engine",
      "High-quality LC frame alternator with IP23 protection",
      "Easy-to-use digital GCCP 1.1 control panel",
      "Corrosion and weather-resistant soundproof enclosure",
      "Integrated base-frame daily fuel tank",
      "Full compliance with K3 electrical safety standards",
    ],
    idBenefits: [
      "Keandalan pasokan listrik darurat 24 jam tanpa henti",
      "Dimensi kompak menghemat tempat pemasangan",
      "Layanan servis berkala dan ketersediaan suku cadang resmi Trakindo",
    ],
    enBenefits: [
      "Reliable 24-hour backup power supply",
      "Compact footprint saves installation space",
      "Routine service and official spare parts support from Trakindo",
    ],
    specs: [
      { k: "Standby Power Rating", v: "33.0 kVA (26.4 kW)" },
      { k: "Prime Power Rating", v: "30.0 kVA (24.0 kW)" },
      { k: "Engine Model", v: "Cat C3.3" },
      { k: "Voltage / Frequency", v: "400V / 50Hz" },
      { k: "Fuel Consumption @ 100% Prime", v: "7.1 L/hr" },
    ],
    faq: [
      {
        idQ: "Apakah Trakindo menyediakan jasa instalasi genset?",
        enQ: "Does Trakindo provide generator installation services?",
        idA: "Ya, kami menyediakan paket instalasi lengkap termasuk uji beban (load test), pembuatan rumah genset (genset room), dan kabel daya.",
        enA: "Yes, we provide complete installation packages including load testing, genset room fabrication, and cabling.",
      },
    ],
  },
  {
    slug: "cat-de150gc",
    name: "Cat DE150GC",
    category: "Genset",
    idOverview:
      "Genset diesel Cat DE150GC menawarkan daya 150 kVA yang andal untuk industri manufaktur, pertambangan, dan konstruksi. Didesain untuk beroperasi pada beban penuh berkelanjutan dengan standar emisi global Caterpillar.",
    enOverview:
      "The Cat DE150GC diesel generator set offers reliable 150 kVA power for manufacturing, mining, and construction industries. Built to operate under continuous full load with global emissions compliance.",
    idFeatures: [
      "Engine diesel turbo Cat C7.1 ACERT bertenaga besar",
      "Alternator M-frame dengan regulasi tegangan otomatis",
      "Panel kontrol digital GCCP dengan monitoring jarak jauh",
      "Sistem kelistrikan starter baterai 24V",
      "Enclosure logam cuaca & suara yang sangat kokoh",
      "Sensor perlindungan suhu air, oli, dan kecepatan putaran",
    ],
    enFeatures: [
      "Powerful Cat C7.1 ACERT turbocharged diesel engine",
      "M-frame alternator with automatic voltage regulation",
      "Digital GCCP control panel with remote monitoring capabilities",
      "24V battery starting electrical system",
      "Robust weather and sound protective steel enclosure",
      "Water temperature, oil pressure, and overspeed safety sensors",
    ],
    idBenefits: [
      "Performa andal untuk menahan beban kejut listrik mesin besar",
      "Konsumsi solar yang sangat efisien di kelasnya",
      "Garansi resmi Caterpillar didukung oleh jaringan servis Trakindo",
    ],
    enBenefits: [
      "Reliable performance under high motor block loads",
      "Highly fuel-efficient operational costs",
      "Official Caterpillar warranty supported by Trakindo's network",
    ],
    specs: [
      { k: "Standby Power Rating", v: "150 kVA (120 kW)" },
      { k: "Prime Power Rating", v: "135 kVA (108 kW)" },
      { k: "Engine Model", v: "Cat C7.1 ACERT" },
      { k: "Voltage / Frequency", v: "400V / 50Hz" },
      { k: "Fuel Consumption @ 100% Prime", v: "30.4 L/hr" },
    ],
    faq: [
      {
        idQ: "Dapatkah genset ini dipantau dari jarak jauh?",
        enQ: "Can this generator be monitored remotely?",
        idA: "Ya, dengan integrasi Cat Product Link™ dan panel GCCP, Anda dapat memantau status genset melalui aplikasi desktop atau mobile.",
        enA: "Yes, with Cat Product Link™ and GCCP panel integration, you can monitor generator status via desktop or mobile applications.",
      },
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
        { title: `${p.name} — Alat Berat ${p.category} Caterpillar — Trakindo Utama` },
        { name: "description", content: p.enOverview },
        { property: "og:title", content: `${p.name} — Trakindo Utama` },
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
            brand: { "@type": "Brand", name: "Caterpillar" },
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
            <Eyebrow>{t("FITUR UTAMA", "KEY FEATURES")}</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-[-0.025em]">
              {t("Kelebihan alat berat.", "Equipment advantages.")}
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
                <span className="text-surface/70">
                  {t("MANFAAT INVESTASI", "INVESTMENT BENEFITS")}
                </span>
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
              {t("Spesifikasi unit.", "Unit specifications.")}
            </h2>
            <dl className="mt-10 divide-y divide-line border-y border-line">
              {p.specs.map((s: { k: string; v: string }) => (
                <div key={s.k} className="grid grid-cols-2 py-4 text-[15px]">
                  <dt className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink-soft">
                    {s.k}
                  </dt>
                  <dd className="text-ink font-semibold">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-5">
            <Eyebrow>{t("BROSUR PRODUK", "PRODUCT BROCHURES")}</Eyebrow>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {[
                `${p.name} — Technical Datasheet`,
                `${p.name} — Operation Manual Guide`,
                `${p.name} — Product Brochure Catalogs`,
              ].map((d) => (
                <li key={d} className="flex items-center justify-between py-4">
                  <span className="text-[15px] text-ink">{d}</span>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(t("Mengunduh brosur unit: " + d, "Downloading unit brochure: " + d));
                    }}
                    className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink hover-underline cursor-pointer"
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
            {t("Pertanyaan sering diajukan.", "Frequently asked questions.")}
          </h2>
          <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
            {p.faq.map((q: { idQ: string; enQ: string; idA: string; enA: string }, i: number) => (
              <details key={i} className="group bg-background p-8 border border-line">
                <summary className="flex cursor-pointer items-baseline justify-between gap-6 text-[18px] font-bold tracking-[-0.01em]">
                  <span>{t(q.idQ, q.enQ)}</span>
                  <span className="font-mono text-[11px] text-ink-soft group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{t(q.idA, q.enA)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Request Quote form */}
      <section className="bg-surface-alt">
        <div className="container-ssh grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>{t("MINTA PENAWARAN", "REQUEST QUOTE")}</Eyebrow>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-[-0.025em]">
              {t(`Ajukan kuotasi harga untuk ${p.name}.`, `Request a quote for ${p.name}.`)}
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-soft">
              {t(
                "Tim sales spesialis Trakindo akan menyiapkan proposal penawaran harga terbaik beserta skema pembiayaan/sewa yang sesuai untuk bisnis Anda.",
                "Trakindo's specialist sales team will prepare the best pricing proposal along with the appropriate financing/rental scheme for your business.",
              )}
            </p>
          </div>
          <div className="lg:col-span-7" id="quote-form-section">
            <LeadForm variant="consultation" preFilledInterest={`${p.name} Quote Request`} />
          </div>
        </div>
      </section>
    </>
  );
}
