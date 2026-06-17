import { createFileRoute, notFound } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { useLang } from "@/i18n";
import { Eyebrow, PageHero, PrimaryCTA } from "@/components/site/ui";
import { LeadForm } from "@/components/site/LeadForm";

type Solution = {
  slug: string;
  idTitle: string;
  enTitle: string;
  idIntro: string;
  enIntro: string;
  idFeatures: string[];
  enFeatures: string[];
};

const SOLUTIONS: Solution[] = [
  {
    slug: "h2s",
    idTitle: "Layanan H2S",
    enTitle: "H2S Services",
    idIntro: "Program perlindungan H2S menyeluruh — dari pemantauan lapangan, pelatihan operator, hingga konsultasi kepatuhan.",
    enIntro: "A complete H2S protection program — from on-site monitoring and operator training to compliance consulting.",
    idFeatures: ["Pemantauan H2S 24/7 di lapangan", "Pelatihan operator bersertifikat", "Penyewaan peralatan deteksi", "Audit dan konsultasi kepatuhan", "Rencana respons darurat khusus H2S", "Penilaian risiko H2S menyeluruh"],
    enFeatures: ["On-site 24/7 H2S monitoring", "Certified operator training", "Detection equipment rental", "Compliance audits and consulting", "H2S-specific emergency response planning", "Comprehensive H2S risk assessment"],
  },
  {
    slug: "connected-safety",
    idTitle: "Connected Safety Solutions",
    enTitle: "Connected Safety Solutions",
    idIntro: "Visibilitas real-time terhadap setiap pekerja, perangkat, dan paparan — didukung oleh iNet®.",
    enIntro: "Real-time visibility into every worker, device, and exposure — powered by iNet®.",
    idFeatures: ["Lokasi pekerja real-time", "Manajemen armada perangkat", "Peringatan paparan otomatis", "Dasbor kepatuhan terpusat", "Integrasi dengan sistem SCADA", "Laporan insiden otomatis"],
    enFeatures: ["Real-time worker location", "Device fleet management", "Automatic exposure alerts", "Centralized compliance dashboard", "SCADA system integration", "Automated incident reporting"],
  },
  {
    slug: "emergency-response",
    idTitle: "Emergency Response Solutions",
    enTitle: "Emergency Response Solutions",
    idIntro: "Pemodelan, prediksi, dan eksekusi tanggap darurat dengan SAFER One® — platform yang dipercaya oleh operator kritis.",
    enIntro: "Modeling, prediction and execution of emergency response with SAFER One® — the platform trusted by mission-critical operators.",
    idFeatures: ["Pemodelan penyebaran gas dinamis", "Prediksi area dampak", "Manajemen sumber daya darurat", "Latihan dan simulasi darurat", "Integrasi sensor real-time", "Pelaporan pasca-insiden"],
    enFeatures: ["Dynamic gas dispersion modeling", "Impact area prediction", "Emergency resource management", "Drills and emergency simulations", "Real-time sensor integration", "Post-incident reporting"],
  },
  {
    slug: "gas-detection",
    idTitle: "Gas Detection Solutions",
    enTitle: "Gas Detection Solutions",
    idIntro: "Portofolio lengkap deteksi gas portabel dan tetap untuk setiap lingkungan berbahaya.",
    enIntro: "A complete portfolio of portable and fixed gas detection for every hazardous environment.",
    idFeatures: ["Deteksi multi-gas portabel", "Sistem deteksi gas tetap", "Sensor PID untuk VOC", "Sensor inframerah untuk hidrokarbon", "Kalibrasi dan bump test otomatis", "Layanan kalibrasi tersertifikasi"],
    enFeatures: ["Portable multi-gas detection", "Fixed gas detection systems", "PID sensors for VOCs", "Infrared sensors for hydrocarbons", "Automated calibration and bump testing", "Certified calibration services"],
  },
  {
    slug: "consulting",
    idTitle: "Industrial Safety Consulting",
    enTitle: "Industrial Safety Consulting",
    idIntro: "Praktisi keselamatan bersertifikat membantu merancang dan mengaudit program keselamatan Anda.",
    enIntro: "Certified safety practitioners help design and audit your safety program.",
    idFeatures: ["Penilaian risiko (HIRA / JSA)", "Desain program K3", "Audit kepatuhan internal", "Roadmap teknologi keselamatan", "Pendampingan implementasi", "Pelatihan kesadaran K3"],
    enFeatures: ["Risk assessment (HIRA / JSA)", "Safety program design", "Internal compliance audits", "Safety technology roadmap", "Implementation advisory", "Safety awareness training"],
  },
  {
    slug: "calibration-maintenance",
    idTitle: "Kalibrasi & Pemeliharaan",
    enTitle: "Calibration & Maintenance Check",
    idIntro: "Layanan kalibrasi tersertifikasi, pemeliharaan preventif, dan perbaikan untuk seluruh perangkat deteksi gas serta instrumen keselamatan.",
    enIntro: "Certified calibration, preventive maintenance, and repair services for all gas detection devices and safety instruments.",
    idFeatures: [
      "Kalibrasi tersertifikasi terlacak ke standar internasional",
      "Bump test dan kalibrasi otomatis dengan DSX™ Docking Station",
      "Program pemeliharaan preventif terjadwal",
      "Perbaikan dan penggantian sensor di workshop kami",
      "Sertifikat kalibrasi resmi untuk audit kepatuhan",
      "Layanan on-site dan pickup di seluruh Indonesia",
    ],
    enFeatures: [
      "Certified calibration traceable to international standards",
      "Automated bump testing and calibration with DSX™ Docking Stations",
      "Scheduled preventive maintenance programs",
      "In-workshop sensor repair and replacement",
      "Official calibration certificates for compliance audits",
      "On-site and pickup service across Indonesia",
    ],
  },
];

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const s = SOLUTIONS.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData }) => {
    const s = loaderData!;
    return {
      meta: [
        { title: `${s.enTitle} — SSH Company` },
        { name: "description", content: s.enIntro },
        { property: "og:title", content: `${s.enTitle} — SSH Company` },
        { property: "og:description", content: s.enIntro },
        { property: "og:url", content: `/solutions/${s.slug}` },
      ],
      links: [{ rel: "canonical", href: `/solutions/${s.slug}` }],
    };
  },
  component: SolutionDetail,
});

function SolutionDetail() {
  const s = Route.useLoaderData();
  const { t, lang } = useLang();
  const features = lang === "id" ? s.idFeatures : s.enFeatures;

  return (
    <>
      <PageHero
        eyebrow={t("SOLUSI", "SOLUTION")}
        title={t(s.idTitle, s.enTitle)}
        intro={t(s.idIntro, s.enIntro)}
      />

      <section className="border-b border-line bg-background">
        <div className="container-ssh grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>{t("CAKUPAN LAYANAN", "SCOPE OF SERVICE")}</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-[-0.025em]">
              {t("Apa yang termasuk.", "What's included.")}
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((f: string) => (
                <li key={f} className="flex items-start gap-3 border-t border-line pt-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand" strokeWidth={1.5} />
                  <span className="text-[15px] text-ink">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <PrimaryCTA to="/contact">{t("Minta Konsultasi", "Request Consultation")}</PrimaryCTA>
            </div>
          </div>
          <div className="lg:col-span-5">
            <LeadForm variant="consultation" />
          </div>
        </div>
      </section>
    </>
  );
}
