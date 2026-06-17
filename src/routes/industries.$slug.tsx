import { createFileRoute, notFound } from "@tanstack/react-router";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { useLang } from "@/i18n";
import { Eyebrow, PageHero, PrimaryCTA } from "@/components/site/ui";
import oilgasImg from "@/assets/industry-oilgas.jpg";
import petroImg from "@/assets/industry-petrochemical.jpg";
import refineryImg from "@/assets/industry-refinery.jpg";
import lngImg from "@/assets/industry-lng.jpg";
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
    slug: "oil-gas",
    idName: "Minyak & Gas",
    enName: "Oil & Gas",
    img: oilgasImg,
    idIntro: "Operasi hulu, midstream, dan offshore membutuhkan visibilitas paparan gas real-time dan rencana darurat yang dapat dieksekusi.",
    enIntro: "Upstream, midstream and offshore operations require real-time gas exposure visibility and executable emergency response plans.",
    challenges: [
      { idQ: "Lingkungan kerja terpencil dan offshore", enQ: "Remote and offshore work environments" },
      { idQ: "Paparan H2S dan hidrokarbon kompleks", enQ: "Complex H2S and hydrocarbon exposure" },
      { idQ: "Kepatuhan regulasi yang ketat", enQ: "Strict regulatory compliance" },
    ],
    risks: [
      { idQ: "Pelepasan H2S yang tidak terdeteksi", enQ: "Undetected H2S releases" },
      { idQ: "Kebakaran dan ledakan", enQ: "Fire and explosion" },
      { idQ: "Insiden confined space entry", enQ: "Confined space entry incidents" },
    ],
    solutions: [
      { idQ: "Deteksi multi-gas portabel + tetap", enQ: "Portable + fixed multi-gas detection" },
      { idQ: "iNet® untuk visibilitas armada", enQ: "iNet® for fleet visibility" },
      { idQ: "SAFER One® untuk respons darurat", enQ: "SAFER One® for emergency response" },
      { idQ: "Pelatihan H2S dan confined space", enQ: "H2S and confined space training" },
    ],
    idCase: "Operator hulu mengurangi insiden paparan 38% dalam 12 bulan setelah menggelar iNet®.",
    enCase: "An upstream operator reduced exposure incidents by 38% in 12 months after deploying iNet®.",
  },
  {
    slug: "petrochemical",
    idName: "Petrokimia",
    enName: "Petrochemical",
    img: petroImg,
    idIntro: "Kompleks petrokimia menangani bahan kimia berbahaya yang memerlukan pemantauan kontinu dan respons cepat.",
    enIntro: "Petrochemical complexes handle hazardous chemicals that require continuous monitoring and rapid response.",
    challenges: [
      { idQ: "Inventaris bahan kimia yang besar", enQ: "Large hazardous chemical inventory" },
      { idQ: "Banyak titik koneksi dan flanges", enQ: "Numerous connection points and flanges" },
      { idQ: "Personel dan kontraktor yang banyak", enQ: "Large workforce and contractor base" },
    ],
    risks: [
      { idQ: "Kebocoran VOC yang tidak terdeteksi", enQ: "Undetected VOC leaks" },
      { idQ: "Insiden penanganan kimia", enQ: "Chemical handling incidents" },
      { idQ: "Insiden pemeliharaan/turnaround", enQ: "Maintenance and turnaround incidents" },
    ],
    solutions: [
      { idQ: "PID untuk deteksi VOC", enQ: "PID-based VOC detection" },
      { idQ: "Monitor area Radius BZ1", enQ: "Radius BZ1 area monitors" },
      { idQ: "Pemodelan dispersi SAFER One®", enQ: "SAFER One® dispersion modeling" },
      { idQ: "Audit dan konsultasi K3", enQ: "Safety audits and consulting" },
    ],
    idCase: "Pabrik petrokimia memangkas waktu respons 55% setelah integrasi sensor ke SAFER One®.",
    enCase: "A petrochemical plant cut response time by 55% after integrating sensors into SAFER One®.",
  },
  {
    slug: "refinery",
    idName: "Kilang",
    enName: "Refinery",
    img: refineryImg,
    idIntro: "Kilang membutuhkan pemantauan H2S dan hidrokarbon yang andal di seluruh unit proses.",
    enIntro: "Refineries need reliable H2S and hydrocarbon monitoring across every process unit.",
    challenges: [
      { idQ: "Banyak unit proses simultan", enQ: "Many simultaneous process units" },
      { idQ: "Shutdown dan turnaround besar", enQ: "Large shutdowns and turnarounds" },
      { idQ: "Pekerja dan kontraktor bercampur", enQ: "Mixed workforce and contractors" },
    ],
    risks: [
      { idQ: "Paparan H2S di unit hydrotreater", enQ: "H2S exposure at hydrotreater units" },
      { idQ: "Kebocoran fugitive emissions", enQ: "Fugitive emission leaks" },
      { idQ: "Insiden hot work", enQ: "Hot work incidents" },
    ],
    solutions: [
      { idQ: "Program H2S menyeluruh", enQ: "Comprehensive H2S program" },
      { idQ: "Tango TX1 untuk paparan personal", enQ: "Tango TX1 for personal exposure" },
      { idQ: "iNet® untuk pelaporan kepatuhan", enQ: "iNet® for compliance reporting" },
      { idQ: "Layanan kalibrasi tersertifikasi", enQ: "Certified calibration services" },
    ],
    idCase: "Kilang mengurangi false alarm 47% setelah migrasi ke Tango TX1 DualSense™.",
    enCase: "A refinery reduced false alarms by 47% after migrating to Tango TX1 DualSense™.",
  },
  {
    slug: "lng",
    idName: "LNG",
    enName: "LNG",
    img: lngImg,
    idIntro: "Terminal LNG menuntut deteksi kebocoran metana yang sensitif dan pemodelan dispersi yang akurat.",
    enIntro: "LNG terminals demand sensitive methane leak detection and accurate dispersion modeling.",
    challenges: [
      { idQ: "Kriogenik dan tekanan tinggi", enQ: "Cryogenic and high-pressure operations" },
      { idQ: "Risiko pelepasan metana", enQ: "Methane release risk" },
      { idQ: "Operasi marine loading", enQ: "Marine loading operations" },
    ],
    risks: [
      { idQ: "Vapor cloud explosion", enQ: "Vapor cloud explosion" },
      { idQ: "Asphyxiation di area tertutup", enQ: "Asphyxiation in enclosed areas" },
      { idQ: "Insiden marine loading", enQ: "Marine loading incidents" },
    ],
    solutions: [
      { idQ: "Detektor IR untuk metana", enQ: "IR detectors for methane" },
      { idQ: "SAFER One® untuk pemodelan dispersi", enQ: "SAFER One® for dispersion modeling" },
      { idQ: "Radius BZ1 untuk zona berbahaya", enQ: "Radius BZ1 for hazard zones" },
      { idQ: "Latihan tanggap darurat berkala", enQ: "Regular emergency response drills" },
    ],
    idCase: "Operator LNG mengurangi insiden 42% setelah implementasi iNet® dan SAFER One®.",
    enCase: "An LNG operator reduced incidents by 42% after deploying iNet® and SAFER One®.",
  },
  {
    slug: "mining",
    idName: "Pertambangan",
    enName: "Mining",
    img: miningImg,
    idIntro: "Tambang terbuka dan bawah tanah memerlukan visibilitas keselamatan pekerja yang berkelanjutan.",
    enIntro: "Open-pit and underground mines require continuous worker safety visibility.",
    challenges: [
      { idQ: "Lingkungan berdebu dan keras", enQ: "Dusty and harsh environments" },
      { idQ: "Pekerja jarak jauh dan terisolasi", enQ: "Remote and isolated workers" },
      { idQ: "Akumulasi gas di bawah tanah", enQ: "Underground gas accumulation" },
    ],
    risks: [
      { idQ: "Paparan CO dan NO2", enQ: "CO and NO2 exposure" },
      { idQ: "Kekurangan oksigen", enQ: "Oxygen deficiency" },
      { idQ: "Insiden man-down", enQ: "Man-down incidents" },
    ],
    solutions: [
      { idQ: "Ventis Pro5 dengan LENS™ mesh", enQ: "Ventis Pro5 with LENS™ mesh" },
      { idQ: "iNet® untuk lokasi pekerja", enQ: "iNet® for worker location" },
      { idQ: "MX6 iBrid untuk confined space", enQ: "MX6 iBrid for confined space" },
      { idQ: "Pelatihan keselamatan tambang", enQ: "Mining safety training" },
    ],
    idCase: "Tambang batubara meningkatkan kepatuhan paparan ke 99,1% dalam 6 bulan.",
    enCase: "A coal mine raised exposure compliance to 99.1% within 6 months.",
  },
  {
    slug: "manufacturing",
    idName: "Manufaktur",
    enName: "Manufacturing",
    img: powerImg,
    idIntro: "Fasilitas manufaktur dan pembangkit listrik menggabungkan banyak risiko paparan dan kepatuhan.",
    enIntro: "Manufacturing and power generation facilities combine multiple exposure and compliance risks.",
    challenges: [
      { idQ: "Banyak titik proses dan utilitas", enQ: "Many process and utility points" },
      { idQ: "Kepatuhan ESH internasional", enQ: "International EHS compliance" },
      { idQ: "Confined space entry rutin", enQ: "Routine confined space entry" },
    ],
    risks: [
      { idQ: "Paparan amonia atau klorin", enQ: "Ammonia or chlorine exposure" },
      { idQ: "Insiden boiler/utilitas", enQ: "Boiler/utility incidents" },
      { idQ: "Insiden kontraktor", enQ: "Contractor incidents" },
    ],
    solutions: [
      { idQ: "Deteksi gas portabel + tetap", enQ: "Portable + fixed gas detection" },
      { idQ: "iNet® untuk standardisasi armada", enQ: "iNet® for fleet standardization" },
      { idQ: "Konsultasi K3 industri", enQ: "Industrial safety consulting" },
      { idQ: "Audit kepatuhan internal", enQ: "Internal compliance audits" },
    ],
    idCase: "Pabrik manufaktur menstandarisasi 600+ detektor lewat iNet® dalam 3 bulan.",
    enCase: "A manufacturing plant standardized 600+ detectors via iNet® in 3 months.",
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
        { title: `${i.enName} Safety Solutions — SSH Company` },
        { name: "description", content: i.enIntro },
        { property: "og:title", content: `${i.enName} — SSH Company` },
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

  const Col = ({ title, items, icon }: { title: string; items: { idQ: string; enQ: string }[]; icon?: "warn" | "ok" }) => (
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
            <div className="eyebrow text-brand-foreground/80">{t("INDUSTRI", "INDUSTRY")}</div>
            <h1 className="mt-5 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.98] tracking-[-0.03em]">
              {t(i.idName, i.enName)}
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-surface/75">
              {t(i.idIntro, i.enIntro)}
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden bg-background">
              <img src={i.img} alt={i.enName} loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-background">
        <div className="container-ssh grid gap-12 py-20 md:py-28 lg:grid-cols-3">
          <Col title={t("TANTANGAN", "CHALLENGES")} items={i.challenges} />
          <Col title={t("RISIKO KESELAMATAN", "SAFETY RISKS")} items={i.risks} icon="warn" />
          <Col title={t("SOLUSI SSH", "SSH SOLUTIONS")} items={i.solutions} />
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="container-ssh grid gap-10 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>{t("PREVIEW STUDI KASUS", "CASE STUDY PREVIEW")}</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-[-0.025em]">
              {t(i.idCase, i.enCase)}
            </h2>
          </div>
          <div className="flex flex-col items-start justify-end lg:col-span-5">
            <p className="text-[16px] leading-relaxed text-ink-soft">
              {t(
                "Diskusikan kasus penggunaan Anda dengan tim spesialis SSH untuk roadmap implementasi yang disesuaikan.",
                "Discuss your use case with the SSH specialist team for a tailored implementation roadmap.",
              )}
            </p>
            <div className="mt-6">
              <PrimaryCTA to="/contact">{t("Diskusi dengan Spesialis", "Talk to a Specialist")}</PrimaryCTA>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
