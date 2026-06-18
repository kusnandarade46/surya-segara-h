import { createFileRoute, notFound } from "@tanstack/react-router";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { useLang } from "@/i18n";
import { Eyebrow, PageHero, PrimaryCTA } from "@/components/site/ui";
import oilgasImg from "@/assets/industry-oilgas.jpg";
import petroImg from "@/assets/industry-petrochemical.jpg";
import refineryImg from "@/assets/industry-refinery.jpg";
import miningImg from "@/assets/industry-mining.jpg";
import powerImg from "@/assets/industry-power.jpg";

type Industry = {
  slug: string;
  idName: string;
  enName: string;
  img: string;
  idIntro: string;
  enIntro: string;
  challenges: { idQ: string; enQ: string }[];
  risks: { idQ: string; enQ: string }[];
  solutions: { idQ: string; enQ: string }[];
  idCase: string;
  enCase: string;
};

const INDUSTRIES: Industry[] = [
  {
    slug: "mining",
    idName: "Pertambangan",
    enName: "Mining",
    img: miningImg,
    idIntro:
      "Operasi pertambangan batubara dan mineral membutuhkan keandalan armada alat berat raksasa dan pemantauan kondisi mesin secara real-time untuk memastikan produktivitas 24 jam sehari.",
    enIntro:
      "Coal and mineral mining operations require the extreme reliability of massive heavy equipment and real-time machine condition monitoring to secure 24/7 productivity.",
    challenges: [
      {
        idQ: "Beban kerja ekstrim nonstop 24 jam sehari",
        enQ: "Extreme nonstop 24-hour daily workload",
      },
      {
        idQ: "Kondisi jalan tambang berdebu dan berlumpur",
        enQ: "Harsh, dusty, and muddy haul road conditions",
      },
      {
        idQ: "Tuntutan menekan biaya operasional per ton bahan tambang",
        enQ: "Strict demands to lower operating cost-per-ton",
      },
    ],
    risks: [
      {
        idQ: "Kerugian finansial masif akibat downtime alat berat",
        enQ: "Massive financial losses due to equipment downtime",
      },
      {
        idQ: "Kecelakaan kerja akibat area kerja berbahaya",
        enQ: "Workplace accidents in high-risk operating environments",
      },
      {
        idQ: "Kerusakan dini komponen utama mesin",
        enQ: "Premature failure of major engine components",
      },
    ],
    solutions: [
      {
        idQ: "Cat MineStar™ untuk kontrol armada otomatis",
        enQ: "Cat MineStar™ for automated fleet management",
      },
      {
        idQ: "Excavator tambang raksasa (Cat 349 / Cat 395)",
        enQ: "Large mining excavators (Cat 349 / Cat 395)",
      },
      {
        idQ: "Layanan analisis pelumas berkala (S·O·S℠)",
        enQ: "Scheduled Oil Sampling (S·O·S℠) fluid analysis",
      },
      {
        idQ: "Kontrak pemeliharaan CVA untuk kepastian suku cadang",
        enQ: "Customer Value Agreements (CVA) for parts availability",
      },
    ],
    idCase:
      "Perusahaan tambang batu bara meningkatkan produktivitas armada 18% dalam 12 bulan menggunakan Cat MineStar™.",
    enCase:
      "A coal mining company increased fleet productivity by 18% in 12 months using Cat MineStar™.",
  },
  {
    slug: "construction",
    idName: "Konstruksi",
    enName: "Construction",
    img: refineryImg,
    idIntro:
      "Proyek pembangunan infrastruktur jalan tol, jembatan, dan perumahan menuntut ketepatan waktu pengerjaan, efisiensi konsumsi bahan bakar solar, dan keluwesan rental.",
    enIntro:
      "Highway, bridge, and housing infrastructure projects demand strict project scheduling, fuel efficiency, and flexible rental options.",
    challenges: [
      {
        idQ: "Tenggat waktu penyelesaian proyek yang sangat ketat",
        enQ: "Highly aggressive project completion deadlines",
      },
      {
        idQ: "Lokasi kerja di area perkotaan yang sempit dan padat",
        enQ: "Tight work locations in crowded urban areas",
      },
      {
        idQ: "Variabilitas jenis material tanah dan cuaca hujan",
        enQ: "Soil/material variability and wet weather conditions",
      },
    ],
    risks: [
      {
        idQ: "Denda keterlambatan penyerahan proyek pembangunan",
        enQ: "Late delivery fines from project owners",
      },
      {
        idQ: "Biaya solar yang membengkak karena idle time mesin",
        enQ: "Inflated fuel costs due to high machine idle time",
      },
      {
        idQ: "Kerusakan mesin akibat keterlambatan servis berkala",
        enQ: "Machine failure due to neglected routine servicing",
      },
    ],
    solutions: [
      {
        idQ: "Excavator Cat 320 GC hemat solar hingga 20%",
        enQ: "Fuel-efficient Cat 320 GC (up to 20% fuel savings)",
      },
      {
        idQ: "Sewa unit cepat & fleksibel via Cat Rental Store",
        enQ: "Fast & flexible rentals via Cat Rental Store",
      },
      {
        idQ: "Teknologi perataan tanah presisi Cat Grade",
        enQ: "High-precision Cat Grade earth leveling technology",
      },
      {
        idQ: "Layanan perbaikan darurat cepat oleh mekanik Trakindo",
        enQ: "Rapid emergency breakdown service by Trakindo mechanics",
      },
    ],
    idCase:
      "Kontraktor pembangunan jalan tol menghemat 15 hari masa kerja penggalian dengan menggunakan Cat 320 GC.",
    enCase: "A toll road contractor saved 15 working days of excavation using Cat 320 GC.",
  },
  {
    slug: "forestry-agriculture",
    idName: "Kehutanan & Perkebunan",
    enName: "Forestry & Agriculture",
    img: petroImg,
    idIntro:
      "Mekanisasi industri kelapa sawit, perkebunan tebu, dan konsesi kehutanan membutuhkan alat berat serbaguna dengan attachment khusus untuk pembersihan lahan dan pemanenan di medan lunak.",
    enIntro:
      "Palm oil, sugarcane, and forestry industrial mechanization require highly versatile equipment with specialized attachments for land preparation and harvesting in soft terrains.",
    challenges: [
      {
        idQ: "Medan tanah gambut basah dan rawa berlumpur",
        enQ: "Wet peatlands and muddy swamp terrains",
      },
      {
        idQ: "Kebutuhan attachment serbaguna (grapple, mulcher)",
        enQ: "Need for diverse attachments (grapples, mulchers)",
      },
      {
        idQ: "Akses logistik servis di pedalaman perkebunan",
        enQ: "Remote access for maintenance support logistics",
      },
    ],
    risks: [
      {
        idQ: "Unit amblas atau slip di tanah gambut lunak",
        enQ: "Units sinking or slipping in soft peat soils",
      },
      {
        idQ: "Overheating mesin akibat tumpukan ranting kayu",
        enQ: "Engine overheating caused by forest debris buildup",
      },
      {
        idQ: "Terhambatnya panen karena kerusakan unit alat berat",
        enQ: "Harvest delays due to critical machine breakdowns",
      },
    ],
    solutions: [
      {
        idQ: "Mini Excavator Cat 305.5E2 lincah di area sempit",
        enQ: "Agile Cat 305.5E2 mini excavators for tight areas",
      },
      {
        idQ: "Undercarriage track shoe khusus rawa yang lebar",
        enQ: "Wide swamp track shoe undercarriage options",
      },
      {
        idQ: "Attachment grapple dan mulcher resmi Caterpillar",
        enQ: "Official Caterpillar forestry grapples and mulchers",
      },
      {
        idQ: "Dukungan mekanik mobile Trakindo di pedalaman",
        enQ: "Trakindo's mobile field service support in remote estates",
      },
    ],
    idCase:
      "Perkebunan kelapa sawit di Sumatra memangkas biaya pembersihan lahan 22% menggunakan mini excavator Cat.",
    enCase:
      "A palm oil plantation in Sumatra cut land prep costs by 22% using Cat mini excavators.",
  },
  {
    slug: "power-generation",
    idName: "Pembangkit Listrik",
    enName: "Power Generation",
    img: powerImg,
    idIntro:
      "Ketersediaan suplai daya listrik mandiri dan backup power darurat sangat penting untuk menjaga kelangsungan operasional pabrik manufaktur, rumah sakit rujukan, dan pusat data.",
    enIntro:
      "Autonomous prime electricity supply and standby emergency backup power are vital to secure manufacturing plants, referral hospitals, and data centers.",
    challenges: [
      {
        idQ: "Kebutuhan toleransi beban kejut listrik dinamo besar",
        enQ: "High transient block-load tolerance requirements",
      },
      {
        idQ: "Respons start-up cepat genset darurat (< 10 detik)",
        enQ: "Ultra-fast emergency genset start-up speed (< 10 seconds)",
      },
      {
        idQ: "Kepatuhan emisi gas buang dan kebisingan suara kota",
        enQ: "Strict urban exhaust emission and sound decibel controls",
      },
    ],
    risks: [
      {
        idQ: "Kerusakan produk/mesin pabrik akibat blackout listrik",
        enQ: "Factory product/machinery damage due to power blackout",
      },
      {
        idQ: "Hilangnya data penting server di data center",
        enQ: "Critical server data loss in high-tech data centers",
      },
      {
        idQ: "Biaya operasional solar melonjak tinggi",
        enQ: "Inflated fuel operational costs during prolonged power outages",
      },
    ],
    solutions: [
      {
        idQ: "Genset diesel Cat DE33GC & DE150GC andal",
        enQ: "Reliable Cat DE33GC & DE150GC diesel generators",
      },
      {
        idQ: "Sistem otomatisasi switch ATS/AMF darurat",
        enQ: "Automated ATS/AMF emergency switch systems",
      },
      {
        idQ: "Genset berbahan bakar gas Cat efisiensi tinggi",
        enQ: "High-efficiency Caterpillar gas generator sets",
      },
      {
        idQ: "Kontrak pemeliharaan kelistrikan preventif Trakindo",
        enQ: "Trakindo's preventive electrical maintenance agreements",
      },
    ],
    idCase:
      "Rumah sakit rujukan di Jakarta menjamin kelancaran ruang operasi kritis dengan genset backup Cat DE150GC.",
    enCase:
      "A major referral hospital in Jakarta secured critical operating rooms with Cat DE150GC backup genset.",
  },
];

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const i = INDUSTRIES.find((x) => x.slug === params.slug);
    if (!i) throw notFound();
    return i;
  },
  head: ({ loaderData }) => {
    const i = loaderData!;
    return {
      meta: [
        { title: `Solusi Alat Berat Cat Industri ${i.enName} — Trakindo Utama` },
        { name: "description", content: i.enIntro },
        { property: "og:title", content: `${i.enName} — Trakindo Utama` },
        { property: "og:description", content: i.enIntro },
        { property: "og:url", content: `/industries/${i.slug}` },
      ],
      links: [{ rel: "canonical", href: `/industries/${i.slug}` }],
    };
  },
  component: IndustryDetail,
});

function IndustryDetail() {
  const i = Route.useLoaderData();
  const { t } = useLang();

  const Col = ({
    title,
    items,
    icon,
  }: {
    title: string;
    items: { idQ: string; enQ: string }[];
    icon?: "warn" | "ok";
  }) => (
    <div>
      <Eyebrow>{title}</Eyebrow>
      <ul className="mt-6 space-y-4">
        {items.map((x) => (
          <li key={x.enQ} className="flex items-start gap-3 border-t border-line pt-4">
            {icon === "warn" ? (
              <AlertTriangle className="mt-0.5 h-5 w-5 flex-none text-brand" strokeWidth={1.5} />
            ) : (
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand" strokeWidth={1.5} />
            )}
            <span className="text-[15px] text-ink">{t(x.idQ, x.enQ)}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <section className="relative border-b border-line bg-secondary text-surface">
        <div className="container-ssh grid gap-10 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="eyebrow text-brand-foreground/80">
              {t("APLIKASI INDUSTRI", "INDUSTRIAL APPLICATION")}
            </div>
            <h1 className="mt-5 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.98] tracking-[-0.03em]">
              {t(i.idName, i.enName)}
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-surface/75">
              {t(i.idIntro, i.enIntro)}
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden bg-background">
              <img
                src={i.img}
                alt={i.enName}
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-cover animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-background">
        <div className="container-ssh grid gap-12 py-20 md:py-28 lg:grid-cols-3">
          <Col title={t("TANTANGAN OPERASIONAL", "OPERATIONAL CHALLENGES")} items={i.challenges} />
          <Col title={t("RISIKO DOWNTIME", "DOWNTIME RISKS")} items={i.risks} icon="warn" />
          <Col title={t("SOLUSI TRAKINDO", "TRAKINDO SOLUTIONS")} items={i.solutions} />
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="container-ssh grid gap-10 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>{t("STUDI KASUS SUKSES", "SUCCESS CASE STUDY")}</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-[-0.025em]">
              {t(i.idCase, i.enCase)}
            </h2>
          </div>
          <div className="flex flex-col items-start justify-end lg:col-span-5">
            <p className="text-[16px] leading-relaxed text-ink-soft">
              {t(
                "Hubungi perwakilan spesialis industri kami untuk menganalisis armada alat berat Cat yang ideal demi meningkatkan return of investment (ROI) proyek Anda.",
                "Contact our industry specialists to analyze the ideal Cat heavy equipment fleet to optimize your project's ROI.",
              )}
            </p>
            <div className="mt-6">
              <PrimaryCTA to="/contact">
                {t("Diskusi dengan Spesialis", "Talk to a Specialist")}
              </PrimaryCTA>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
